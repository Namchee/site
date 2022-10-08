<script setup lang="ts">
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';
</script>

<template>
  <Renderer>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box>
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>


