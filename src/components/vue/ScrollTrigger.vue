<script setup lang="ts">
import {
  animate,
  inView,
  stagger,
  StyleKeyframesDefinition,
} from 'motion';
import { onMounted, ref, Ref } from 'vue';

import { EASING_FUNC } from '@/constant/easing';

interface RevealingTextProps {
  apply: StyleKeyframesDefinition;
  target?: string;
  as?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  easing?: string;
  offset?: number;
  class?: string;
}

const props = withDefaults(defineProps<RevealingTextProps>(), {
  as: 'div',
  reveal: 'word',
  duration: 0.6,
  easing: 'easeOutQuad',
  offset: 0.5,
});

let easingFunc = EASING_FUNC[props.easing];
if (!easingFunc) {
  easingFunc = EASING_FUNC['easeOutQuad'];
}

const root: Ref<HTMLElement> = ref(null);

onMounted(() => {
  inView(
    root.value,
    (entry) => {
      const el = props.target ? `.${props.target}` : entry.target;
      animate(
        el,
        props.apply,
        {
          duration: props.duration,
          delay: props.stagger ? stagger(props.stagger) : props.delay,
          easing: easingFunc,
        },
      );
    },
    {
      amount: props.offset,
    }
  );
});
</script>

<template>
  <component :is="props.as" :class="props.class" ref="root">
    <slot></slot>
  </component>
</template>

