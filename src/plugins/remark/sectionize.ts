/**
 * Code is taken from 'remark-sectionize' by Jake Low with few modifications.
 */
import { slug } from 'github-slugger';
import type { Transformer } from 'unified';
import type { Heading, Parent, Node, RootContent } from 'mdast';

import { toString } from 'mdast-util-to-string';

import { visit } from 'unist-util-visit';
import { findAfter } from 'unist-util-find-after';

const MAX_HEADING_DEPTH = 3;

export function remarkSectionize(): Transformer {
  return function(tree) {
    for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
      visit(
        tree,
        (node: Node): node is Heading => node.type === 'heading' && (node as Heading).depth === depth,
        sectionize,
      )
    }
  }
}

function sectionize(node: Heading, index: number, parent: Parent) {
  const start = node;
  const startIndex = index;
  const depth = start.depth;

  const isEnd = (node: Node) => node.type === 'heading' && (node as Heading).depth <= depth || node.type === 'export';
  const end = findAfter(parent, start, isEnd);
  const endIndex = parent.children.indexOf(end!);

  const between = parent.children.slice(startIndex, endIndex > 0 ? endIndex : undefined);

  const headingText = toString(start);

  const section = {
    type: 'section',
    depth,
    children: between,
    data: {
      hName: 'section',
      hProperties: {
        id: slug(headingText),
        class: 'blog-section',
      }
    }
  };

  // TODO: find a better way to remove unknown conversion
  parent.children.splice(startIndex, section.children.length, section as unknown as RootContent);
}
