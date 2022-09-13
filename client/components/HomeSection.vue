<template>
  <div>
    <div class="ml-[3vh] sm:ml-[12.5vw] w-[25rem] lg:w-[49rem]">
      <div class="flex">
        <div class="home-presentation text-4xl md:text-5xl xl:text-8xl border-b-2 border-[#7FD685] pb-4 mb-4 relative z-0">
          <h1 class="shadow shadow-[#152934] text-[#152934] mb-2">
            {{ homeInfos.data.homeSection.data.attributes.author }}
          </h1>
          <h2 class="text-[#7FD685]">
            {{ homeInfos.data.homeSection.data.attributes.status }}
          </h2>
        </div>

        <div class="welcome-box hidden sm:block bubble absolute left-[63vw] lg:left-[62vw] xl:left-[66vw] top-[45vh] lg:top-[38vh] xl:top-[28vh]">
          <div class="welcome absolute bubble-text text-xl xl:text-2xl text-center rounded-3xl bg-[#1B3543] text-[#7FD685] p-10 w-[272px] absolute">
            <p>{{ homeInfos.data.homeSection.data.attributes.message }}</p>
          </div>
        </div>
        <img src="assets/robot.png" alt="robot" class="robot hidden sm:block max-w-[15vw] xl:max-w-[9vw] absolute left-[75vw] lg:left-[70.313vw] top-[65vh] xl:top-[52vh] animate-[bounce_3s_linear_infinite]">
      </div>
      <p class="pl-2 text-xl xl:text-3xl">
        {{ homeInfos.data.homeSection.data.attributes.quotation }}
      </p>
      <div class="more text-2xl xl:text-3xl relative top-[11.85vh] flex gap-5 cursor-pointer" @click="slideTo(1)">
        <div class="w-14 h-14 xl:w-20 xl:h-20 rounded-full border-2 border-white flex items-center justify-center  ">
          <font-awesome-icon icon="arrow-down-long" class="animate-[bounce_1s_linear_infinite] xl:text-4xl" />
        </div>
        <span class="flex items-center justify-center ">{{ homeInfos.data.homeSection.data.attributes.more }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSliderStore } from '~/stores/sliderStore'
import { homeQuery } from '~/graphql/query'
import { useStrapiGraphQL } from '#imports'

const graphql = useStrapiGraphQL()
const homeInfos = await graphql(homeQuery)
const sliderStore = useSliderStore()
const slideTo = (index: number) => sliderStore.slideTo(index)
</script>

<style scoped>
.shadow{
  text-shadow: -1px -1px 0 #FEFEFF, 1px -1px 0 #FEFEFF, -1px 1px 0 #FEFEFF, 1px 1px 0 #FEFEFF;
}

.bubble-text::after{
  @apply content-[""] top-[135px] xl:top-[140px] border-x-[20px] border-x-transparent border-t-[20px] border-t-transparent border-t-[#1B3543] absolute;
}

@media (orientation: landscape) and (max-device-width: 670px)  {
  .robot{
    @apply hidden
  }

  .welcome-box{
    @apply hidden
  }
}

@media (orientation: landscape) and (max-device-width : 960px) {
  .robot {
    @apply max-w-[12vw] top-[59vh] left-[73vw]
  }

  .welcome-box{
    @apply top-[8vh] left-[62vw]
  }

  .bubble-text{
    @apply p-6 text-lg top-[20vh]
  }

  .bubble-text::after {
    @apply top-[75px] ;
  }

}
</style>
