<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { animate, Easing, spring, stagger as staggerVal } from 'motion';

import { EASING_FUNC } from '@/constant/easing';

interface RevealingTextProps {
  reveal?: string;
  delay?: number;
  duration?: number;
  easing?: string;
}

const {
  reveal = 'box',
  delay = 0,
  duration = 0.5,
  easing = 'ease-out-quad',
} = defineProps<RevealingTextProps>();

let easingFunc: Easing = EASING_FUNC[easing];

if (!easingFunc) {
  easingFunc = EASING_FUNC['ease-out-quad'];
}

function onIntersectionObserver([{ isIntersecting }]) {
  if (isIntersecting) {
    animate(
      `.${reveal}`,
      {
        transform: 'translateY(0)',
        opacity: 1,
      },
      {
        delay: delay,
        duration: duration,
        easing: spring(),
      },
    );
  }
}
</script>

<template>
  <div v-intersection-observer="onIntersectionObserver">
    <slot />

  </div>
</template>

