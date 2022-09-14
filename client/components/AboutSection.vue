<template>
  <div>
    <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl relative z-20 flex items-center justify-center md:mb-4 font-bold">
      {{ aboutInfos.data.aboutSection.data.attributes.title }}
    </h2>
    <div class="sm:text-sm md:text-lg landscape:md:text-sm landscape:lg:text-lg flex-row lg:flex-row-reverse landscape:xl:text-2xl flex align-center lg:justify-center flex-wrap px-10 relative z-0">
      <div
        class="landscape:sm:hidden landscape:lg:flex w-[100px] h-[100px] landscape:md:w-[22vw] landscape:xl:w-[15.5vw] lg:h-[45vh] lg:self-center flex lg:justify-self-center lg:rounded-2xl lg:ml-[4vw] rounded-full z-10 overflow-hidden relative bg-cover border-[#152934] transition-colors hover:border-[#7FD685] border-2"
        :style="{backgroundImage: `url('${strapiUrl.replace('/api', '')}${aboutInfos.data.aboutSection.data.attributes.profile.data.attributes.url}')`}"
      />
      <div class="sm:w-full lg:w-1/2 rounded-full landscape:sm:pt-0 sm:pt-5 lg-pt-0">
        <h3 class="font-bold pb-5">
          {{ aboutInfos.data.aboutSection.data.attributes.question }}
        </h3>
        <div class="pb-5">
          Hello ! <span><font-awesome-icon icon="hand" class="-rotate-45 scale-x-[-1] text-amber-200" /></span>
        </div>
        <p v-for="text in aboutInfos.data.aboutSection.data.attributes.presentation" :key="`${text.text}-${text.id}`" class="pb-5">
          {{ text.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { aboutQuery } from '@/graphql/query'
import { useStrapiGraphQL, useStrapiUrl } from '#imports'

const graphql = useStrapiGraphQL()
const aboutInfos = await graphql(aboutQuery)
const strapiUrl = useStrapiUrl()
</script>
