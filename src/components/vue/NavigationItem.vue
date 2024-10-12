<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from 'radix-vue';

const props = defineProps({
  label: { type: String, required: true }
});
</script>

<template>
  <TooltipProvider :delay-duration="200">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          class="text-xs rounded-md shadow py-2 tooltip__content text-background select-none px-3 will-change-[transform,opacity] bg-heading"
          :side-offset="5">
          <p>{{ props.label }}</p>

          <TooltipArrow :width="8" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<style>
.tooltip__content {
  transform-origin: var(--radix-tooltip-content-transform-origin);
  animation: scaleIn 100ms cubic-bezier(0.33, 1, 0.68, 1);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
