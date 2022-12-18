<script setup lang="ts">
import { useScroll } from '@vueuse/core';

interface NavigationProps {
  currentPath: string;
}

const props = defineProps<NavigationProps>();
</script>

<template>
  <nav
    class="fixed bottom-[96px] md:bottom-[56px] left-[50%] -translate-x-[50%]
      z-10
      text-content-light
      p-1
      shadow
      border border-surface-darker
      bg-surface bg-opacity-80
      backdrop-blur
      grid grid-cols-3
      rounded-full
      hidden"
  >
    <a href="/"
      class="w-24 h-12 grid place-items-center rounded-full"
      :class="{ 'bg-surface-darker text-content-dark': props.currentPath === '/' }">
      Home
    </a>
    <a href="/about"
      class="w-24 h-12 grid place-items-center rounded-full"
      :class="{ 'bg-surface-darker text-content-dark': props.currentPath === '/about' }">
      About
    </a>
    <a href="/blog"
      class="w-24 h-12 grid place-items-center rounded-full"
      :class="{ 'bg-surface-darker text-content-dark': props.currentPath === '/blog' }">
      Blog
    </a>
  </nav>
</template>
