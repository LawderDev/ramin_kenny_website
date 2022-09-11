<template>
  <ClientOnly>
    <div class="text-[#FEFEFF]">
      <swiper
          :direction="'vertical'"
          :pagination="{
            clickable: true,
          }"
          :mousewheel="true"
          :modules="[Pagination, Mousewheel]"
          class="myPrincipalSwiper"
      >
        <swiper-slide>
          <div class="w-screen h-screen flex items-center z-0" data-anchor="page1">
            <random-stars></random-stars>
            <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-[2] max-w-[34vw] md:max-w-[22vw] lg:max-w-[12vw] top-[15vh] lg:top-[5vh] left-[15vw] lg:left-[20vw] animate-[spin_3s_linear_infinite]">
            <home-section />
          </div>
          <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[70vh] max-w-[70vw] opacity-80">
        </swiper-slide>

        <swiper-slide>
          <random-stars></random-stars>
          <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[-30vh] max-w-[70vw] opacity-80">
          <skills-section />
        </swiper-slide>

        <swiper-slide>
          <random-stars></random-stars>
          <div class="w-screen h-screen bg-[#152934] flex items-center" data-anchor="page3">
            <projects-section />
          </div>
        </swiper-slide>

        <swiper-slide>
          <random-stars></random-stars>
          <div class="w-screen h-screen bg-[#152934] flex items-center" data-anchor="page4">
            <about-section />
          </div>
        </swiper-slide>
        <swiper-slide>
          <random-stars></random-stars>
            <contact-section />
        </swiper-slide>
      </swiper>
    </div>
      <!-- <div class="text-[#FEFEFF] overflow-y-scroll relative">
        <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-[2] max-w-[34vw] md:max-w-[22vw] lg:max-w-[12vw] top-[15vh] lg:top-[5vh] left-[15vw] lg:left-[20vw] animate-[spin_3s_linear_infinite]">
        <div class="w-screen h-screen section bg-[#152934] flex items-center" data-anchor="page1">
          <home-section />
        </div>
        <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[70vh] max-w-[70vw] opacity-80">
        <div class="w-screen h-screen section bg-[#152934] m-auto" data-anchor="page2">
          <skills-section />
        </div>
        <div class="w-screen h-screen section bg-[#152934] m-auto" data-anchor="page3">
          <projects-section />
        </div>
        <div class="w-screen h-screen section bg-[#152934] m-auto" data-anchor="page4">
          <about-section />
        </div>
        <div class="w-screen h-screen section bg-[#152934] m-auto" data-anchor="page5">
          <contact-section />
        </div>
      </div> -->
  </ClientOnly>
</template>

<script lang="ts" setup>
import HomeSection from '@/components/HomeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue';
import RandomStars from '@/components/RandomStars.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Mousewheel, Pagination } from "swiper";
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

@media (orientation: landscape) and (max-device-width : 960px) {
  .satellite {
    @apply hidden
  }

  .moon {
    @apply top-[85vh] z-[1] max-w-[35vw] left-[62vw]
  }
}
.fp-watermark{
  visibility: hidden;
}
</style>
