<script setup lang="ts">
import { animate, stagger } from 'motion';
import { onMounted } from 'vue';

onMounted(() => {
  animate(
    '.word',
    { transform: 'translateY(0)' },
    { delay: stagger(0.075), duration: 0.4, easing: [0.25, 1, 0.5, 1] },
  );
});
</script>

<template>
  <h1 class="text-6xl col-start-2 col-span-full tracking-tight leading-snug">
    <p class="overflow-y-hidden">
      <span class="inline-block translate-y-32 word">Hello&nbsp;</span>
      <span class="inline-block translate-y-32 word">there,&nbsp;</span>
    </p>
    <p class="overflow-y-hidden">
      <span class="inline-block translate-y-32 word">just&nbsp;</span><span class="inline-block translate-y-32 word">call&nbsp;</span><span class="inline-block translate-y-32 word">me&nbsp;</span>
      <span class="inline-block translate-y-32 word tracking-tighter font-medium text-primary">
        Namchee
      </span>
    </p>
  </h1>
</template>
