<script setup lang="ts">
interface NavigationProps {
  currentPath: string;
}

const props = defineProps<NavigationProps>();

const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
]
</script>

<template>
  <div class="w-full
      max-w-7xl mx-auto
      h-20
      flex justify-between items-center">
    <!-- start: logo -->
    <a rel="noopener noreferrer" href="/" class="text-lg font-semibold tracking-tighter">
      NAM•CHÉÉ
    </a>
    <!-- end: logo -->

    <nav class="flex space-x-12">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        :data-hover="link.text"
        class="link transition-colors hover:text-content-variant"
        :class="{ 'font-medium tracking-tight': props.currentPath === link.href }"
      >
        <span>
          {{ link.text }}
        </span>
      </a>
    </nav>
  </div>
</template>

<style scoped>
.link {
  position: relative;
  overflow-y: hidden;
}

.link span {
  display: inline-block;
  transition: transform 300ms ease-out;
}

.link::before {
  content: attr(data-hover);
  position: absolute;
  display: inline-block;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  transition: transform 300ms ease-out;
}

.link:hover span, .link:focus span, .link:active span {
  transform: translateY(-100%);
}

.link:hover::before, .link:focus::before, .link:active::before {
  transform: translateY(0);
}
</style>
