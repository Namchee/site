<script setup lang="ts">
import { ref, watch, computed, nextTick, watchEffect } from 'vue';
import { useMagicKeys, useThrottleFn, whenever } from '@vueuse/core';

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

import Key from '@/components/vue/Key.vue';

const visible = ref(false);
const searchEl = ref<HTMLInputElement>();
const focusIndex = ref(0);

const props = defineProps<{
  posts: {
    title: string;
    href: string;
  }[],
}>();

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    const isOpeningMenu = (e.ctrlKey || e.metaKey) && e.key === 'k';
    const isNavigatingMenu = (['ArrowDown', 'ArrowUp'].includes(e.key)) && visible.value;

    if (isOpeningMenu || isNavigatingMenu) {
      e.preventDefault();
    }
  }
});

const searchTerm = ref('');

const relevantLinks = computed(() => {
  if (!searchTerm || !searchTerm.value) {
    return links;
  }

  const pattern = new RegExp(searchTerm.value, 'i');

  return links.filter(link => pattern.test(link.name));
});

const relevantPosts = computed(() => {
  if (!searchTerm || !searchTerm.value) {
    return props.posts.slice(0, 3);
  }

  const pattern = new RegExp(searchTerm.value, 'i');

  return props.posts.filter(post => pattern.test(post.title))
});

const allLinks = computed(() => [...relevantLinks.value, ...relevantPosts.value]);

whenever(keys.ctrl_k, () => {
  visible.value = !visible.value;
});

whenever(keys.meta_k, () => {
  visible.value = !visible.value;
});

whenever(keys.home, () => {
  if (visible.value) {
    window.location.href = '/';
  }
});

whenever(keys.arrowDown, () => {
  if (visible.value) {
    focusIndex.value += 1;

    if (focusIndex.value >= allLinks.value.length) {
      focusIndex.value = allLinks.value.length - 1;
    }
  }
});

whenever(keys.arrowUp, () => {
  if (visible.value) {
    focusIndex.value -= 1;

    if (focusIndex.value < 0) {
      focusIndex.value = 0;
    }
  }
});

whenever(keys.enter, () => {
  if (visible.value) {
    const index = focusIndex.value;

    window.location.href = relevantLinks.value[index].href;
  }
});

whenever(keys.escape, () => {
  visible.value = false;
});

watch(searchTerm, () => {
  focusIndex.value = 0;
});

watch(visible, async () => {
  if (visible.value) {
    // ensure that the ref is populated first
    await nextTick();

    if (searchEl.value) {
      searchEl.value.focus();
    }

    if (focusIndex.value === -1) {
      focusIndex.value = 0;
    }
  }
});
</script>

<template>
  <DialogRoot v-model:open="visible">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay
        @click="visible = false"
        class=":uno: fixed bg-background w-screen h-screen dialog__overlay bg-opacity-50 backdrop-blur z-20"
      />
      <DialogContent
        class=":uno: fixed border border-separator bg-background shadow dialog__content rounded-md w-4/5 max-w-md max-h-sm z-30 focus:outline-none"
      >
        <DialogTitle class=":uno: border-separator border-b">
          <input
            class=":uno: text-sm w-full bg-transparent focus:outline-none p-4 placeholder:font-normal font-normal leading-relaxed"
            placeholder="Where do you want to go?"
            ref="searchEl"
            v-model="searchTerm"
          >
        </DialogTitle>

        <DialogDescription class=":uno: p-4 space-y-4 max-h-xs overflow-y-auto">
          <div v-if="relevantLinks.length === 0 && relevantPosts.length === 0">
            <p class=":uno: text-sm text-center opacity-85">
              Sorry, I don't know what or where that is 😕
            </p>
          </div>

          <div
            v-if="relevantLinks.length > 0"
          >
            <span class=":uno: font-semibold text-xs mb-2">
              Pages
            </span>

            <ul ref="currentLinks">
              <a
                v-for="(link, idx) in relevantLinks"
                :key="link.href"
                :href="link.href"
                class=":uno: text-sm rounded-md flex justify-between transition-colors outline-none p-2"
                :class="{ 'bg-surface text-heading': focusIndex === idx }"
                rel="noopener noreferrer"
                @mouseover="() => focusIndex = idx"
              >
                <div class=":uno: flex items-center space-x-4">
                  <Icon
                    :icon="link.icon"
                    class=":uno: w-4 h-auto"
                  />
                  <span class=":uno: relative">
                    {{ link.name }}
                  </span>
                </div>

                <kbd
                  v-if="!!link.key"
                  :title="link.key"
                  class=":uno: text-xs border border-separator text-heading px-1 bg-surface font-mono rounded"
                >{{ link.key }}</kbd>
              </a>
            </ul>
          </div>

          <div
            v-if="relevantPosts.length > 0"
          >
            <span class=":uno: font-semibold text-xs mb-2">
              Posts
            </span>

            <a
              v-for="(post, idx) in relevantPosts"
              :key="post.href"
              :href="post.href"
              class=":uno: flex justify-between p-2 text-sm transition-colors outline-none rounded-md"
              :class="{ 'bg-surface text-heading': focusIndex === idx + relevantLinks.length }"
              rel="noopener noreferrer"
              @mouseover="() => focusIndex = idx + relevantLinks.length"
            >
              {{ post.title }}
            </a>
          </div>
        </DialogDescription>

        <div class=":uno: border-separator text-sm flex items-center border-t py-2 px-4 space-x-4">
          <div class=":uno: flex items-center space-x-1">
            <Key
              title="Arrow Up"
              class=":uno: text-[10px] px-[6px] leading-normal"
            >
              ↑
            </Key>

            <Key
              title="Arrow Down"
              class=":uno: text-[10px] px-[6px] leading-normal"
            >
              ↓
            </Key>

            <p class=":uno: text-xs font-medium">
              Navigate
            </p>
          </div>

          <div class=":uno: flex items-center space-x-1">
            <Key
              title="Enter"
              class=":uno: text-[10px] leading-relaxed"
            >
              Enter
            </Key>

            <p class=":uno: font-medium text-xs">
              Open
            </p>
          </div>

          <div class=":uno: flex items-center space-x-1">
            <Key
              title="Escape"
              class=":uno: text-[10px] leading-relaxed"
            >
              Esc
            </Key>

            <p class=":uno: font-medium text-xs">
              Close
            </p>
          </div>
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
    transform: translate(-50%, -35%) scale(0.935);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -35%) scale(1);
  }
}

@keyframes contentHide {
  from {
    opacity: 1;
    transform: translate(-50%, -35%) scale(1);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -35%) scale(0.935);
  }
}

.dialog__content {
  transform-origin: center;
  left: 50%;
  transform: translate(-50%, -35%);
  top: 35%;
}


.dialog__overlay[data-state='open'] {
  animation: overlayShow 200ms cubic-bezier(0.33, 1, 0.68, 1);
}

.dialog__overlay[data-state='closed'] {
  animation: overlayShow 200ms cubic-bezier(0.33, 1, 0.68, 1) reverse;
}

.dialog__content[data-state='open'] {
  animation: contentShow 200ms cubic-bezier(0.33, 1, 0.68, 1);
}

.dialog__content[data-state='closed'] {
  animation: contentHide 200ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
