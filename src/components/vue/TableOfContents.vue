<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, DropdownMenuContent } from 'radix-vue';
import { onMounted, ref } from 'vue';

function backToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}

const isOpen = ref(false);
const isDesktop = ref(false);

onMounted(() => {
  const query = window.matchMedia('(min-width: 1280px)');
  if (query.matches) {
    isDesktop.value = true;
    isOpen.value = true;
  }
})
</script>

<template>
  <div
    class=":uno: border border-navigation-border bottom-8 left-8 z-40 grid place-items-center p-1 lg:p-0 lg:border-none shadow lg:shadow-none lg:bg-transparent bg-navigation-background lg:top-32 lg:bottom-unset transition-colors text-content rounded-md shadow-md lg:shadow-none fixed"
  >
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <DropdownMenuRoot
          :modal="false"
          :open="isOpen"
          @update:open="(open) => isOpen = open"
        >
          <TooltipTrigger as-child>
            <DropdownMenuTrigger class=":uno: w-[36px] h-[36px] lg:w-auto lg:h-auto grid place-items-center transition-colors hover:bg-navigation-accent focus:bg-navigation-accent lg:hover:bg-transparent rounded-md lg:focus:bg-transparent">
              <slot name="button" />
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent
              :side="isDesktop ? 'right' : 'top'"
              :side-offset="isDesktop ? 0 : 5"
              :align="isDesktop ? 'center' : 'start'"
              :align-offset="isDesktop ? 0 : -4"
              class="rounded-md text-sm py-2 tooltip__content bg-content text-background lg:bg-transparent lg:text-unset lg:border-none select-none px-3 will-change-[transform,opacity]"
            >
              <p>Table of Contents</p>

              <TooltipArrow
                :width="8"
                v-if="!isDesktop"
                class="fill-content"
              />
            </TooltipContent>
          </TooltipPortal>

          <DropdownMenuPortal>
            <DropdownMenuContent
              align="start"
              side="bottom"
              @interact-outside="(e) => {
                if (isDesktop) {
                  e.preventDefault();
                  return;
                }
              }"
              :force-mount="true"
              class=":uno: lg:mt-4 lg:mb-0 mb-4 border border-navigation-border rounded-md xl:rounded-none xl:shadow-none shadow-md bg-navigation-background p-4 xl:p-0 xl:bg-transparent xl:translate-x-0 -translate-x-1 xl:border-none transition-all origin-bottom-left lg:origin-top-left data-[state=closed]:opacity-0 data-[state=opened]:opacity-100 data-[state=closed]:scale-95 data-[state=opened]:scale-100"
            >
              <slot name="toc" />

              <button
                class=":uno: lg:items-center space-x-2 mt-8 text-heading hidden transition-colors lg:flex text-sm"
                @click="backToTop"
                :tabindex="-1"
              >
                <slot name="btt" />

                <span>Back to Top</span>
              </button>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenuRoot>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>
