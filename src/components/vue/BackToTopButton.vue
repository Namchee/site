<script setup lang="ts">
import ArrowUp from '~icons/radix-icons/arrow-up';

const scrollToTop = () => {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <button @click="scrollToTop" class="md:flex items-center
      font-medium
      shadow-md
      rounded-md
      hidden tracking-tight ml-auto text-sm py-2 px-4
      transition-all hover:ring-2 focus:ring-2
      text-light bg-dark
      focus:bg-blackout focus:ring-blackout focus:ring-opacity-25
      hover:bg-blackout hover:ring-blackout hover:ring-opacity-25">
    <ArrowUp class="w-5 h-auto" />
    <p class="ml-2">
      Back to top
    </p>
  </button>
</template>
