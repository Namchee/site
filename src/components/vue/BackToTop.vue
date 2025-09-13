<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';
import ArrowUp from '~icons/lucide/arrow-up';

import TooltipContent from '@/components/vue/ui/TooltipContent.vue';

function backToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <div
    class=":uno: text-content p-1 border border-separator rounded-md bg-background grid shadow transition-colors bottom-8 right-8 place-items-center fixed z-20 dark:bg-[var(--navigation)] xl:hidden"
  >
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <button
            class=":uno: rounded-md grid size-[36px] transition-colors place-items-center focus:bg-surface-2 hover:bg-surface-2 lg:focus:bg-transparent lg:hover:bg-transparent"
            @click="backToTop"
          >
            <ArrowUp class=":uno: h-auto w-5" />
          </button>
        </TooltipTrigger>

        <TooltipContent
          side="top"
          :side-offset="5"
          align="end"
          :align-offset="-4"
        >
          <p>
            Back to top
          </p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
