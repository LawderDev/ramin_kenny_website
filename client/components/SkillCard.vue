<template>
  <div class="skill-card">
    <div class="pt-[4vh] pb-[2vh] xl:pt-[7vh] xl:pb-[5vh]">
      <font-awesome-icon icon="paintbrush" class="text-[#7FD685] text-2xl xl:text-4xl" />
    </div>
    <h3 class="text-xl xl:text-2xl pb-4">
      {{ props.title }}
    </h3>
    <template v-for="skill in props.content" :key="props.title + skill.name">
      <h4 class="content-card text-[#7FD685] pb-2">
        {{ skill.name }}
      </h4>
      <ul class="content-card pb-4">
        <li v-for="c in skill.content" :key="props.title + c">
          {{ c }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface ISkill{
  name: string,
  content: Array<string>,
}

const props = defineProps<{
  title: string
  content: Array<ISkill>
}>()
</script>

<style scoped>
.skill-card{
  @apply landscape:w-[25vw] w-[90vw] md:w-[30vw] h-[40rem]  md:h-[40rem]  lg:h-[40rem]  xl:h-[44.5rem] bg-[#1B3543] rounded-2xl z-20 flex flex-col items-center text-center border-[#152934] transition-colors hover:border-[#7FD685] border-2
}

.content-card{
  @apply text-lg xl:text-xl
}
</style>
