import { defineConfig } from 'astro/config';

import icon from 'unplugin-icons/vite';

import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  vite: {
    plugins: [
      icon(),
    ],
  },
});
