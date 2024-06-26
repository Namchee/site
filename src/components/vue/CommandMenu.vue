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

import Key from '@/components/vue/Key.vue';

import { links } from '@/constant/links';

const visible = ref(false);
const navigationLinks = ref();
const postLinks = ref();
const focusIndex = ref(-1);

const props = defineProps<{
  posts: {
    title: string;
    href: string;
  }[],
}>();

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
const home = keys['Home'];
const arrowDown = keys['ArrowDown'];
const arrowUp = keys['ArrowUp'];
const enter = keys['Enter'];
const escape = keys['Escape'];

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

watch(home, (h) => {
  if (h && visible) {
    window.location.href = '/';
  }
});

watch(arrowDown, (ad) => {
  const links = [...navigationLinks.value, ...postLinks.value];

  if (ad && visible) {
    if (focusIndex.value === -1) {
      focusIndex.value = 0;
    } else {
      focusIndex.value += 1;

      if (focusIndex.value >= links.length) {
        focusIndex.value = links.length - 1;
      }
    }

    links[focusIndex.value].focus();
  }
});

watch(arrowUp, (au) => {
  const links = [...navigationLinks.value, ...postLinks.value];

  if (au && visible) {
    if (focusIndex.value === -1) {
      focusIndex.value = 0;
    } else {
      focusIndex.value -= 1;

      if (focusIndex.value < 0) {
        focusIndex.value = 0;
      }
    }

    links[focusIndex.value].focus();
  }
});

watch(enter, (e) => {
  if (e && visible) {
    const index = focusIndex.value;

    window.location.href = relevantLinks.value[index].href;
  }
});

watch(escape, (esc) => {
  if (esc && visible) {
    visible.value = false;
  }
})

watch(searchTerm, () => {
  focusIndex.value = -1;
});
</script>

<template>
  <DialogRoot v-model:open="visible">
    <DialogTrigger as-child>
      <button
        class=":uno: grid place-items-center bg-background grid place-items-center w-10 h-10 rounded-full border border-separator dark:bg-surface fixed top-6 right-8 group hover:scale-105 focus:scale-105 z-10 transition-all shadow md:top-8 dark:border-surface"
      >
        <Icon
          icon="lucide:command"
          class=":uno: w-4 h-4"
        />
        <p
          class=":uno: transition-all text-sm opacity-0 absolute -bottom-8 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 pointer-events-none"
        >
          Menu
        </p>
      </button>
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay
        @click="visible = false"
        class=":uno: fixed bg-background w-screen h-screen dialog__overlay bg-opacity-50 backdrop-blur z-20"
      />
      <DialogContent
        class=":uno: fixed border border-separator bg-background shadow dialog__content top-[20%] left-[50%] -translate-x-[50%] rounded-md w-4/5 max-w-md max-h-sm z-30"
      >
        <DialogTitle class=":uno: border-separator border-b">
          <input
            class=":uno: text-sm w-full bg-transparent focus:outline-none p-4 placeholder:font-normal font-normal leading-relaxed"
            placeholder="Where do you want to go?"
            v-model="searchTerm"
          >
        </DialogTitle>

        <DialogDescription class=":uno: p-4 space-y-4 max-h-xs overflow-y-auto">
          <div v-if="relevantLinks.length === 0 && relevantPosts.length === 0">
            <p class=":uno: text-sm">
              Sorry, I don't know what or where that is 😕
            </p>
          </div>

          <div v-if="relevantLinks.length > 0">
            <span class=":uno: font-semibold text-xs mb-2">
              Pages
            </span>

            <a
              v-for="(link, idx) in relevantLinks"
              :key="link.href"
              :href="link.href"
              class=":uno: text-sm rounded-md flex justify-between transition-colors hover:text-heading focus:text-heading p-2 hover:bg-surface focus:bg-surface link"
              rel="noopener noreferrer"
              ref="navigationLinks"
              @mouseover="focusIndex = idx"
            >
              <div class=":uno: flex items-center space-x-1">
                <Icon
                  :icon="link.icon"
                  class=":uno: w-4 h-auto mr-2"
                />
                <span class=":uno: relative top-[2px]">
                  {{ link.name }}
                </span>
              </div>

              <kbd
                v-if="!!link.key"
                :title="link.key"
                class=":uno: text-xs border border-separator text-heading px-1 bg-surface font-mono rounded"
              >{{ link.key
              }}</kbd>
            </a>
          </div>

          <div v-if="relevantPosts.length > 0">
            <span class=":uno: font-semibold text-xs mb-2">
              Posts
            </span>

            <a
              v-for="(post, idx) in relevantPosts"
              :key="post.href"
              :href="post.href"
              class=":uno: flex justify-between p-2 text-sm transition-colors hover:bg-surface hover:text-heading focus:bg-surface focus:text-heading focus:outline-none rounded-md link"
              rel="noopener noreferrer"
              ref="postLinks"
              @mouseover="focusIndex = idx"
            >
              <div class=":uno: flex items-center space-x-1">
                <span class=":uno: relative top-[2px]">
                  {{ post.title }}
                </span>
              </div>
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

.link:focus {
  outline: none;
}
</style>
