<script setup lang="ts">
import { ref } from 'vue';
import { animate, spring, stagger } from 'motion';
import { Switch } from '@headlessui/vue';
import { vIntersectionObserver } from '@vueuse/components';

const useDark = ref(true);

function playLogoAnimation([{ isIntersecting }]) {
  if (isIntersecting) {
    animate('.letter',
      {
        transform: 'translateY(0)',
      },
      {
        duration: 0.8,
        delay: stagger(0.06),
        easing: [0.25, 1, 0.5, 1],
      },
    );
  }
}
</script>

<template>
  <div class="w-full
      px-6
      h-20
      max-w-7xl
      mx-auto
      flex justify-between items-center" v-intersection-observer="playLogoAnimation">
    <!-- start: logo -->
    <a
      role="banner"
      href="/"
      class="text-lg -space-x-[1.5px] font-bold overflow-y-hidden"
    >
      <span class="letter inline-block translate-y-10">
        N
      </span>
      <span class="letter inline-block translate-y-10">
        A
      </span>
      <span class="letter inline-block translate-y-10">
        M
      </span>
      <span class="letter inline-block translate-y-10">
        •
      </span>
      <span class="letter inline-block translate-y-10">
        C
      </span>
      <span class="letter inline-block translate-y-10">
        H
      </span>
      <span class="letter inline-block translate-y-10">
        É
      </span>
      <span class="letter inline-block translate-y-10">
        É
      </span>
    </a>
    <!-- end: logo -->

    <!-- start: theme switcher -->
    <div class="flex items-center text-content-light text-sm">
      <p class="mr-2 overflow-y-hidden">
        <Transition name="reveal" mode="out-in">
          <span class="inline-block" v-if="useDark">
            Dark
          </span>
          <span class="inline-block" v-else>
            Light
          </span>
        </Transition>
        Theme
      </p>
      <Switch v-model="useDark" as="template" v-slot="{ checked }">
        <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-surface-darker">
          <span class="sr-only">Switch Theme</span>
          <span :class="checked ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-surface transition" />
        </button>
      </Switch>
    </div>
    <!-- end: theme switcher -->
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.reveal-enter-active,
.reveal-leave-active {
  transition: all 100ms cubic-bezier(0.33, 1, 0.68, 1);
}

.reveal-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.reveal-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
