import { slug } from 'github-slugger';
import { defineMdastPlugin, type HastNode, type MdastNode } from 'satteri';

function groupIntoSection(children: MdastNode[], slugFn: (node: MdastNode) => string): MdastNode[] {
  const sections: MdastNode[] = [];
  let current: MdastNode[] | null = null;

  for (const child of children) {
    if (child.type === 'heading') {
      const heading = {
        ...child, properties: {
          ...child.properties, id:
            slugFn(child),
        },
      };

      current = [heading];
      sections.push({
        type: 'containerDirective',
        data: {
          hName: 'section',

        },
        attributes: {

        },

        , properties: {
          class: 'blog-section',
        }, children: current,
      });
    } else if (current) {
      current.push(child);
    } else {
      sections.push(child);
    }
  }

  return sections;
}

export const sectionize = () => {
  const done = new WeakSet();
  return defineMdastPlugin({
    name: 'sectionize',
    heading: (node, ctx) => {
      const parent = ctx.parent(node);
      if (!parent || !('children' in parent) || done.has(parent)) {
        return;
      }

      done.add(parent);
      ctx.setProperty(parent, 'children', groupIntoSection(parent.children, node => slug(ctx.textContent(node))));
    },
  });
};
