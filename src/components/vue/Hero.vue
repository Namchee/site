<script setup lang="ts">
import { Sphere, Camera, StandardMaterial, AmbientLight, Renderer, Scene } from 'troisjs';
</script>

<template>
  <div class="w-full max-w-5xl mx-auto flex flex-col lg:flex-row justify-center lg:space-x-8">
    <p class="text-2xl text-content-light tracking-tight self-center lg:text-right order-2 lg:order-1">
      Build Softwares
    </p>

    <div class="w-full lg:w-initial min-h-[360px] order-1 self-center">
      <Renderer antialias :alpha="true" resize="true">
        <Camera :position="{ z: 3 }" />
        <Scene>
          <AmbientLight color="#EEEEEE" />
          <Sphere :width="100" :height="100" :height-segments="64" :width-segments="32">
            <StandardMaterial />
          </Sphere>
        </Scene>
      </Renderer>
    </div>

    <p class="text-2xl text-content-dark tracking-tight self-center order-3">
      Solve Problems
    </p>
  </div>
</template>


