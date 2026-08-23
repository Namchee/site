import type { HastNode } from 'satteri';

import { slug } from 'github-slugger';
import { defineHastPlugin } from 'satteri';

const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

function elementText(node: HastNode): string {
  if (node.type === 'text') {
    return node.value ?? '';
  }

  if (node.type === 'element') {
    return node.children.map(elementText).join('');
  }

  return '';
}

function headingDepth(node: HastNode): number {
  if (node.type !== 'element') {
    return 0;
  }

  return HEADING_TAGS.indexOf(node.tagName) + 1;
}

function sectionFromHeading(heading: HastNode): HastNode {
  return {
    type: 'element',
    tagName: 'section',
    properties: { id: slug(elementText(heading)), class: 'blog-section' },
    children: [heading],
  } as unknown as HastNode;
}

function sectionChildren(section: HastNode): HastNode[] {
  return (section as { children: HastNode[] }).children;
}

function sectionizeChildren(children: readonly HastNode[]): HastNode[] {
  const result: HastNode[] = [];
  const sectionStack: { depth: number; element: HastNode }[] = [];
  const pending: HastNode[] = [];

  for (const child of children) {
    const depth = headingDepth(child);

    if (depth > 0) {
      while (sectionStack.length && sectionStack[sectionStack.length - 1].depth >= depth) {
        const closed = sectionStack.pop();
        const target = sectionStack.length ? sectionChildren(sectionStack[sectionStack.length - 1].element) : result;

        if (closed) {
          target.push(closed.element);
        }
      }

      sectionStack.push({ depth: depth, element: sectionFromHeading(child) });
    } else if (sectionStack.length) {
      sectionChildren(sectionStack[sectionStack.length - 1].element).push(child);
    } else {
      pending.push(child);
    }
  }

  while (sectionStack.length) {
    const closed = sectionStack.pop()!;
    const target = sectionStack.length ? sectionChildren(sectionStack[sectionStack.length - 1].element) : result;
    target.push(closed.element);
  }

  return [...pending, ...result];
}

export const sectionize = () => {
  const done = new WeakSet();

  return defineHastPlugin({
    name: 'sectionize',
    element: {
      filter: HEADING_TAGS,
      visit: (node, ctx) => {
        const parent = ctx.parent(node);
        if (!parent || !('children' in parent) || done.has(parent)) {
          return;
        }

        done.add(parent);
        ctx.setProperty(parent, 'children', sectionizeChildren([...(parent as { children: HastNode[] }).children]));
      },
    },
  });
};
