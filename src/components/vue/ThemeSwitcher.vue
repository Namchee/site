<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from 'reka-ui';
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <button
          class=":uno: text-content transition-colors bg-transparent p-2 rounded-md hover:bg-surface-2 focus:bg-surface-2 theme-toggle m-1 size-[36px]"
          aria-live="polite"
        >
          <slot />
        </button>
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          class="text-sm rounded-md shadow py-2 tooltip__content  bg-content text-background dark:bg-surface-2 dark:text-heading select-none px-3 will-change-[transform,opacity]"
          :side-offset="5"
        >
          <p>Switch Theme</p>

          <TooltipArrow
            :width="8"
            class="fill-content dark:fill-surface-2"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
