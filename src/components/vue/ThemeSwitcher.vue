<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';
</script>

<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <button
          class=":uno: text-content transition-colors bg-transparent p-2 rounded-md hover:bg-surface-2 focus:bg-surface-2 theme-toggle m-1 size-[36px]"
          aria-live="polite">
          <slot />
        </button>
      </TooltipTrigger>

      <TooltipContent :side-offset="5">
        <p>Switch Theme</p>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
