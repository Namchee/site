<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui';
import { DrawerOverlay, DrawerTrigger, DrawerRoot, DrawerContent, DrawerPortal } from 'vaul-vue';
</script>

<template>
  <div
    class=":uno: border border-separator bottom-8 left-8 z-10 grid place-items-center p-1 md:p-0 md:border-none shadow md:shadow-none md:bg-transparent bg-background dark:bg-[var(--navigation)] md:top-32 md:bottom-unset transition-colors text-content rounded-md shadow-md fixed">
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <DrawerRoot>
          <TooltipTrigger as-child>
            <DrawerTrigger
              class=":uno: size-[36px] xl:w-auto xl:h-auto grid place-items-center transition-colors hover:bg-surface-2 focus:bg-surface-2 rounded-md xl:hover:bg-transparent xl:focus:bg-transparent"
            >
              <slot name="button" />
            </DrawerTrigger>
          </TooltipTrigger>

          <TooltipPortal>
            <TooltipContent :collision-padding="32" :side-offset="4" class="rounded-md text-sm py-2 tooltip__content bg-heading text-surface-1 xl:border-none select-none px-3 will-change-[transform,opacity]">
              <p>Table of Contents</p>

              <TooltipArrow :width="8" class="fill-heading" />
            </TooltipContent>
          </TooltipPortal>

          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent>
              <slot name="toc" />
            </DrawerContent>
          </DrawerPortal>

        </DrawerRoot>

      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>

