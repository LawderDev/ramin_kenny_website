<template>
  <ClientOnly>
    <full-page id="fullpage" ref="fullpage" class="text-[#FEFEFF]">
      <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-[2] max-w-[34vw] md:max-w-[22vw] lg:max-w-[12vw] top-[15vh] lg:top-[5vh] left-[15vw] lg:left-[20vw] animate-[spin_3s_linear_infinite]">
      <div class="section w-screen h-screen bg-[#152934]">
        <home-section />
      </div>

      <div class="section w-screen h-screen bg-[#152934]">
        <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[-24vh] lg:top-[-15vh] xl:top-[-30vh] max-w-[70vw]">
        Second section ...
      </div>
    </full-page>
  </ClientOnly>
</template>

<script lang="ts" setup>
import HomeSection from '@/components/HomeSection.vue'
</script>

<style scoped>
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
    @apply top-[-15vh] z-[1] max-w-[35vw] left-[62vw]
  }
}
</style>
