<script setup lang="ts">
function speak() {
  const synth = window.speechSynthesis;
  const word = new SpeechSynthesisUtterance('Namchee');

  if (word && synth) {
    synth.speak(word);
  }
}
</script>

<template>
  <button
    @click="speak"
    class="group text-xl font-medium tracking-tight flex items-center">
    <span class="p-2 rounded-full bg-dark bg-opacity-80 transition-colors group-hover:bg-opacity-100 text-light">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="#000000" viewBox="0 0 256 256">
        <path d="M218.9,77.1a71.9,71.9,0,0,1,0,101.8" fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="16" class="wave--outer"></path>
        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
        <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="16"></line>
        <path d="M190.6,105.4a31.9,31.9,0,0,1,0,45.2" fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="16" class="wave--inner"></path>
      </svg>
    </span>
    <span class="ml-3">
      Pronounce my name
    </span>
  </button>
</template>

<style scoped>
.group:hover .wave--inner, .group:focus .wave--inner {
  animation: wave 250ms ease-out 100ms;
}

.group:hover .wave--outer, .group:focus .wave--outer {
  animation: wave 250ms ease-out 350ms;
}

@keyframes wave {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
