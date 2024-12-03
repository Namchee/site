<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, DropdownMenuContent } from 'radix-vue';
import { onMounted, ref, watch } from 'vue';

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
});

watch(isOpen, () => {
  // table of contents
  if (isOpen) {
    let currentActiveLink = null;

    const observer = new IntersectionObserver((entries) => {
      let mostVisibleEntry = null;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (
            !mostVisibleEntry ||
            entry.intersectionRatio > mostVisibleEntry.intersectionRatio
          ) {
            mostVisibleEntry = entry;
          }
        }
      });

      if (mostVisibleEntry) {
        const id = mostVisibleEntry.target.id;
        const newActiveLink = document.querySelector(
          `nav ul li a[href="#${id}"]`
        );

        if (newActiveLink && currentActiveLink !== newActiveLink) {
          if (currentActiveLink) {
            currentActiveLink.classList.remove("text-heading", "font-medium");
          }
          newActiveLink.classList.add("text-heading", "font-medium");
          currentActiveLink = newActiveLink;
        }
      }
    });

    const tocLinks = document.querySelectorAll("h2[id], h3[id]");
    tocLinks.forEach((link) => observer.observe(link));
  }

})
</script>

<template>
  <div
    class=":uno: border border-navigation-border bottom-8 left-8 z-40 grid place-items-center p-1 md:p-0 md:border-none shadow md:shadow-none md:bg-transparent bg-navigation-background md:top-32 md:bottom-unset transition-colors text-content rounded-md shadow-md fixed">
    <TooltipProvider :delay-duration="100">
      <TooltipRoot>
        <DropdownMenuRoot :modal="false" :open="isOpen" @update:open="(open) => isOpen = open">
          <TooltipTrigger as-child>
            <DropdownMenuTrigger
              class=":uno: w-[36px] h-[36px] lg:w-auto lg:h-auto grid place-items-center transition-colors hover:bg-navigation-accent focus:bg-navigation-accent lg:hover:bg-transparent rounded-md lg:focus:bg-transparent">
              <slot name="button" />
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent :side="isDesktop ? 'right' : 'top'" :side-offset="isDesktop ? 0 : 5"
              :align="isDesktop ? 'center' : 'start'" :align-offset="isDesktop ? 0 : -4"
              class="rounded-md text-sm py-2 tooltip__content bg-content text-background xl:bg-transparent xl:text-unset xl:border-none select-none px-3 will-change-[transform,opacity]">
              <p>Table of Contents</p>

              <TooltipArrow :width="8" v-if="!isDesktop" class="fill-content" />
            </TooltipContent>
          </TooltipPortal>

          <DropdownMenuPortal>
            <DropdownMenuContent :side="'bottom'" :align="'start'" :align-offset="-10" :side-offset="16"
              @interact-outside="(e) => {
                if (isDesktop) {
                  e.preventDefault();
                  return;
                }
              }"
              class=":uno: border border-navigation-border rounded-md xl:rounded-none xl:shadow-none shadow-md bg-navigation-background p-4 xl:p-0 xl:bg-transparent md:translate-x-0 xl:border-none transition-all origin-bottom-left lg:origin-top-left dropdown__menu">
              <slot name="toc" />

              <button class=":uno: lg:items-center space-x-2 mt-8 text-heading hidden transition-colors md:flex text-sm"
                @click="backToTop" :tabindex="-1">
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
