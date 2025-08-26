<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue'

function backToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <div
    class=":uno: fixed border border-separator bottom-8 right-8 z-20 grid place-items-center p-1 shadow bg-background dark:bg-[var(--navigation)] transition-colors text-content rounded-md shadow-md xl:hidden">
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <button @click="backToTop"
            class=":uno: size-[36px] grid place-items-center transition-colors hover:bg-surface-2 focus:bg-surface-2 lg:hover:bg-transparent rounded-md lg:focus:bg-transparent">
            <slot />
          </button>
        </TooltipTrigger>

        <TooltipContent side="top" :side-offset="5" align="end" :align-offset="-4">
          <p>
            Back to top
          </p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
