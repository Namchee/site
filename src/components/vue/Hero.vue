<script setup lang="ts">
import { Sphere, Camera, StandardMaterial, AmbientLight, Renderer, Scene } from 'troisjs';
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
    const { texture } = loader.fromEquirectangular(map);

    material.value.material.envMap = texture;

    texture.dispose();
  })
});
</script>

<template>
  <div class="min-h-[360px] order-1 self-center">
    <Renderer antialias :alpha="true" resize="true" ref="renderer" shadow>
      <Camera :position="{ z: 200 }" :fov="75" :near="10" :far="1000" />
      <Scene ref="scene">
        <AmbientLight :intensity="0.85" />
        <Sphere :radius="100" :height-segments="64" :width-segments="64">
          <StandardMaterial :props="{ metalness: 0.1, envMapIntensity: 0.4, roughness: 0 }" ref="material">
          </StandardMaterial>
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>
