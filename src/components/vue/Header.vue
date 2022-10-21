<script setup lang="ts">
import { Switch } from '@headlessui/vue';

import { themeStore } from '@/stores/theme';
</script>

<template>
  <div class="w-full
      px-6 lg:px-0
      h-20
      max-w-7xl
      mx-auto
      flex justify-between items-center"
  >
    <!-- start: logo -->
    <a
      rel="noopener noreferrer"
      href="/"
      class="text-lg font-bold tracking-tighter"
    >
      NAM•CHÉÉ
    </a>
    <!-- end: logo -->

    <!-- start: theme switcher -->
    <div class="flex items-center text-content-300 text-sm">
      <p class="mr-2 overflow-y-hidden">
        <Transition name="reveal" mode="out-in">
          <span class="inline-block" v-if="themeStore.dark">
            Dark
          </span>
          <span class="inline-block" v-else>
            Light
          </span>
        </Transition>
        Theme
      </p>
      <Switch v-model="themeStore.dark" as="template" v-slot="{ checked }">
        <button
          class="relative
            inline-flex items-center
            h-6 w-11
            rounded-full bg-surface-darker"
          >
          <span class="sr-only">Switch Theme</span>
          <span
            :class="checked ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-surface transition"
          />
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
