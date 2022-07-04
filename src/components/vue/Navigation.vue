<script setup lang="ts">
import { WEB_LINKS } from '@/constant/link';

import AppLink from '@/components/vue/AppLink.vue';
import NavigationLink from '@/components/vue/NavigationLink.vue';
import Logo from '@/components/vue/Logo.vue';

import { ref } from 'vue';

interface NavigationProps {
  currentPath: string;
}

const open = ref(false);
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

      <button
        @click="open = !open"
        class="block md:hidden
          fixed top-6 right-6
          rounded-full border border-dark
          z-20"
      >
        Foo bar
      </button>

      <ul
        class="w-screen h-screen
          fixed top-0 left-0 z-10
          bg-blackout
          flex items-center space-x-12
          md:w-auto md:h-auto
          md:bg-transparent
          md:static
          md:translate-x-0"
        :class="{ 'translate-x-[100vw]': !open }"
      >
        <li v-for="link in WEB_LINKS" :key="link.href">
          <NavigationLink :href="link.href" :is-active="link.href === props.currentPath">
            {{ link.name }}
          </NavigationLink>
        </li>
      </ul>
    </div>
  </nav>
</template>


