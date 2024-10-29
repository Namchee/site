<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from 'radix-vue';

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
          :class="`w-[36px] h-[36px] grid place-items-center transition-colors text-content rounded-md hover:bg-navigation-accent focus:bg-navigation-accent text-sm my-1 mr-1 ${props.className}`">
          <slot />
        </a>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          class="text-sm rounded-md shadow py-2 tooltip__content bg-content text-background shadow-lg select-none px-3 will-change-[transform,opacity]"
          :side-offset="5">
          <p>{{ props.label }}</p>

          <TooltipArrow :width="8" class="fill-content" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
