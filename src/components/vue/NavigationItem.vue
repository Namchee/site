<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from 'reka-ui';

const props = defineProps({
  label: { type: String, required: true },
  className: { type: String, default: '' },
  href: { type: String, required: true },
});
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <a rel="noopener noreferrer" :href="props.href"
          :class="`size-[36px] grid place-items-center transition-colors text-content rounded-md hover:bg-surface-2 focus:bg-surface-2 text-sm my-1 mr-1 ${props.className}`">
          <slot />
        </a>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          class="text-sm rounded-md shadow py-2 tooltip__content bg-heading text-surface-1 shadow-lg select-none px-3 will-change-[transform,opacity]"
          :side-offset="5">
          <p>{{ props.label }}</p>

          <TooltipArrow :width="8" class="fill-heading" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
