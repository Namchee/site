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
      flex justify-between items-center
      px-6
      md:px-16
      xl:px-0">
      <AppLink class="relative mix-blend-difference text-light
          text-opacity-80 z-20" href="/">
        <Logo />
      </AppLink>

      <button
        @click="open = !open"
        class="text-base
          overflow-y-hidden
          mix-blend-difference
          tracking-tight
          text-light
          text-opacity-80
          md:hidden
          z-20"
      >
        <Transition name="slide-up" mode="out-in">
          <p v-if="!open" class="relative">
            Menu
          </p>
          <p v-else class="relative">
            Close
          </p>
        </Transition>
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

<style scoped>

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.1s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(0.75rem);
}

.slide-up-leave-to {
  opacity: 1;
  transform: translateY(-0.75rem);
}
</style>
