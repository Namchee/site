<script setup lang="ts">
import { stagger, timeline } from 'motion';
import { onMounted } from 'vue';

onMounted(() => {
  timeline([
    [
      '.reveal',
      {
        transform: 'translateY(0)',
      },
      {
        delay: stagger(0.8),
        duration: 0.3,
        easing: [0.16, 1, 0.3, 1],
      },
    ],
    [
      '.arrow',
      {
        strokeDashoffset: 0,
      },
      {
        delay: 0.2,
        duration: 3,
        easing: [0.3, 1, 0.68, 1],
      }
    ],
  ])
})
</script>

<template>
  <div>
    <h1 class="text-6xl font-semibold tracking-tighter text-center leading-tight relative">
      <p class="overflow-y-hidden">
        Building <span class="inline-block translate-y-32 text-accent-light reveal">softwares</span>
      </p>
      <p class="overflow-y-hidden">
        that solve <span class="inline-block translate-y-32 text-accent-dark reveal">problems</span>
      </p>

      <svg
        width="90"
        height="133"
        viewBox="0 0 90 133"
        fill="none"
        class="text-grey absolute top-[65px] right-[120px] rotate-[10deg]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="arrow"
          d="M47.6131 129.847C71.0653 129.83 90.5613 121.514 86.993 94.0797C84.2442 72.9459 58.9226 55.7886 38.759 67.3745C33.9278 70.1504 33.4047 77.9203 35.1378 82.6737C37.8794 90.1933 44.3286 92.8798 52.0698 92.022C66.1325 90.4638 81.9318 77.5945 79.9561 62.2201C76.8643 38.1604 55.2838 23.1073 33.2124 17.3066C28.816 16.1511 -5.09513 13.1138 12.4148 20.7655C15.5926 22.1542 25.266 25.9362 22.1817 24.3504C17.0679 21.7212 14.0851 20.4571 8.25913 19.5574C7.10249 19.3788 0.927188 19.2908 3.42335 17.0486C8.53433 12.4576 13.2672 7.49441 18.4914 3.01361"
          stroke="currentColor" stroke-width="5" stroke-linecap="round" />
      </svg>
    </h1>

    <p class="text-center text-grey text-xl mt-12">
      Namchee writes code that solve problems to make the world a better place
    </p>
  </div>
</template>

<style scoped>
.arrow {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}
</style>
