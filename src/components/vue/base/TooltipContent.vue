<script setup lang="ts">
import type { TooltipContentProps } from 'reka-ui';
import { TooltipArrow, TooltipContent } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<TooltipContentProps & { class?: HTMLAttributes["class"] }>(), {
  class: 'text-sm rounded-md py-2 bg-heading shadow text-surface-1 select-none px-3 transition-colors will-change-[transform,opacity] tooltip-content',
})
</script>

<template>
  <TooltipContent {...props}>
    <slot />

    <TooltipArrow :width="8" class="fill-heading" />
  </TooltipContent>
</template>

<style scoped>
.tooltip-content {
  transform-origin: var(--reka-tooltip-content-transform-origin);
  animation: scaleIn 100ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
