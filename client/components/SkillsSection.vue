<template>
  <div class="w-screen h-screen bg-[#152934] flex items-center justify-center flex-col z-0" data-anchor="page1">
      <h2 class="text-md relative z-20 xl:text-3xl flex items-center justify-center md:mb-8 font-bold">
        Compétences
      </h2>
      <div class="w-[90vw] landscape:w-[90vw] landscape:ml-[7.5vw] ml-[5.3vw] md:ml-[2.5vw] h-[40rem] z-10 relative relative z-0">
        <swiper
          :slides-per-view="slidesPerView"
          :modules="[Pagination]"
          :pagination="{
            clickable:true
          }"
          class="mySkillSwipe"
        >
          <swiper-slide>
            <skill-card :title="'Front-end'" :content="frontSkills" />
          </swiper-slide>

          <swiper-slide>
            <skill-card :title="'Back-end'" :content="backSkills" />
          </swiper-slide>

          <swiper-slide>
            <skill-card :title="'Autres'" :content="otherSkills" />
          </swiper-slide>
        </swiper>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { SkillCard } from '#components'
import { onUnmounted, ref } from '#imports'

const frontSkills = [{ name: 'Langage', content: ['Javascript', 'Typescript', 'Css'] },
  { name: 'Frameworks et librairies', content: ['Vue.js', 'Nuxt.js', 'TailwindCss', 'Bootstrap', 'JQuery'] }]

const backSkills = [{ name: 'Langage', content: ['Javascript', 'Typescript', 'PHP'] },
  { name: 'Frameworks et librairies', content: ['Express.js', 'Laravel', 'Symfony', 'Spring Boot'] },
  { name: 'SGBD', content: ['MySql', 'MongoDB'] },
  { name: 'CMS', content: ['Strapi'] }
]

const otherSkills = [{ name: 'Langage', content: ['C', 'C#', 'Java', 'Kotlin'] },
  { name: 'Frameworks et librairies', content: ['Windows Form', 'WPF'] },
  { name: 'SGBD', content: ['MySql', 'MongoDB'] },
  { name: 'Moteur de jeu', content: ['Unity 3D'] }
]

const slidesPerView = ref(-1)

const orientationChangeHandler = () => {
  slidesPerView.value = window.matchMedia('(orientation:portrait)').matches && window.matchMedia('(max-width: 767px)').matches ? 1 : 3
  if (window.matchMedia('(orientation:portrait)').matches && window.matchMedia('(min-width: 768px)').matches) { slidesPerView.value = 3 }
}
orientationChangeHandler()

if (process.client) {
  window.addEventListener('resize', orientationChangeHandler)
}

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', orientationChangeHandler)
  }
})
</script>

<style>
.mySkillSwipe .swiper-slide{
  @apply landscape:w-[25vw]
}

</style>
