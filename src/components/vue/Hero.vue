<script setup lang="ts">
import { Sphere, Camera, PhysicalMaterial, AmbientLight, Renderer, Scene } from 'troisjs';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { onMounted, ref } from 'vue';
import { PMREMGenerator } from 'three';

const renderer = ref(null);
const scene = ref(null);
const material = ref(null);

onMounted(() => {
  const rgbe = new RGBELoader();
  rgbe.load('envmap.hdr', (map) => {
    const loader = new PMREMGenerator(renderer.value.renderer);
    const {texture} = loader.fromEquirectangular(map);

    material.value.material.metalness = 0.1;
    material.value.material.envMapIntensity = 0.4;
    material.value.material.envMap = texture;
    scene.value.scene.background = texture;
    scene.value.scene.environment = texture;
  })
});
</script>

<template>
  <div class="w-full max-w-5xl mx-auto flex flex-col lg:flex-row justify-center lg:space-x-8">
    <p class="text-2xl text-content-light tracking-tight self-center lg:text-right order-2 lg:order-1">
      Build Softwares
    </p>

    <div class="min-h-[360px] order-1 self-center">
      <Renderer antialias :alpha="true" resize="true" orbit-ctrl ref="renderer">
        <Camera :position="{ z: 200 }" :fov="75" :near="10" :far="1000" />
        <Scene ref="scene">
          <AmbientLight color="#FDFCFD" :intensity="0.5" />
          <Sphere :radius="90" :height-segments="64" :width-segments="64">
            <PhysicalMaterial :props="{ metalness: 0.1, envMapIntensity: 0.4 }" ref="material">
            </PhysicalMaterial>
          </Sphere>
        </Scene>
      </Renderer>
    </div>

    <p class="text-2xl text-content-dark tracking-tight self-center order-3">
      Solve Problems
    </p>
  </div>
</template>


