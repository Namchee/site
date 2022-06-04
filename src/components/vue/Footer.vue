<script setup lang="ts">
import { WEB_LINKS, CONTACT_LINKS } from '@/constant/link';

import AppLink from '@/components/vue/AppLink.vue';
</script>

<template>
  <footer class="w-full">
  <div class="w-full
    max-w-7xl
    mx-auto
    py-8 px-20
    xl:px-0">
    <!-- start: sitemap, contacts, open source -->
    <div class="grid grid-cols-2 gap-6
      pb-8">
      <!-- start: open source -->
      <div class="leading-loose text-xl">
        <p>
          Hey, this site is open-source!
        </p>
        <p>
          <AppLink
            href="https://www.github.com/Namchee/site"
            popup
            class="text-primary transition-colors
              hover:text-primary-600"
          >
            Go check it out
          </AppLink>
        </p>
      </div>
      <!-- end: open source -->

      <!-- start: sitemap and contacts -->
      <div class="space-y-8">
        <!-- start: contacts -->
        <div class="text-lg">
          <p class="uppercase font-semibold text-gray text-sm">
            Get in touch
          </p>
          <ul class="flex mt-2 space-x-8">
            <li v-for="link in CONTACT_LINKS" :key="link.href">
              <AppLink :href="link.href" class="font-medium
                relative
                after:absolute
                after:(content-*)
                after:w-full
                after:h-[1px]
                after:bg-gray-800
                after:left-0
                after:scale-x-0
                after:ease-out
                after:duration-200
                after:origin-right
                after:transition-transform
                after:bottom-[-3px]
                focus:after:scale-x-100
                hover:after:scale-x-100
                hover:after:origin-left" popup>
                {{ link.name }}
              </AppLink>
            </li>
          </ul>
        </div>
        <!-- end: contacts -->

        <!-- start: sitemap -->
        <div class="text-lg">
          <p class="uppercase font-semibold text-gray text-sm">
            Sitemap
          </p>
          <ul class="flex mt-2 space-x-8">
            <li v-for="link in WEB_LINKS" :key="link.path">
              <AppLink
                :href="link.path"
                class="font-medium
                  relative
                  after:absolute
                  after:(content-*)
                  after:w-full
                  after:h-[1px]
                after:bg-gray-800
                  after:left-0
                  after:scale-x-0
                  after:ease-out
                  after:duration-200
                  after:origin-right
                  after:transition-transform
                  after:bottom-[-3px]
                  focus:after:scale-x-100
                  hover:after:scale-x-100
                  hover:after:origin-left"
                >
                {{ link.name }}
              </AppLink>
            </li>
            <li>
              <AppLink href="https://twitter.com/lakban_hitam" class="font-medium
                relative
                after:absolute
                after:(content-*)
                after:w-full
                after:h-[1px]
                after:bg-gray-800
                after:left-0
                after:scale-x-0
                after:ease-out
                after:duration-200
                after:origin-right
                after:transition-transform
                after:bottom-[-3px]
                focus:after:scale-x-100
                hover:after:scale-x-100
                hover:after:origin-left"
              >
                Sitemap.xml
              </AppLink>
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
      text-sm
      border-t border-t-light-600
      pt-8">
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
