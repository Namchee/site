<script setup lang="ts">
import { timeline, stagger } from 'motion';
import { onMounted } from 'vue';

import SpeechButton from '@/components/vue/SpeechButton.vue';

onMounted(() => {
  timeline([
    [
      '.word',
      { transform: 'translateY(0)' },
      { delay: stagger(0.8), duration: 0.25, easing: [0.25, 1, 0.5, 1] }
    ],
    [
      '.subtitle',
      { opacity: 1, transform: 'scale(1)' },
      { delay: stagger(0.2), duration: 0.25, easing: [0.33, 1, 0.68, 1] }
    ],
  ]);
});
</script>

<template>
  <header class="w-full grid grid-cols-12 gap-6">
    <h1 class="text-3xl md:text-5xl lg:text-7xl xl:col-start-2 col-span-full tracking-tight">
      <p class="overflow-y-hidden">
        Driven By <span class="font-medium translate-y-32 inline-block word">Purpose</span>
      </p>
      <p class="overflow-y-hidden">
        Deliver By <span class="font-medium translate-y-32 inline-block word">Quality</span>
      </p>
    </h1>

    <div
      class="flex flex-col md:flex-row
        xl:col-start-2 col-span-full
        mt-8 xl:mt-16
        space-y-6
        md:space-y-0
        md:space-x-24
        xl:space-x-48">
      <section class="subtitle opacity-0 scale-95">
        <h2 class="font-medium tracking-tight text-grey text-sm md:text-base">
          Current Location
        </h2>
        <p class="text-base md:text-xl leading-relaxed">
          Bandung, Indonesia
        </p>
      </section>
      <section class="subtitle opacity-0 scale-95 flex items-center">
        <SpeechButton client:visible />
      </section>
    </div>
  </header>
</template>
