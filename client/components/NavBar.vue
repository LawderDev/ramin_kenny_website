<template>
  <div class="absolute w-full z-10">
    <div
      class="flex flex-col landscape:gap-5 gap-20 text-center justify-between text-2xl text-white w-full lg:h-20 lg:bg-transparent lg:text-xl
     lg:flex-row lg:pr-24 lg:pl-6 z-[1] relative transition-all duration-450 overflow-hidden"
      :class="{ 'h-screen bg-[#1B3543]': isMenuOpen }, { 'h-20 bg-transparent': !isMenuOpen }"
    >
      <div class="flex align-center items-center z-[2] pt-2">
        <div class="w-16 h-16 bg-green-100 rounded-full" />
        <hamburger-icon class="absolute landscape:left-[88vw] left-[78vw] md:left-[88vw] lg:invisible" :is-open="isMenuOpen" @openMenu="openMenu" />
      </div>

      <nav
        class="w-full flex flex-col transition-opacity duration-500 h-screen gap-5 align-super items-center z-[1] lg:opacity-100 lg:visible lg:flex lg:relative lg:w-auto lg:h-auto lg:flex-row lg:bg-transparent"
        :class="{ 'visible opacity-100': isMenuOpen }, {'invisible opacity-0': !isMenuOpen}"
      >
        <a class="hover" @click="slideTo(0)">Accueil</a>
        <a class="hover" @click="slideTo(1)">Compétences</a>
        <a class="hover" @click="slideTo(2)">Réalisations</a>
        <a class="hover" @click="slideTo(3)">A propos</a>
        <a class="hover" @click="slideTo(4)">Contact</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSliderStore } from '~/stores/sliderStore'
import { HamburgerIcon } from '#components'
import { ref } from '#imports'

const sliderStore = useSliderStore()
const isMenuOpen = ref(false)

const openMenu = () => { isMenuOpen.value = !isMenuOpen.value}

const slideTo = (index: number) => {
  sliderStore.slideTo(index)
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>

.hover{
  @apply cursor-pointer hover:after:origin-left hover:after:scale-100
  after:content-[""] after:block after:h-[0.1rem] after:bg-[#FEFEFF] after:scale-0 after:transition-transform after:duration-500 after:origin-right after:animate-[fade-in_1s]
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
