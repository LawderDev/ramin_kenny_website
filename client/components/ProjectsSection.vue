<template>
  <div>
    <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl relative z-20 flex items-center justify-center portrait:mb-12 portrait:md:mb-14 mb-10 font-bold ">
      {{ projectInfos.data.projectSection.data.attributes.title }}
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
      class="mySwipe w-[98vw] h-[33vh] overflow-visible relative z-0"
      @beforeInit="orientationChangeHandler"
    >
      <swiper-slide v-for="(project, index) in projectInfos.data.projectSection.data.attributes.projects.data" :key="`${project.attributes.name}-${index}`" class="project-slides">
        <img class="imgProject" :src="`${strapiUrl.replace('/api', '')}${project.attributes.url}`" :alt="project.attributes.name">
      </swiper-slide>
      <swiper-slide v-for="(project, index) in projectInfos.data.projectSection.data.attributes.projects.data" :key="`${project.attributes.name}-${index}`" class="project-slides">
        <img class="imgProject" :src="`${strapiUrl.replace('/api', '')}${project.attributes.url}`" :alt="project.attributes.name">
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
import { onUnmounted, ref, useStrapiGraphQL, useStrapiUrl } from '#imports'
import { projectQuery } from '~/graphql/query'

const strapiUrl = useStrapiUrl()
const graphql = useStrapiGraphQL()
const projectInfos = await graphql(projectQuery)

const slidesPerView = ref(-1 as number)

const orientationChangeHandler = () => { slidesPerView.value = window.matchMedia('(orientation:portrait)').matches ? 2 : 5 }

console.log(projectInfos.data.projectSection.data.attributes.projects.data[0].attributes)
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

.imgProject{
  @apply rounded-xl object-cover w-[60vw] h-[25vh] border-[#1B3543] border-2
}
</style>
