<script setup lang="ts">
import { stagger, timeline } from 'motion';
import { WEB_LINKS } from '@/constant/link';

import AppLink from '@/components/vue/AppLink.vue';
import NavigationLink from '@/components/vue/NavigationLink.vue';
import Logo from '@/components/vue/Logo.vue';

import { onMounted, ref, watch } from 'vue';
import { EASING_FUNC } from '@/constant/easing';

interface NavigationProps {
  currentPath: string;
}

const open = ref(false);
const props = defineProps<NavigationProps>();

onMounted(() => {
  const body = document.querySelector('body');

  watch(open, (val) => {
    if (val) {
      timeline([
        [
          '.navigation__container',
          {
            transform: 'translateX(0)',
          },
          {
            duration: 0.5,
            easing: EASING_FUNC['ease-out-cubic'],
          },
        ],
        [
          '.navigation__link',
          {
            transform: 'translateY(0)',
          },
          {
            delay: stagger(0.125),
            duration: 0.5,
            easing: EASING_FUNC['ease-out-cubic'],
            at: 0.2,
          },
        ],
      ]);

      body.style.height = '100%';
      body.style.overflow = 'hidden';
    } else {
      timeline([
        [
          '.navigation__link',
          {
            transform: 'translateY(56px)',
          },
          {
            delay: stagger(0.08),
            duration: 0.4,
            easing: EASING_FUNC['ease-out-cubic'],
          },
        ],
        [
          '.navigation__container',
          {
            transform: 'translateX(100vw)',
          },
          {
            duration: 0.5,
            easing: EASING_FUNC['ease-out-cubic'],
            at: 0.1,
          },
        ],
      ]);

      body.style.height = 'unset';
      body.style.overflow = 'auto';
    }
  })
});
</script>

<template>
  <nav class="w-full h-24 lg:h-28 grid place-items-center">
    <div class="w-full
      max-w-7xl
      flex justify-between items-center
      px-6
      md:px-16
      xl:px-0">
      <AppLink class="relative mix-blend-difference text-light
          text-opacity-80 z-20" href="/">
        <Logo />
      </AppLink>

      <button @click="open = !open" class="text-base
          overflow-y-hidden
          mix-blend-difference
          tracking-tight
          text-light
          text-opacity-80
          md:hidden
          z-20">
        <Transition name="slide-up" mode="out-in">
          <p v-if="!open">
            Menu
          </p>
          <p v-else>
            Close
          </p>
        </Transition>
      </button>

      <ul class="navigation__container
          w-screen h-screen
          fixed top-0 left-0 z-10
          bg-blackout
          flex flex-col
          justify-center md:flex-row
          px-6 md:px-0
          items-end md:items-center
          md:space-x-12
          md:w-auto md:h-auto
          md:bg-transparent
          md:static
          md:translate-x-0" :class="{ 'translate-x-[100vw]': !open }">
        <li v-for="link in WEB_LINKS" :key="link.href">
          <NavigationLink
            @click="open = false"
            :href="link.href"
            :is-active="link.href === props.currentPath">
            {{ link.name }}
          </NavigationLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 100ms cubic-bezier(0.5, 1, 0.89, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(0.75rem);
}

.slide-up-leave-to {
  opacity: 1;
  transform: translateY(-0.75rem);
}
</style>
