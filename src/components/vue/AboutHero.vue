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
      { opacity: 1 },
      { delay: stagger(0.2), duration: 0.25, easing: [0.33, 1, 0.68, 1] }
    ],
  ]);
});
</script>

<template>
  <header class="w-full grid grid-cols-12 gap-6">
    <h1 class="text-7xl col-start-2 col-span-full">
      <p class="overflow-y-hidden">
        Driven By <span class="font-medium text-accent-light translate-y-32 inline-block word">Purpose</span>
      </p>
      <p class="overflow-y-hidden">
        Deliver By <span class="font-medium text-accent-dark translate-y-32 inline-block word">Quality</span>
      </p>
    </h1>

    <div class="col-start-2 col-span-full mt-16 flex space-x-48">
      <section class="subtitle opacity-0">
        <h2 class="font-medium tracking-tight text-grey">
          Current Location
        </h2>
        <p class="text-xl leading-relaxed">
          Bandung, Indonesia
        </p>
      </section>
      <section class="subtitle opacity-0 flex items-center">
        <SpeechButton client:visible />
      </section>
    </div>
  </header>
</template>
