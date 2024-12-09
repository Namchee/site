<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipArrow, TooltipTrigger, TooltipPortal, TooltipContent } from 'radix-vue';

function backToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <div
    class=":uno: fixed border border-navigation-border bottom-8 right-8 z-10 grid place-items-center p-1 shadow bg-navigation-background transition-colors text-content rounded-md shadow-md md:hidden"
  >
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <button
            @click="backToTop"
            class=":uno: w-[36px] h-[36px] lg:w-auto lg:h-auto grid place-items-center transition-colors hover:bg-navigation-accent focus:bg-navigation-accent lg:hover:bg-transparent rounded-md lg:focus:bg-transparent"
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
            class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]"
          >
            <p>
              Back to top
            </p>

            <TooltipArrow
              :width="8"
              class="fill-content"
            />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
