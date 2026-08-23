import { fromHtml } from 'hast-util-from-html';
import katex from 'katex';
import { defineHastPlugin, type HastContent } from 'satteri';

export const math = defineHastPlugin({
  name: 'math',
  element: {
    filter: ['pre', 'code'],
    visit: (node, ctx) => {
      const meta = node.properties.className;
      if (!Array.isArray(meta) || !meta.includes('language-math')) {
        return;
      }

      const displayMode = meta.includes('math-display');
      const target = displayMode ? ctx.parent(node) : node;

      if (target) {
        const rawExpr = katex.renderToString(ctx.textContent(node), { displayMode });
        const tree = fromHtml(rawExpr).children[0].children[1].children[0] as unknown as HastContent;

        ctx.replaceNode(node, tree);
      }
    },
  },
});
