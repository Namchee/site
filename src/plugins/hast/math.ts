import katex from 'katex';
import { defineHastPlugin } from 'satteri';

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
        ctx.replaceNode(target, {
          type: 'raw', value:
            katex.renderToString(ctx.textContent(node), { displayMode })
        });
      }
    },
  },
});
