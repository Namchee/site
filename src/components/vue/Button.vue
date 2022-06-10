<script setup lang="ts">
interface ButtonProps {
  style?: 'normal' | 'rounded';
  theme?: 'neutral';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  style: 'normal',
  theme: 'neutral',
});

const emit = defineEmits(['click']);
</script>

<template>
  <button
    @click="emit('click')"
    class="flex items-center font-medium py-2 px-4 shadow-md leading-relaxed transition-all hover:ring-2 focus:ring-2"
    :class="{
      'rounded-md': props.style === 'normal',
      'rounded-xl': props.style === 'rounded',
      'text-light bg-dark hover:bg-blackout hover:ring-blackout hover:ring-opacity-25': props.theme === 'neutral',
    }"
  >
    <slot />
  </button>
</template>
