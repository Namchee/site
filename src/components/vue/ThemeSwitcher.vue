<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from 'radix-vue';
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <button
          class=":uno: text-content transition-colors bg-transparent p-2 rounded-md hover:bg-navigation-accent hover:text-heading focus:bg-navigation-accent focus:text-heading active:bg-pressurized theme-toggle m-1 w-[36px] h-[36px]"
          aria-live="polite"
        >
          <slot />
        </button>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          class="text-sm rounded-md shadow py-2 tooltip__content bg-content text-background select-none px-3 will-change-[transform,opacity]"
          :side-offset="5"
        >
          <p>Switch Theme</p>

          <TooltipArrow
            :width="8"
            class="fill-content"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
