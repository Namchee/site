<script setup lang="ts">
import { ref } from 'vue';

import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from 'reka-ui';
import { DrawerContent, DrawerHandle, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue';

import ToCList from './posts/ToCList.vue';
import generateToC from '@/scripts/toc';

interface MarkdownHeading {
  depth: number;
  slug: string;
  text: string;
}

const props = defineProps({
  headings: { type: Array<MarkdownHeading>, required: true },
});

const tocList = generateToC(props.headings);

const open = ref(false);
</script>

<template>
  <div
    class=":uno: fixed border border-separator bottom-8 left-8 z-20 grid place-items-center p-1 shadow bg-background dark:bg-[var(--navigation)] transition-colors text-content rounded-md shadow-md md:hidden">
    <TooltipProvider :delay-duration="100">
      <DrawerRoot :open="open" @update:open="(o) => open = o">
        <TooltipRoot>
          <TooltipTrigger as-child>
            <DrawerTrigger focus
              class=":uno: size-[36px] xl:w-auto xl:h-auto grid place-items-center transition-colors hover:bg-surface-2 focus:bg-surface-2 rounded-md">
              <slot name="button" />

            </DrawerTrigger>
          </TooltipTrigger>

          <TooltipPortal>
            <TooltipContent :collision-padding="32" :side-offset="4"
              class=":uno: text-sm rounded-md shadow py-2 tooltip__content bg-heading text-surface-1 select-none px-3 will-change-[transform,opacity]">
              <p>Table of Contents</p>

              <TooltipArrow :width="8" class="fill-heading" />
            </TooltipContent>
          </TooltipPortal>
        </TooltipRoot>

        <DrawerPortal>
          <DrawerOverlay class=":uno: fixed bg-black w-screen h-screen z-30 bg-opacity-50 backdrop-blur" />

          <DrawerContent
            class="bg-background flex flex-col rounded-t-md shadow max-h-3/4 fixed bottom-0 left-0 right-0 z-30 p-4"
            @click="() => open = false" @closeAutoFocus="(e) => e.preventDefault()">
            <DrawerHandle class="bg-surface-2! hover:bg-surface-3 transition-colors" />

            <div class="p-2 pt-4">
              <nav class=":uno: text-sm max-w-64">
                <p class=":uno: mb-4 font-semibold text-heading transition-colors">
                  In this post
                </p>

                <ToCList :sections="tocList" />
              </nav>
            </div>
          </DrawerContent>
        </DrawerPortal>
      </DrawerRoot>
    </TooltipProvider>
  </div>

</template>
