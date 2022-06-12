<script setup lang="ts">
interface AppLinkProps {
  href: string;
  external?: boolean;
  class?: string;
}

const props = defineProps<AppLinkProps>();
</script>

<template>
  <a
    rel="noreferrer noopener"
    :href="props.href"
    :target="props.external ? '_blank' : '_self'"
    :class="props.class"
  >
    <slot />
  </a>
</template>
