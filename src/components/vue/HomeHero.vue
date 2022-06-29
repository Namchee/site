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
        delay: stagger(0.1),
        duration: 0.75,
        easing: [0.16, 1, 0.3, 1],
      },
    ],
  ])
})
</script>

<template>
  <h1 class="text-5xl tracking-tighter leading-snug font-medium">
		<p class="overflow-y-hidden">
      <span class="inline-block translate-y-64 reveal">
        Hey there!
      </span>
		</p>
		<p class="overflow-y-hidden">
      <span class="inline-block translate-y-64 reveal">
        Just call me Namchee
      </span>
		</p>
	</h1>
</template>

<style scoped>
.arrow {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}
</style>
