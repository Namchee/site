<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui';
import { DrawerContent, DrawerHandle, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue';
import { onMounted, onUnmounted, ref } from 'vue';
import TableOfContents from '~icons/lucide/table-of-contents';

import ToCList from '@/components/vue/posts/ToCList.vue';
import TooltipContent from '@/components/vue/ui/TooltipContent.vue';
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

const activeSections = ref(new Set<string>());

const open = ref(false);
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      const id = target.getAttribute('id')!;

      if (isIntersecting) {
        activeSections.value.add(id);
      } else {
        activeSections.value.delete(id);
      }
    }
  });

  for (const section of props.headings) {
    const el = document.getElementById(section.slug);
    if (el && observer) {
      observer.value?.observe(el);
    }
  }
});

onUnmounted(() => {
  if (observer.value && observer.value) {
    observer.value?.disconnect();
  }
});
</script>

<template>
  <div
    class=":uno: text-content p-1 border border-separator rounded-md bg-background grid shadow shadow-md transition-colors bottom-8 left-8 place-items-center fixed z-20 dark:bg-[var(--navigation)] xl:hidden"
  >
    <TooltipProvider :delay-duration="100">
      <DrawerRoot
        :open="open"
        @update:open="(o) => open = o"
      >
        <TooltipRoot>
          <TooltipTrigger as-child>
            <DrawerTrigger
              focus
              class=":uno: rounded-md grid size-[36px] transition-colors place-items-center focus:bg-surface-2 hover:bg-surface-2"
            >
              <TableOfContents class=":uno: h-auto w-5" />
            </DrawerTrigger>
          </TooltipTrigger>

          <TooltipContent
            :side-offset="4"
            side="top"
            align="start"
            :align-offset="-4"
            class=":uno: tooltip__content text-sm text-surface-1 px-3 py-2 will-change-[transform,opacity] rounded-md bg-heading select-none shadow"
          >
            <p>Table of Contents</p>
          </TooltipContent>
        </TooltipRoot>

        <DrawerPortal>
          <DrawerOverlay class=":uno: bg-black bg-opacity-50 h-screen w-screen fixed z-30 backdrop-blur" />

          <DrawerContent
            class=":uno: p-4 rounded-t-md bg-background flex flex-col max-h-3/4 shadow bottom-0 left-0 right-0 fixed z-30"
            @click="() => open = false"
            @close-auto-focus="(e) => e.preventDefault()"
          >
            <DrawerHandle class=":uno: transition-colors bg-surface-2! hover:bg-surface-3" />

            <div class="p-2 pt-4">
              <nav class=":uno: text-sm">
                <p class=":uno: text-heading font-semibold mb-4 transition-colors">
                  In this post
                </p>

                <ToCList
                  :sections="tocList"
                  :active-sections="activeSections"
                />
              </nav>
            </div>
          </DrawerContent>
        </DrawerPortal>
      </DrawerRoot>
    </TooltipProvider>
  </div>
</template>
