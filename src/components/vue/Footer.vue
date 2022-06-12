<script setup lang="ts">
import { WEB_LINKS, CONTACT_LINKS } from '@/constant/link';

import ArrowUp from '~icons/radix-icons/arrow-up';

import AppLink from '@/components/vue/AppLink.vue';
import FooterLink from '@/components/vue/FooterLink.vue';

import Button from '@/components/vue/Button.vue';

const scrollToTop = () => {
  console.log('clicked');
  if (window) {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <footer class="w-full">
    <div class="w-full
      max-w-7xl
      mx-auto
      py-8 px-20
      xl:px-0"
    >
      <!-- start: top section -->
      <div class="grid grid-cols-3 gap-6
      pb-8">
        <!-- start: open source -->
        <div class="leading-relaxed text-lg">
          <p>
            Hey, this site is open-source!
          </p>
          <p>
            <AppLink
              href="https://www.github.com/Namchee/site"
              external
              class="text-accent
                transition-colors
              hover:text-accent-dark">
              Go check it out
            </AppLink>
          </p>
        </div>
        <!-- end: open source -->

        <!-- start: sitemap and contacts -->
        <div class="flex space-x-12 mx-auto">
          <!-- start: contacts -->
          <div>
            <p class="uppercase font-semibold text-sm text-grey">
              Contacts
            </p>
            <ul class="mt-4 space-y-2 text-base">
              <li v-for="link in CONTACT_LINKS" :key="link.href">
                <FooterLink :href="link.href" external>
                  {{ link.name }}
                </FooterLink>
              </li>
            </ul>
          </div>
          <!-- end: contacts -->

          <!-- start: sitemap -->
          <div>
            <p class="uppercase font-semibold text-sm text-grey">
              Sitemap
            </p>
            <ul class="mt-4 space-y-2 text-base">
              <li v-for="link in WEB_LINKS" :key="link.href">
                <FooterLink :href="link.href">
                  {{ link.name }}
                </FooterLink>
              </li>
              <li>
                <FooterLink href="sitemap_lol" external>
                  Sitemap.xml
                </FooterLink>
              </li>
            </ul>
          </div>
          <!-- end: sitemap -->
        </div>
        <!-- end: sitemap and contacts -->

        <!-- start: back to top button -->
        <div>
          <Button
            @click="scrollToTop"
            class="tracking-tight ml-auto text-base py-2 px-4">
            <ArrowUp />
            <p class="ml-2">Back to Top</p>
          </Button>
        </div>
        <!-- end: back to top button -->
      </div>
      <!-- end: top section -->

      <!-- start: copyright and author -->
      <div class="flex items-center justify-between
        text-sm
        border-t border-t-grey border-opacity-30
        pt-8"
      >
        <p>
          2022 &copy; Namchee. All rights reserved
        </p>
        <p>
          Design and code by Namchee
        </p>
      </div>
      <!-- end: copyright and author -->
    </div>
  </footer>
</template>
