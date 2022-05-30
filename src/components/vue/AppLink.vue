<script setup lang="ts">
export interface AppLinkProps {
  href: string;
  popup?: boolean;
}

const { href } = defineProps<AppLinkProps>();
</script>

<template>
  <a
    :href="href"
    rel="noreferrer noopener"
    :target="popup ? '_blank' : '_self'"
  >
    <slot />
  </a>
</template>
