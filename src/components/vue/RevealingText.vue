<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { animate, Easing, stagger as staggerVal } from 'motion';

import { EASING_FUNC } from '@/constant/easing';

interface RevealingTextProps {
  reveal?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  easing?: string;
  offset?: number;
}

const props = withDefaults(defineProps<RevealingTextProps>(), {
  reveal: 'word',
  stagger: 0.125,
  delay: 0,
  duration: 0.6,
  easing: 'ease-out-quad',
});

let easingFunc: Easing = EASING_FUNC[props.easing];

if (!easingFunc) {
  easingFunc = EASING_FUNC['ease-out-quad'];
}

function onIntersectionObserver([{ isIntersecting }]) {
  if (isIntersecting) {
    animate(
      `.${props.reveal}`,
      {
        transform: 'translateY(0)',
      },
      {
        delay: props.delay ? props.delay : staggerVal(props.stagger),
        duration: props.duration,
        easing: easingFunc,
      },
    );
  }
}
</script>

<template>
  <div v-intersection-observer="onIntersectionObserver">
    <slot></slot>
  </div>
</template>

