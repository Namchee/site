<script setup lang="ts">
import { WEB_LINKS, CONTACT_LINKS } from '@/constant/link';

import AppLink from '@/components/vue/AppLink.vue';
import FooterLink from '@/components/vue/FooterLink.vue';
</script>

<template>
  <footer class="w-full">
    <div class="w-full
      max-w-7xl
      mx-auto
      py-8 px-20
      xl:px-0"
    >
      <!-- start: sitemap, contacts, open source -->
      <div class="grid grid-cols-2 gap-6
      pb-8">
        <!-- start: open source -->
        <div class="leading-relaxed text-xl">
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
        <div class="space-y-8">
          <!-- start: contacts -->
          <div class="text-lg">
            <p class="uppercase font-semibold text-grey text-xs">
              Get in touch
            </p>
            <ul class="flex mt-[9px] space-x-8">
              <li v-for="link in CONTACT_LINKS" :key="link.href">
                <FooterLink :href="link.href" external>
                  {{ link.name }}
                </FooterLink>
              </li>
            </ul>
          </div>
          <!-- end: contacts -->

          <!-- start: sitemap -->
          <div class="text-lg">
            <p class="uppercase font-semibold text-grey text-xs">
              Sitemap
            </p>
            <ul class="flex mt-[9px] space-x-8">
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
      </div>
      <!-- end: sitemap, contacts, open source -->

      <!-- start: copyright and author -->
      <div class="flex items-center justify-between
        text-xs
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
