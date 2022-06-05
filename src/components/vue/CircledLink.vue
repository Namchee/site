<script setup lang="ts">
import AppLink from '@/components/vue/AppLink.vue';

interface CircledLinkProps {
  href: string;
  external?: boolean;
  class?: string;
}

const props = defineProps<CircledLinkProps>();
</script>

<template>
  <AppLink :href="props.href" :external="props.external" :class="props.class"
    class="inline-grid place-items-center justify-center items-center link">
    <svg class="text-grey" viewBox="0 0 323 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="circle"
        d="M105.448 71.2275C167.155 71.2275 234.339 72.1474 290.526 54.3889C305.355 49.7021 328.579 41.2899 317.517 29.5741C310.533 22.1779 295.151 18.0484 282.651 14.9511C260.554 9.47623 236.674 6.49714 213 4.85772C164.523 1.5007 108.608 2.04362 62.1316 11.9477C44.814 15.638 -4.80355 25.6012 4.04842 42.1292C11.4762 55.998 37.9825 62.6807 59.5063 65.9101C100.564 72.0703 144.61 72.2989 186.666 73"
        stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    </svg>

    <p>
      <slot />
    </p>
  </AppLink>
</template>

<style scoped>
.link>* {
  grid-column: 1/-1;
  grid-row: 1/-1;
}

.circle {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 1000ms ease-in-out;
}

.link:hover .circle {
  stroke-dashoffset: 0;
}
</style>
