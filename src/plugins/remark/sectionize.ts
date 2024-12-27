/**
 * Code is taken from 'remark-sectionize' by Jake Low with few modifications.
 */

import { slug } from 'github-slugger';
import type { Transformer } from 'unified';

import { toString } from 'mdast-util-to-string';

import { visit } from 'unist-util-visit';
import { findAfter } from 'unist-util-find-after';

const MAX_HEADING_DEPTH = 3

export function remarkSectionize(): Transformer {
  return function(tree) {
    for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
      visit(
        tree,
        node => node.type === 'heading' && node.depth === depth,
        sectionize,
      )
    }
  }
}

function sectionize(node, index, parent) {
  const start = node;
  const startIndex = index;
  const depth = start.depth;

  const isEnd = node => node.type === 'heading' && node.depth <= depth || node.type === 'export';
  const end = findAfter(parent, start, isEnd);
  const endIndex = parent.children.indexOf(end);

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
        class: "blog-section"
      }
    }
  };

  parent.children.splice(startIndex, section.children.length, section);
}
