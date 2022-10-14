<script setup lang="ts">
import { Sphere, Camera, StandardMaterial, AmbientLight, Renderer, Scene, Texture, } from 'troisjs';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { PMREMGenerator } from 'three';
import { onMounted, reactive, ref } from 'vue';

const renderer = ref(null);
const scene = ref(null);
const material = ref(null);

onMounted(() => {
  const loader = new RGBELoader();
  loader.load('envmap.hdr', (envmap) => {
    const generator = new PMREMGenerator(renderer.value.renderer);
    const { texture } = generator.fromEquirectangular(envmap);

    material.value.material.envMap = texture;
    material.value.material.metalness = 0.1;
    material.value.material.envMapIntensity = 0.4;

    console.log(material.value.material);

    texture.dispose();
  });
});
</script>

<template>
  <div class="w-full max-w-5xl mx-auto flex flex-col lg:flex-row justify-center lg:space-x-8">
    <p class="text-2xl text-content-light tracking-tight self-center lg:text-right order-2 lg:order-1">
      Build Softwares
    </p>

    <div class="w-full lg:w-initial min-h-[360px] order-1 self-center">
      <Renderer antialias :alpha="true" resize="true" ref="renderer">
        <Camera :position="{ z: 200 }" :fov="75" :near="10" :far="1000" />
        <Scene ref="scene">
          <AmbientLight color="#FDFCFD" :intensity="0.9" />
          <Sphere :radius="90" :height-segments="64" :width-segments="64">
            <StandardMaterial :props="{ metalness: 0.1, envMapIntensity: 0.4 }" ref="material" />
          </Sphere>
        </Scene>
      </Renderer>
    </div>

    <p class="text-2xl text-content-dark tracking-tight self-center order-3">
      Solve Problems
    </p>
  </div>
</template>


