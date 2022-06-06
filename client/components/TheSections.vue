<template>
  <ClientOnly>
    <full-page id="fullpage" ref="fullpage" class="text-[#FEFEFF]">
      <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-[2] max-w-[34vw] md:max-w-[22vw] lg:max-w-[12vw] top-[15vh] lg:top-[5vh] left-[15vw] lg:left-[20vw] animate-[spin_3s_linear_infinite]">
      <div class="section bg-[#152934]">
        <home-section />
      </div>
      <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[52vw] lg:left-[55vw] xl:left-[61.198vw] top-[76vh]  md:top-[76vh] lg:top-[85vh] xl:top-[70vh] max-w-[70vw] opacity-80">
      <div class="section bg-[#152934]">
        <skills-section />
      </div>
      <div class="section bg-[#152934] flex items-center justify-center">
        <h2 class="pb-12 text-2xl font-bold">Réalisations</h2>
        <div class="container">
          <input id="item-1" type="radio" name="slider" checked>
          <input id="item-2" type="radio" name="slider">
          <input id="item-3" type="radio" name="slider">
          <div class="cards">
            <label id="song-1" class="card" for="item-1">
              <img class="rounded-xl object-cover w-full h-full border-[#1B3543] border-2" src="assets/project_IGDB.png" alt="IGDB">
            </label>
            <label id="song-2" class="card" for="item-2">
              <img class="rounded-xl object-cover w-full h-full border-[#1B3543] border-2" src="assets/perso.png" alt="perso">
            </label>
            <label id="song-3" class="card" for="item-3">
              <img class="rounded-xl object-cover w-full h-full border-[#1B3543] border-2" src="assets/imageindragon.png" alt="imageindragon">
            </label>
          </div>
        </div>
      </div>
    </full-page>
  </ClientOnly>
</template>

<script lang="ts" setup>
import HomeSection from '@/components/HomeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
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

input[type=radio] {
  display: none;
}

.card {
  position: absolute;
  width: 50vw;
  height: 60vh;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform .4s ease;
  cursor: pointer;
}

.container {
  width: 100%;
  max-width: 800px;
  max-height: 600px;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cards {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

#item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(.8);
  opacity: .4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(.8);
  opacity: .4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;
  @apply transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300
}
</style>
