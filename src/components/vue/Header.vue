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

.link:hover span, .link:focus span {
  transform: translateY(-100%);
}

.link:hover::before, .link:focus::before {
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
    transition: transform 600ms calc(50ms * ($(i) - 1)) easeOutQuart;
  }

  .logo:hover span:nth-child($i),
  .logo:focus span:nth-child($i) {
    transform: translateY(-100%);
  }
}
</style>
