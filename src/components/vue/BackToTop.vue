<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipArrow, TooltipTrigger } from 'radix-vue';

function backToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <div
    class=":uno: fixed border border-navigation-border bottom-8 right-8 z-40 grid place-items-center p-1 shadow bg-navigation-background transition-colors text-content rounded-md shadow-md lg:hidden">
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <button @click="backToTop"
            class=":uno: w-[36px] h-[36px] lg:w-auto lg:h-auto grid place-items-center transition-colors hover:bg-navigation-accent focus:bg-navigation-accent lg:hover:bg-transparent rounded-md lg:focus:bg-transparent">
            <slot />
          </button>
        </TooltipTrigger>
      </TooltipRoot>
    </TooltipProvider>

  </div>
</template>
