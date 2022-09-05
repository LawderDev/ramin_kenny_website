<template>
  <div>
    <h2 class="relative z-20 text-2xl flex items-center justify-center mb-16 font-bold">
      Principaux Réalisations
    </h2>
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :centered-slides="true"
      :slide-to-clicked-slide="true"
      :modules="[Pagination, Navigation]"
      class="mySwipe w-[98vw] h-[33vh] overflow-visible"
      @beforeInit="orientationChangeHandler"
    >
      <swiper-slide class="project-slides">
        <img class="rounded-xl object-cover w-[60vw] h-[25vh] border-[#1B3543] border-2" src="assets/project_IGDB.png" alt="IGDB">
      </swiper-slide>
      <swiper-slide class="project-slides">
        <img class="rounded-xl object-cover w-[60vw] h-[25vh] border-[#1B3543] border-2" src="assets/perso.png" alt="perso">
      </swiper-slide>
      <swiper-slide class="project-slides">
        <img class="rounded-xl object-cover w-[60vw] h-[25vh] border-[#1B3543] border-2" src="assets/project_IGDB.png" alt="IGDB">
      </swiper-slide>
      <swiper-slide class="project-slides">
        <img class="rounded-xl object-cover w-[60vw] h-[25vh] border-[#1B3543] border-2 " src="assets/imageindragon.png" alt="imageindragon">
      </swiper-slide>
      <swiper-slide class="project-slides">
        <img class="rounded-xl object-cover w-[60vw] h-[25vh] border-[#1B3543] border-2" src="assets/perso.png" alt="perso">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { onUnmounted, ref } from '#imports'

const slidesPerView = ref(-1)

const orientationChangeHandler = () => {
  slidesPerView.value = window.matchMedia('(orientation:portrait)').matches ? 2 : 5
}

if (process.client) {
  orientationChangeHandler()
  window.addEventListener('resize', orientationChangeHandler)
}

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', orientationChangeHandler)
  }
})
</script>

<style>

.mySwipe{
  overflow: visible;
}

.project-slides:not(.swiper-slide-active){
  @apply transition hover:ease-in-out hover:duration-150 hover:translate-y-1 hover:scale-110
}

.mySwipe .swiper-slide-active{
  @apply transition ease-in-out duration-150 translate-y-1 scale-125 z-10
}
</style>
