<template>
  <div class="skill-card">
    <div class="pt-[4vh] pb-[2vh] xl:pt-[7vh] xl:pb-[5vh]">
      <font-awesome-icon :icon="icon" class="text-[#7FD685] landscape:sm:text-xs landscape:lg:text-xl landscape:xl:text-2xl text-2xl xl:text-4xl" />
    </div>
    <h3 class="landscape:sm:text-xs landscape:lg:text-xl landscape:xl:text-1xl text-xl xl:text-2xl">
      {{ props.title }}
    </h3>

    <div v-for="(skill, index) in props.content" :key="`${props.title}-${index}`">
      <div v-for="(obj, index2) in skill" :key="`${props.title}-${index}-${index2}`">
        <div v-if="obj[0]">
          <h4 class="content-card text-[#7FD685]">
            {{ myMap.get(getKeyByValue(skill, obj)) }}
          </h4>
          <ul class="content-card pb-4">
            <li v-for="s in obj" :key="`${props.title}-${index}-${index2}-${s.name}`">
              {{ s.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ISkill{
  title: string,
  language: Array<string>,
  frameworksAndLibrary: Array<string>,
  sgbd: Array<string>,
  cms: Array<string>,
  gameEngine: Array<string>,
}

const props = defineProps<{
  title: string
  icon: string
  content: ISkill
}>()

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value)

const myMap = new Map();
myMap.set("language", 'Langages')
myMap.set("frameworksAndlibrary", 'Frameworks et librairies')
myMap.set("gameEngine", "Moteurs de jeux")
myMap.set("sgbd", "SGBD")
myMap.set("cms", "CMS")

</script>

<style scoped>
.skill-card{
  @apply landscape:sm:h-[22rem] landscape:lg:h-[40rem] landscape:xl:h-[44.5rem] landscape:w-[25vw] w-[90vw] md:w-[30vw] h-[37rem] md:h-[40rem]  lg:h-[40rem]  xl:h-[44.5rem] bg-[#1B3543] rounded-2xl relative z-10 flex flex-col items-center text-center border-[#152934] transition-colors hover:border-[#7FD685] border-2
}

.content-card{
  @apply landscape:sm:text-xs landscape:lg:text-lg landscape:xl:text-lg text-lg xl:text-xl
}
</style>
