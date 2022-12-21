<script setup lang="ts">
interface BackToTopProps {
  as?: string;
  class?: string;
}

const props = withDefaults(defineProps<BackToTopProps>(), {
  as: 'button',
  class: ''
})

const scrollToTop = () => {
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <component
    :is="props.as"
    :class="props.class"
    @click="scrollToTop"
  >
    <slot></slot>
  </component>
</template>