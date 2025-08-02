<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipArrow, TooltipTrigger, TooltipPortal, TooltipContent } from 'reka-ui';

function backToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <div
    class=":uno: fixed border border-separator bottom-8 right-8 z-20 grid place-items-center p-1 shadow bg-background dark:bg-[var(--navigation)] transition-colors text-content rounded-md shadow-md xl:hidden"
  >
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <button
            @click="backToTop"
            class=":uno: size-[36px] grid place-items-center transition-colors hover:bg-surface-2 focus:bg-surface-2 lg:hover:bg-transparent rounded-md lg:focus:bg-transparent"
          >
            <slot />
          </button>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            side="top"
            :side-offset="5"
            align="end"
            :align-offset="-4"
            class="rounded-md text-sm py-2 tooltip__content bg-heading text-surface-1 select-none px-3 will-change-[transform,opacity]"
          >
            <p>
              Back to top
            </p>

            <TooltipArrow
              :width="8"
              class="fill-heading"
            />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
