<template>
  <div>
    <h2 class="relative z-20 text-2xl flex items-center justify-center mt-20 font-bold">
      Compétences
    </h2>
    <div class="flex gap-16 items-center justify-center flex-wrap z-20 pt-10 pb-10">
      <div class="skill-card">
        <div class=" pt-[4vh] pb-[2vh] xl:pt-[7vh] xl:pb-[5vh]">
          <font-awesome-icon icon="paintbrush" class="text-[#7FD685] text-2xl xl:text-4xl" />
        </div>
        <h3 class="text-xl xl:text-2xl pb-4">
          Front-end
        </h3>
        <h4 class="content-card  text-[#7FD685] pb-2">
          Langage
        </h4>
        <ul class="content-card pb-4">
          <li>Javascript</li>
          <li>Typescript</li>
          <li>CSS</li>
        </ul>
        <h4 class="content-card  text-[#7FD685] pb-2">
          Framework et librairies
        </h4>
        <ul class="content-card ">
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
        </ul>
      </div>

      <div class="skill-card">
        <div class=" pt-[4vh] pb-[2vh] xl:pt-[7vh] xl:pb-[5vh]">
          <font-awesome-icon icon="screwdriver-wrench" class="text-[#7FD685] text-3xl xl:text-4xl" />
        </div>
        <h3 class="text-xl xl:text-2xl pb-4">
          Back-end
        </h3>
        <h4 class="content-card  text-[#7FD685] pb-2">
          Langage
        </h4>
        <ul class="content-card  pb-4">
          <li>Javascript</li>
          <li>Typescript</li>
          <li>PHP</li>
        </ul>
        <h4 class="content-card  text-[#7FD685] pb-2">
          Framework et librairies
        </h4>
        <ul class="content-card  pb-4">
          <li>Express.js</li>
          <li>Laravel</li>
          <li>Symfony</li>
          <li>Spring Boot</li>
        </ul>

        <h4 class="content-card  text-[#7FD685] pb-2">
          SGBD
        </h4>
        <ul class="content-card  pb-4">
          <li>MySql</li>
          <li>MongoDB</li>
        </ul>

        <h4 class="content-card  text-[#7FD685] pb-2">
          CMS
        </h4>
        <ul class="content-card ">
          <li>Strapi</li>
        </ul>
      </div>

      <div class="skill-card">
        <div class=" pt-[4vh] pb-[2vh] xl:pt-[7vh] xl:pb-[5vh]">
          <font-awesome-icon icon="plus" class="text-[#7FD685] text-3xl xl:text-4xl" />
        </div>
        <h3 class="text-xl xl:text-2xl pb-4">
          Autres
        </h3>
        <h4 class="content-card text-[#7FD685] pb-2">
          Langage
        </h4>
        <ul class="content-card pb-4">
          <li>C</li>
          <li>C#</li>
          <li>Java</li>
          <li>Kotlin</li>
        </ul>
        <h4 class="content-card text-[#7FD685] pb-2">
          Framework et librairies
        </h4>
        <ul class="content-card  pb-4">
          <li>Windows Form</li>
          <li>WPF</li>
        </ul>

        <h4 class="content-card text-[#7FD685] pb-2">
          Moteur de jeu
        </h4>
        <ul class="content-card xl:text-xl">
          <li>Unity 3D</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.skill-card{
  @apply w-[19rem] h-[40rem] md:h-[40rem] md:w-[27rem] lg:w-[19rem] lg:h-[40rem] xl:w-[27rem] xl:h-[44.5rem] bg-[#1B3543] rounded-2xl z-20 flex flex-col items-center text-center border-[#152934] transition-colors hover:border-[#7FD685] border-2
}

.content-card{
  @apply text-lg xl:text-xl
}
</style>
