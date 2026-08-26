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
  observer.value = new IntersectionObserver(entries => {
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
    class=":uno: text-content border-separator bg-background fixed bottom-8 left-8 z-20 grid place-items-center rounded-md border p-1 shadow shadow-md transition-colors xl:hidden dark:bg-[var(--navigation)]"
  >
    <TooltipProvider :delay-duration="100">
      <DrawerRoot
        :open="open"
        @update:open="o => (open = o)"
      >
        <TooltipRoot>
          <TooltipTrigger as-child>
            <DrawerTrigger
              focus
              class=":uno: focus:bg-surface-2 hover:bg-surface-2 grid size-[36px] place-items-center rounded-md transition-colors"
            >
              <TableOfContents class=":uno: h-auto w-5" />
            </DrawerTrigger>
          </TooltipTrigger>

          <TooltipContent
            :side-offset="4"
            side="top"
            align="start"
            :align-offset="-4"
            class=":uno: tooltip__content text-surface-1 bg-heading rounded-md px-3 py-2 text-sm shadow will-change-[transform,opacity] select-none"
          >
            <p>Table of Contents</p>
          </TooltipContent>
        </TooltipRoot>

        <DrawerPortal>
          <DrawerOverlay class=":uno: bg-opacity-50 fixed z-30 h-screen w-screen bg-black backdrop-blur" />

          <DrawerContent
            class=":uno: bg-background fixed right-0 bottom-0 left-0 z-30 flex max-h-3/4 flex-col rounded-t-md p-4 shadow"
            @click="() => (open = false)"
            @close-auto-focus="e => e.preventDefault()"
          >
            <DrawerHandle class=":uno: bg-surface-2! hover:bg-surface-3 transition-colors" />

            <div class="p-2 pt-4">
              <nav class=":uno: text-sm">
                <p class=":uno: text-heading mb-4 font-semibold transition-colors">In this post</p>

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
