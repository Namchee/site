<script setup lang="ts">
interface NavigationProps {
  currentPath: string;
}

const props = defineProps<NavigationProps>();
console.log(props.currentPath)
</script>

<template>
  <nav
    class="fixed bottom-[60px] left-[50%] -translate-x-[50%]
      bg-surface-dark
      text-content-light
      p-1
      grid grid-cols-3
      rounded-full"
  >
    <a href="/"
      class="w-24 h-12 grid place-items-center rounded-full"
      :class="{ 'bg-white text-content-dark': props.currentPath === '/' }">
      Home
    </a>
    <a href="/about"
      class="w-24 h-12 grid place-items-center rounded-full"
      :class="{ 'bg-white text-content-dark': props.currentPath === '/about' }">
      About
    </a>
    <a href="/blog"
      class="w-24 h-12 grid place-items-center rounded-full"
      :class="{ 'bg-white text-content-dark': props.currentPath === '/blog' }">
      Blog
    </a>
  </nav>
</template>
