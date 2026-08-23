import type { HastContent } from 'satteri';

import { fromHtml } from 'hast-util-from-html';
import katex from 'katex';
import { defineHastPlugin } from 'satteri';

export const math = defineHastPlugin({
  name: 'math',
  element: {
    filter: ['code'],
    visit: (node, ctx) => {
      const meta = node.properties.className;
      if (!Array.isArray(meta) || !meta.includes('language-math')) {
        return;
      }

      const parent = ctx.parent(node);
      const displayMode = parent?.type === 'element' && parent.tagName === 'pre';

      const tex = ctx.textContent(node);
      const tree = fromHtml(katex.renderToString(tex, { displayMode }), { fragment: true });
      const rendered = tree.children[0] as HastContent;
      if (!rendered) {
        return;
      }

      ctx.replaceNode(displayMode && parent ? parent : node, rendered);
    },
  },
});
