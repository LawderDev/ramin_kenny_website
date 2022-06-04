<template>
  <ClientOnly>
    <full-page id="fullpage" ref="fullpage" class="text-[#FEFEFF]">
      <img src="assets/satellite.png" alt="earth-satellite" class="satellite absolute z-[2] w-36 h-36 xl:w-56 xl:h-56 top-[14vh] lg:top-[5vh] left-16 sm:left-36 lg:left-60 animate-[spin_3s_linear_infinite]">
      <div class="section w-screen h-screen bg-[#152934]">
        <div class=" ml-[3vh] sm:ml-[12.5vw] w-[25rem] lg:w-[49rem]">
          <div class="flex">
            <div class="home-presentation text-4xl lg:text-5xl xl:text-8xl border-b-2 border-[#7FD685] pb-4 mb-4">
              <h1 class="shadow text-[#152934] mb-2">
                {{ authors.data.authors.data[0].attributes.name }}
              </h1>
              <h2 class="text-[#7FD685]">
                Développeur web
              </h2>
            </div>

            <div class="welcome-box hidden sm:block bubble absolute left-[65vw] lg:left-[62vw] xl:left-[66vw] top-[45vh] lg:top-[38vh] xl:top-[28vh]">
              <div class="welcome absolute bubble-text text-xl xl:text-2xl text-center rounded-3xl bg-[#1B3543] text-[#7FD685] p-10 w-[272px] absolute">
                <p>Bienvenue sur mon site !</p>
              </div>
            </div>
            <img src="assets/robot.png" alt="robot" class="robot hidden sm:block w-[150px] h-[181px] absolute left-[75vw] lg:left-[70.313vw]  top-[65vh] xl:top-[51vh] animate-[bounce_3s_linear_infinite]">
          </div>
          <p class="pl-2 text-xl xl:text-3xl">
            Un bon site Web est toujours "en construction" !
          </p>
          <div class="more text-2xl xl:text-3xl relative top-[11.85vh] flex gap-5">
            <div class="w-14 h-14 xl:w-20 xl:h-20 rounded-full border-2 border-white flex items-center justify-center  ">
              <font-awesome-icon icon="arrow-down-long" class="animate-[bounce_1s_linear_infinite] xl:text-4xl" />
            </div>
            <span class="flex items-center justify-center ">Voir plus...</span>
          </div>
        </div>
      </div>
      <div class="section ">
        <img src="assets/moon.png" alt="moon" class="moon z-10 absolute left-[53vw] lg:left-[55vw] xl:left-[61.198vw] top-[-200px] lg:top-[-12vh] xl:top-[-30vh] w-[512px] h-[512px]">
        Second section ...
      </div>
    </full-page>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { authorQuery } from '~/graphql/query'
const graphql = useStrapiGraphQL()

const authors = await graphql(authorQuery)
</script>

<style scoped>
.shadow{
  text-shadow: -1px -1px 0 #FEFEFF, 1px -1px 0 #FEFEFF, -1px 1px 0 #FEFEFF, 1px 1px 0 #FEFEFF;
}

.bubble-text::after{
  @apply  content-[""] top-[135px] xl:top-[140px] border-x-[20px] border-x-transparent  border-t-[20px] border-t-transparent border-t-[#1B3543] absolute;
}

@media (max-device-width : 380px) {
   .satellite{
     @apply top-[9vh]
   }
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
     @apply w-[80px] h-[111px] top-[59vh]
  }

  .satellite {
    @apply hidden
  }

  .moon {
    @apply top-[-15vh] z-[1] w-[320px] h-[320px] left-[62vw]
  }

  .welcome-box{
    @apply top-[8vh] left-[62vw]
  }

  .bubble-text{
    @apply p-6 text-lg top-[20vh]
  }

  .bubble-text::after {
    @apply  top-[75px] ;
  }

}
</style>
