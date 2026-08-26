/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  printWidth: 120,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'consistent',
  singleAttributePerLine: true,
  arrowParens: 'avoid',
  trailingComma: 'all',
};
