import { defineMdastPlugin } from 'satteri';

export const math = defineMdastPlugin({
  name: 'math',
  math: (node, ctx) => {
    ctx.replaceNode(node, { type: 'code', lang: 'math', value: node.value });
  },
});
