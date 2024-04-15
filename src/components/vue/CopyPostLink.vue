<script setup lang="ts">
import { ref } from 'vue';

import { ToastProvider, ToastDescription, ToastRoot, ToastClose, ToastViewport } from 'radix-vue';
import { Icon } from '@iconify/vue';

const open = ref(false);

function copyLink() {
  navigator.clipboard.writeText(
    window.location.origin + window.location.pathname,
  );

  open.value = true;
}
</script>

<template>
  <ToastProvider>
    <button
      @click="copyLink"
      class="group cursor-pointer"
      title="Copy Post Link to Clipboard"
    >
      <Icon
        icon="lucide:link"
        class="w-4 md:w-[18px] h-auto transition-colors group-hover:text-heading group-focus:text-heading"
      />
    </button>

    <ToastRoot
      v-model:open="open"
      :duration="3000"
      class="toast__root text-sm border border-separator dark:bg-surface dark:border-none text-heading rounded-md shadow p-4 grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-4 items-center"
    >
      <ToastDescription>
        Link copied to clipboard!
      </ToastDescription>
      <ToastClose>
        <Icon
          icon="lucide:x"
          class="w-[14px] h-auto transition-colors group-hover:text-heading group-focus:text-heading"
        />
      </ToastClose>
    </ToastRoot>

    <ToastViewport
      class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-96 max-w-screen m-0 list-none z-[2147483647] outline-none"
    />
  </ToastProvider>
</template>

<style>
.toast__root[data-state='open'] {
  animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.toast__root[data-state='closed'] {
  animation: hide 100ms ease-in;
}

.toast__root[data-swipe='move'] {
  transform: translateX(var(--radix-toast-swipe-move-x));
}

.toast_root[data-swipe='cancel'] {
  transform: translateX(0);
  transition: transform 200ms ease-out;
}

.toast__root[data-swipe='end'] {
  animation: swipeOut 100ms ease-out;
}

@keyframes hide {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }

  to {
    transform: translateX(0);
  }
}

@keyframes swipeOut {
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }

  to {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
}
</style>
