<template>
  <div class="absolute w-full z-10">
    <div class="flex text-center justify-between h-20 text-xl text-white w-full pr-24 pl-6 z-[1]">
      <div class="flex align-center items-center z-[1]">
        <div class="w-16 h-16 bg-[#1B3543] rounded-full" />
      </div>
      <nav class="flex gap-5 align-super items-center z-[1]">
        <a class="hover cursor-pointer" @click="slideTo(0)">Accueil</a>
        <a class="hover cursor-pointer" @click="slideTo(1)">Compétences</a>
        <a class="hover cursor-pointer" @click="slideTo(2)">Réalisations</a>
        <a class="hover cursor-pointer" @click="slideTo(3)">A propos</a>
        <a class="hover cursor-pointer" @click="slideTo(4)">Contact</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "#app";
import {useSliderStore} from "~/stores/sliderStore";

const router = useRouter()
const sliderStore = useSliderStore()

const slideTo = (index: number) => sliderStore.slider.slideTo(index)
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
