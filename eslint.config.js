import config from '@namchee/eslint-config';

import astro from 'eslint-plugin-astro';

import stylistic from '@stylistic/eslint-plugin';
import unocss from '@unocss/eslint-config/flat';

export default [
  ...config,
  unocss,
  ...astro.configs.recommended,
  {
    files: ['**/*.astro', '**/*.vue', '**/*.mdx'],
    plugins: {
      style: stylistic,
    },
    rules: {
      'style/quotes': ['error', 'single'],
      'style/semi': ['error', 'always'],
    },
  },
];
