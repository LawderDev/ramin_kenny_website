<template>
  <ClientOnly>
    <full-page id="fullpage" ref="fullpage" class="text-[#FEFEFF]">
      <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-[2] max-w-[34vw] md:max-w-[22vw] lg:max-w-[12vw] top-[15vh] lg:top-[5vh] left-[15vw] lg:left-[20vw] animate-[spin_3s_linear_infinite]">
      <div class="section bg-[#152934]" data-anchor="page1">
        <home-section />
      </div>
      <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[70vh] max-w-[70vw] opacity-80">
      <div class="section bg-[#152934]" data-anchor="page2">
        <skills-section />
      </div>
      <div class="section bg-[#152934] m-auto" data-anchor="page3">
        <projects-section />
      </div>
      <div class="section bg-[#152934] m-auto" data-anchor="page4">
        <about-section />
      </div>
    </full-page>
  </ClientOnly>
</template>

<script lang="ts" setup>
import HomeSection from '@/components/HomeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>

<style>
@media (max-device-width : 380px) {
   .satellite{
     @apply top-[9vh]
   }
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
