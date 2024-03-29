import config from '@namchee/eslint-config';

import tsParser from '@typescript-eslint/parser';

import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import vueConfig from 'eslint-plugin-vue/lib/configs/vue3-strongly-recommended.js';

import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import astroConfig from 'eslint-plugin-astro/lib/configs/recommended.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...config,
  {
    files: ['**/*.vue'],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      ...vueConfig.rules,
    },
  },
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      ...astroConfig.rules,
    },
  },
];
