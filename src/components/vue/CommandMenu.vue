<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useMagicKeys } from '@vueuse/core';

import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from 'radix-vue';

import { Icon } from '@iconify/vue';

import { links } from '@/constant/links';

const visible = ref(false);

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    const isCtrlK = e.ctrlKey && e.key === 'k';
    const isMetaK = e.metaKey && e.key === 'k';

    if (isCtrlK || isMetaK) {
      e.preventDefault();
    }
  }
});

const ctrlK = keys['Ctrl+K'];
const metaK = keys['Meta+K'];

const searchTerm = ref('');

const relevantLinks = computed(() => {
  if (!searchTerm || !searchTerm.value) {
    return links;
  }

  const pattern = new RegExp(searchTerm.value, 'ig');

  return links.filter(link => pattern.test(link.name));
});


watch(ctrlK, (k) => {
  if (k) {
    visible.value = !visible.value;
  }
});

watch(metaK, (k) => {
  if (k) {
    visible.value = !visible.value;
  }
});
</script>

<template>
  <DialogRoot :open="visible">
    <DialogTrigger>
      <button
        @click="visible = true"
        class="grid place-items-center h-10 w-10 rounded-full border border-border fixed top-8 right-8 bg-background group focus:ring-2 focus:ring-accent focus:ring-opacity-30 focus:outline-none transition-colors"
      >
        <span class="mt-1">⌘</span>
        <p
          class="absolute text-sm -bottom-8 transition-all opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0"
        >
          Menu
        </p>
      </button>
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay
        @click="visible = false"
        class="dialog__overlay fixed w-screen h-screen bg-background bg-opacity-50 backdrop-blur"
      />
      <DialogContent class="dialog__content fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[75%] border border-border rounded-md bg-background w-4/5 max-w-md shadow ">
        <DialogTitle class="border-b border-border">
          <input
            class="w-full bg-transparent focus:outline-none text-sm p-4 placeholder:font-normal font-normal leading-relaxed"
            placeholder="Where do you want to go next?"
            v-model="searchTerm"
          >
        </DialogTitle>
        <DialogDescription class="p-4 max-h-xs overflow-y-auto space-y-4 h-auto transition-all transition-[height] h-auto">
          <div v-if="relevantLinks.length === 0">
            <p class="text-sm">
              Where's that again?
            </p>
          </div>
          <div v-if="relevantLinks.length > 0">
            <span class="font-medium text-xs mb-2">
              Pages
            </span>

            <a
              v-for="link in relevantLinks"
              :key="link.href"
              :href="link.href"
              class="flex items-center space-x-1 p-2 text-sm transition-colors hover:bg-surface hover:text-heading focus:bg-surface focus:text-heading rounded-md"
              rel="noopener noreferrer"
            >
              <Icon
                :icon="link.icon"
                class="w-4 h-auto mr-2"
              />
              <span class="relative top-[2px]">
                {{ link.name }}
              </span>
            </a>
          </div>
        </DialogDescription>

        <div class="border-t border-border py-2 px-4 text-xs">
          Click anywhere outside the dialog or press <kbd
            title="Command Key"
            class="p-[2px] bg-surface font-mono text-link border border-border rounded"
          >⌘</kbd> + <kbd class="p-[2px] bg-surface font-mono border border-border text-link rounded">K</kbd> to close the menu
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    translate: 0 0.1rem;
    scale: 0.985;
  }

  to {
    opacity: 1;
    translate: 0;
    scale: 1;
  }
}

@keyframes contentHide {
  from {
    opacity: 1;
    transform: 'translate(-50%, -50%) scale(1)';
  }

  to {
    opacity: 0;
    transform: 'translate(-50%, -48%) scale(0.96)';
  }
}


.dialog__overlay[data-state='open'] {
  animation: overlayShow 200ms easeOutCubic;
}

.dialog__overlay[data-state='closed'] {
  animation: overlayShow 200ms easeOutCubic reverse;
}

.dialog__content[data-state='open'] {
  animation: contentShow 200ms easeOutCubic;
}

.dialog__content[data-state='closed'] {
  animation: contentHide 200ms easeOutCubic;
}
</style>
