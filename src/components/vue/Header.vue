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
];
</script>

<template>
  <div class="w-full max-w-7xl mx-auto h-24 grid grid-cols-12 gap-4">
    <!-- start: logo -->
    <a rel="noopener noreferrer" href="/"
      class="text-lg leading-normal font-medium tracking-tighter col-start-1 col-span-2 logo">
      <span data-letter="N">N</span>
      <span data-letter="a">a</span>
      <span data-letter="m">m</span>
      <span data-letter="c">c</span>
      <span data-letter="h">h</span>
      <span data-letter="e">e</span>
      <span data-letter="e">e</span>
    </a>
    <!-- end: logo -->

    <nav class="flex space-x-12">
      <a v-for="link in links" :key="link.href" :href="link.href" :data-hover="link.text"
        class="link transition-colors hover:text-content-variant"
        :class="{ 'font-medium tracking-tight': props.currentPath === link.href }">
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
  transition: transform 600ms easeOutQuart;
}

.link::before {
  content: attr(data-hover);
  position: absolute;
  display: inline-block;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  transition: transform 600ms easeOutQuart;
}

.link:hover span,
.link:focus span {
  transform: translateY(-100%);
}

.link:hover::before,
.link:focus::before {
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

@for $i from 1 to 8 {
  .logo span:nth-child($i) {
    transition: transform 500ms calc(50ms * ($(
          i) - 1)) easeOutQuart;
  }

  .logo:hover span:nth-child($i),
  .logo:focus span:nth-child($i) {
    transform: translateY(-100%
    );
}
}
</style>
