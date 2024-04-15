import { resolve } from 'node:path';

import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': resolve(__dirname, '/src'),
    },
  },
});
