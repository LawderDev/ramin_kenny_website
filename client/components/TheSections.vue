<template>
  <ClientOnly>
    <div class="text-[#FEFEFF]">
      <swiper
        :direction="'vertical'"
        :pagination="{
          clickable: true,
        }"
        :mousewheel="{
          invert:true
        }"
        :modules="[Pagination, Mousewheel]"
        class="myPrincipalSwiper"
        @swiper="onSwiper"
      >
        <swiper-slide>
          <div class="w-screen h-screen flex items-center" data-anchor="page1">
            <random-stars />
            <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-10 max-w-[34vw] md:max-w-[22vw] lg:max-w-[12vw] top-[15vh] lg:top-[5vh] left-[15vw] lg:left-[20vw] animate-[spin_3s_linear_infinite]">
            <home-section />
          </div>
          <img src="assets/moon.png" alt="moon" class="moonUp">
        </swiper-slide>

        <swiper-slide class="z-20">
          <random-stars />
          <img src="assets/moon.png" alt="moon" class="moonDown">
          <skills-section />
        </swiper-slide>

        <swiper-slide class="z-10">
          <random-stars />
          <div class="w-screen h-screen bg-[#152934] flex items-center" data-anchor="page3">
            <projects-section />
          </div>
          <img src="assets/uranus.png" alt="moon" class="uranusUp">
        </swiper-slide>

        <swiper-slide class="z-10">
          <random-stars />
          <img src="assets/uranus.png" alt="moon" class="uranusDown">
          <div class="w-screen h-screen bg-[#152934] flex items-center" data-anchor="page4">
            <about-section />
          </div>
        </swiper-slide>
        <swiper-slide class="z-20">
          <random-stars />
          <img src="assets/saturn.png" alt="moon" class="moonUp">
          <contact-section />
        </swiper-slide>
      </swiper>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper'
import HomeSection from '@/components/HomeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import RandomStars from '@/components/RandomStars.vue'
import { useSliderStore } from '@/stores/sliderStore'
import 'swiper/css'
import 'swiper/css/pagination'

const sliderStore = useSliderStore()
const onSwiper = (swiper) => {
  sliderStore.slider = swiper
}
</script>

<style>
@media (max-device-width : 380px) {
   .satellite{
     @apply top-[9vh]
   }
}

.myPrincipalSwiper {
  width: 100vw;
  height: 100vh;
}

.myPrincipalSwiper .swiper-slide {
}

.uranusUp{
  @apply z-0 absolute top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[70vh] max-w-[70vw] opacity-70 rotate-90
}

.uranusDown{
  @apply z-0 absolute top-[-24vh] md:top-[-24vh] lg:top-[-15vh] xl:top-[-30vh] max-w-[70vw] opacity-70 rotate-90
}

.moonUp{
  @apply z-0 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[70vh] max-w-[70vw] opacity-90
}

.moonDown{
  @apply z-0 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[-24vh] md:top-[-24vh] lg:top-[-15vh] xl:top-[-30vh] max-w-[70vw] opacity-90
}

@media (orientation: landscape) and (max-device-width : 960px) {
  .satellite {
    @apply hidden
  }

  .moonUp {
    @apply top-[85vh] z-[1] max-w-[35vw] left-[62vw]
  }
  .moonDown {
    @apply top-[-15vhvh] z-[1] max-w-[35vw] left-[62vw]
  }
}
</style>
