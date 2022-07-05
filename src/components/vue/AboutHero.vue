<script setup lang="ts">
import { timeline, stagger } from 'motion';
import { onMounted } from 'vue';

onMounted(() => {
  timeline([
    [
      '.word',
      {
        transform: 'translateY(0)',
      },
      {
        delay: stagger(0.085),
        duration: 0.5,
        easing: [0.33, 1, 0.68, 1],
      },
    ],
  ]);
});
</script>

<template>
  <header class="w-full xl:grid xl:grid-cols-12 gap-6">
    <h1 class="col-start-7 col-span-full header tracking-tight">
      <p class="overflow-y-hidden">
        <span class="inline-block translate-y-64 word">
          Namchee is a <span class="font-medium">purpose</span>
        </span>
      </p>
      <p class="overflow-y-hidden">
        <span class="inline-block translate-y-64 word">
          driven developer that
        </span>
      </p>
      <p class="overflow-y-hidden">
        <span class="inline-block translate-y-64 word">
          delivers <span class="font-medium">impact</span>
        </span>
      </p>
    </h1>
  </header>
</template>

<style scoped>
.header {
  font-size: clamp(24px, 56.83px, 6vw);
}
</style>
