<template>
  <div>
    <div v-for="nb in 70" class="stars animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-white absolute" ref="itemRefs" :style="`right: ${Math.round(getRandomArbitrary(0, 100))}%; top: ${Math.round(getRandomArbitrary(0,100))}%; ${ getRandomStarSize() };`"></div>
  </div>
</template>

<script lang="ts" setup>
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

const getRandomStarSize = () => {
  let size = Math.round((getRandomArbitrary(0.1, 0.4)) * 10) / 10
  return `width:${size}vw; height:${size}vw`
}
</script>

<style scoped>

</style>