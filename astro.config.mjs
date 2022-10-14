import { defineConfig } from 'astro/config';

import icon from 'unplugin-icons/vite';

import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    react(),
    tailwind(),
  ],
  vite: {
    plugins: [
      icon(),
    ],
  },
});
