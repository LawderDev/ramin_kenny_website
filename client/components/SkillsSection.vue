<template>
  <div class="w-screen h-screen bg-[#152934] flex items-center justify-center flex-col">
    <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl relative z-20 flex portrait:mt-10 portrait:md:mt-0 portrait:mb-2 items-center justify-center md:mb-4 font-bold">
      {{ title.attributes.title }}
    </h2>
    <div class="w-[90vw] landscape:w-[90vw] landscape:ml-[7.5vw] ml-[0.5vw] md:ml-[2.5vw] h-[40rem] z-10 relative ">
      <swiper
        :slides-per-view="slidesPerView"
        :modules="[Pagination]"
        :pagination="{
          clickable:true
        }"
        class="mySkillSwipe"
      >
        <swiper-slide v-for="(skill, index) in skills" :key="`${skill.attributes.title}-${index}`">
          <skill-card :title="skill.attributes.title" :icon="skill.attributes.icon" :content="skill.attributes.Skills" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { SkillCard } from '#components'
import { onUnmounted, ref, useStrapiGraphQL } from '#imports'
import { skillQuery } from '@/graphql/query'

const graphql = useStrapiGraphQL()
const skillInfos = await graphql(skillQuery)
const skills: [] = skillInfos.data.skillSections.data
const title = skills.shift()

const slidesPerView = ref(-1 as number)

const orientationChangeHandler = () => {
  slidesPerView.value = window.matchMedia('(orientation:portrait)').matches && window.matchMedia('(max-width: 767px)').matches ? 1 : 3
  if (window.matchMedia('(orientation:portrait)').matches && window.matchMedia('(min-width: 768px)').matches) { slidesPerView.value = 3 }
}
orientationChangeHandler()

if (process.client) { window.addEventListener('resize', orientationChangeHandler) }

onUnmounted(() => {
  if (process.client) { window.removeEventListener('resize', orientationChangeHandler) }
})
</script>

<style>
.mySkillSwipe .swiper-slide{
  @apply landscape:w-[25vw]
}

</style>
