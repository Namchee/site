<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipArrow, TooltipContent, DropdownMenuContent, DropdownMenuItem } from 'radix-vue';
</script>

<template>
  <DropdownMenuRoot :modal="false">
    <DropdownMenuTrigger as-child>
      <button
        class="fixed border border-navigation-border top-32 left-8 w-8 h-8 grid place-items-center transition-colors text-content rounded-md hover:bg-navigation-accent focus:bg-navigation-accent text-sm">
        <slot name="button" />
      </button>
      <!-- <TooltipProvider :delay-duration="100">
        <TooltipRoot>
          <div
            class=":uno: bg-navigation-background border border-navigation-border fixed left-8 top-32 p-1 rounded-md grid place-items-center">
            <TooltipTrigger as-child>

            </TooltipTrigger>
          </div>


          <TooltipPortal>
            <TooltipContent
              class="text-sm rounded-md shadow py-2 tooltip__content bg-content text-background shadow-lg select-none px-3 will-change-[transform,opacity] block md:hidden"
              :side-offset="5">
              <p>Table of Contents</p>

              <TooltipArrow :width="8" class="fill-content" />
            </TooltipContent>
          </TooltipPortal>
        </TooltipRoot>
      </TooltipProvider> -->
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent side="right" class=":uno: mt-4">
        <p class=":uno: font-medium text-heading">In This Post</p>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
