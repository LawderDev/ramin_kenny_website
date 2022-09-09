<template>
  <div class="absolute w-full">
    <div class="flex text-center justify-between h-20 text-xl text-white bg-[#152934] w-full pr-24 pl-6 z-[1]">
      <div class="flex align-center items-center z-[1]">
        <div class="w-16 h-16 bg-[#1B3543] rounded-full" />
      </div>
      <nav class="flex gap-5 align-super items-center z-[1]">
        <a href="#page1" class="hover">Accueil</a>
        <a href="#page2" class="hover">Compétences</a>
        <a href="#page3" class="hover">Réalisation</a>
        <a href="#page4" class="hover">A propos</a>
        <a href="#page5" class="hover">Contact</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

.hover:hover::after {
  transform: scale(1);
  transform-origin: left;
}

.hover::after{
  content: "";

  display: block;
  height: 0.1rem;
  background: #FEFEFF;

  transform: scale(0);
  transition: transform 1s;

  transform-origin: right;

  animation: fade-in 1s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}
</style>
