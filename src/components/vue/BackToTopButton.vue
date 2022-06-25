<script setup lang="ts">
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
    <svg class="w-5 h-auto" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg>
    <p class="ml-2">
      Back to top
    </p>
  </button>
</template>
