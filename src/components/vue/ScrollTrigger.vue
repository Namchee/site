<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import {
  animate,
  stagger,
  StyleKeyframesDefinition,
} from 'motion';

import { EASING_FUNC } from '@/constant/easing';

interface RevealingTextProps {
  target: string;
  apply: StyleKeyframesDefinition;
  as?: string;
  duration?: number;
  delay?: number;
  easing?: string;
  offset?: number;
  class?: string;
}

const props = withDefaults(defineProps<RevealingTextProps>(), {
  as: 'div',
  reveal: 'word',
  stagger: 0.125,
  duration: 0.6,
  easing: 'ease-out-quad',
  offset: 1.0,
  class: '',
});

let easingFunc = EASING_FUNC[props.easing];

if (!easingFunc) {
  easingFunc = EASING_FUNC['ease-out-quad'];
}

function onIntersectionObserver([{ isIntersecting, intersectionRatio }]) {
  if (props.target == 'mission') {
    console.log(isIntersecting);
  }
  if (isIntersecting && intersectionRatio >= props.offset) {
    animate(
      `.${props.target}`,
      props.apply,
      {
        delay: stagger(props.delay),
        duration: props.duration,
        easing: easingFunc,
      },
    );
  }
}
</script>

<template>
  <component
    :is="props.as"
    :class="props.class"
    v-intersection-observer="onIntersectionObserver"
  >
    <slot></slot>
  </component>
</template>

