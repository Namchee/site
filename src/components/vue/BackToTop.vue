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
    class=":uno: text-content border-separator bg-background fixed right-8 bottom-8 z-20 grid place-items-center rounded-md border p-1 shadow transition-colors xl:hidden dark:bg-[var(--navigation)]"
  >
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <button
            class=":uno: focus:bg-surface-2 hover:bg-surface-2 grid size-[36px] place-items-center rounded-md transition-colors lg:hover:bg-transparent lg:focus:bg-transparent"
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
          <p>Back to top</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
