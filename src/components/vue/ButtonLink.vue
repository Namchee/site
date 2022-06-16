<script setup lang="ts">
import { computed } from 'vue';

import AppLink from '@/components/vue/AppLink.vue';

interface ButtonLinkProps {
  href: string;
  external?: boolean;
  class?: string;
  style?: 'normal' | 'rounded';
  theme?: 'neutral' | 'inverted';
}

const themeClass: Record<string, string> = {
  'neutral': 'bg-dark text-light transition-all hover:bg-blackout hover:ring-blackout hover:ring-opacity-25',
  'inverted': 'bg-transparent text-dark border border-dark transition-colors hover:text-light hover:bg-dark hover:ring-dark hover:ring-opacity-25'
};
const styleClass: Record<string, string> = {
  'normal': 'rounded-md',
  'rounded': 'rounded-full'
}

const props = withDefaults(defineProps<ButtonLinkProps>(), {
  style: 'normal',
  theme: 'neutral',
});

const className = computed(() => {
  return `flex items-center focus:ring-2 hover:ring-2 ${styleClass[props.style]} ${themeClass[props.theme]} ${props.class} `
});
</script>

<template>
  <AppLink
    :href="props.href"
    :external="props.external"
    :class="className">
    <slot />
  </AppLink>
</template>
