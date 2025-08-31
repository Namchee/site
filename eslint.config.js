import config from '@namchee/eslint-config';

import tsParser from '@typescript-eslint/parser';


import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

import stylistic from '@stylistic/eslint-plugin';
import unocss from '@unocss/eslint-config/flat';

export default [
  ...config,
  unocss,
  // {
  //   files: ['**/*.vue'],
  //   plugins: {
  //     vue,
  //   },
  //   languageOptions: {
  //     parser: vueParser,
  //     parserOptions: {
  //       parser: tsParser,
  //     },
  //   },
  //   rules: {
  //     ...vue.configs['strongly-recommended'],
  //   },
  // },
  {
    files: ['**/*.astro', '**/*.mdx'],
    plugins: {
      astro: astro,
      style: stylistic,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      ...astro.configs.recommended,
      'style/quotes': ['error', 'single'],
    },
  },
];
