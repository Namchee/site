<script setup lang="ts">
import { WEB_LINKS } from '@/constant/link';

import AppLink from '@/components/vue/AppLink.vue';
import NavigationLink from '@/components/vue/NavigationLink.vue';
import Logo from '@/components/vue/Logo.vue';

interface NavigationProps {
  currentPath: string;
}

const props = defineProps<NavigationProps>();
</script>

<template>
  <nav class="w-full h-24 lg:h-28 grid place-items-center">
    <div class="w-full
      max-w-7xl
      flex justify-between
      px-6
      md:px-16
      xl:px-0">
      <AppLink href="/">
        <Logo />
      </AppLink>

      <button>
        Foo bar
      </button>

      <ul class="w-screen h-screen
        fixed
        bg-blackout
        flex items-center space-x-12
        md:w-auto md:h-auto
        md:bg-transparent
        md:static">
        <li v-for="link in WEB_LINKS" :key="link.href">
          <NavigationLink :href="link.href" :is-active="link.href === props.currentPath">
            {{ link.name }}
          </NavigationLink>
        </li>
      </ul>
    </div>
  </nav>
</template>


