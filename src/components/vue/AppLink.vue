<script setup lang="ts">
interface AppLinkProps {
  href: string;
  external?: boolean;
  underline?: boolean;
}

const props = defineProps<AppLinkProps>();
</script>

<template>
  <a
    rel="noreferrer noopener"
    :href="props.href"
    :target="props.external ? '_blank' : '_self'"
    :class="{ 'underline': props.underline }"
  >
    <slot />
  </a>
</template>
