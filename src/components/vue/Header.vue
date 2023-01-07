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
    <a
      rel="noopener noreferrer"
      href="/"
      class="text-lg leading-normal
        font-semibold tracking-tighter
        logo"
    >
      <span data-letter="N">N</span>
      <span data-letter="A">A</span>
      <span data-letter="M">M</span>
      <span data-letter="•">•</span>
      <span data-letter="C">C</span>
      <span data-letter="H">H</span>
      <span data-letter="É">É</span>
      <span data-letter="É">É</span>
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

.logo {
  overflow-y: hidden;
}

.logo span {
  position: relative;
  display: inline-block;
}

.logo span::before {
  position: absolute;
  content: attr(data-letter);
  display: inline-block;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
}

.logo span:nth-child(1) {
  transition: transform 300ms ease-out;
}

.logo:hover span:nth-child(1) {
  transform: translateY(-100%);
}

.logo span:nth-child(2) {
  transition: transform 300ms 100ms ease-out;
}

.logo:hover span:nth-child(2) {
  transform: translateY(-100%);
}

.logo span:nth-child(3) {
  transition: transform 300ms 200ms ease-out;
}

.logo:hover span:nth-child(3) {
  transform: translateY(-100%);
}
</style>
