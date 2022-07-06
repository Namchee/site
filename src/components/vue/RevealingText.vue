<script setup lang="ts">
import { onMounted } from 'vue';
import { animate, Easing, stagger as staggerVal } from 'motion';

import { EASING_FUNC } from '@/constant/easing';

interface RevealingTextProps {
  reveal?: string;
  duration?: number;
  stagger?: number;
  easing?: string;
}

const {
  reveal = 'word',
  stagger = 0.075,
  duration = 0.5,
  easing = 'ease-out-quad',
} = defineProps<RevealingTextProps>();

let easingFunc: Easing = EASING_FUNC[easing];

if (!easingFunc) {
  easingFunc = EASING_FUNC['ease-out-quad'];
}

onMounted(() => {
  animate(
    `.${reveal}`,
    {
      transform: 'translateY(0)',
    },
    {
      delay: staggerVal(stagger),
      duration: duration,
      easing: easingFunc,
    },
  );
})
</script>

<template>
  <slot />
</template>

