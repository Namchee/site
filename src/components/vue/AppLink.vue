<script setup lang="ts">
interface AppLinkProps {
  href: string;
  external?: boolean;
}

const props = defineProps<AppLinkProps>();
</script>

<template>
  <a
    rel="noreferrer noopener"
    :href="props.href"
    :target="props.external ? '_blank' : '_self'"
  >
    <slot />
  </a>
</template>
