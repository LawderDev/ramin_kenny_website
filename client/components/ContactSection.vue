<template>
  <div class="w-screen h-screen section bg-[#152934] flex flex-col items-center justify-center">
    <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl relative z-20 flex items-center justify-center portrait:mb-2 lg:mb-4 font-bold">
      Contact
    </h2>
    <form class="flex justify-center items-center flex-col relative z-0" @submit.prevent="sendEmail" ref="form">
      <div class="bg-[#1B3543] rounded-2xl landscape:h-[82vh] landscape:w-[70vw] w-[80vw] landscape:lg:h-[60vh] landscape:xl:h-[53vh] h-[28rem] md:h-[55vh] flex flex-col items-center gap-3 justify-center landscape:mb-2 landscape:lg:mb-10 mb-4 md:mb-10">
        <div class="flex flex-col w-[95%]">
          <label class="titleInput">Nom</label>
          <input
            class="formInput"
            type="text"
            name="name"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <label class="titleInput">Email</label>
          <input
            class="formInput"
            type="email"
            name="email"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <label class="titleInput">Message</label>
          <textarea name="message"
            class="w-full landscape:h-20 landscape:lg:h-40 h-40 bg-[#224254] border-2 border-[#152934] text-gray-300  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="landscape:mb-7 landscape:lg:mb-0 lg:mt-4">
          <input type="submit" class="button bg-[#7FD685] hover:bg-[#7fd698] transition-colors ease-in-out rounded-md px-4 py-1 md:px-6 md:py-2 text-[#152934] shadow-md cursor-pointer" value="Envoyer"/>
        </div>
      </div>
      <div class="w-[70vw] flex gap-10">
        <a href="instagram.com"> <font-awesome-icon icon="fa-brands fa-instagram" class="brandIcon" /></a>
        <a href="linkedin.com"><font-awesome-icon icon="fa-brands fa-linkedin" class="brandIcon" /></a>
        <a href="github.com"><font-awesome-icon icon="fa-brands fa-github" class="brandIcon" /></a>
      </div>
    </form>
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser';
import {useRuntimeConfig} from "nuxt/app";

const form = ref({})
const env = useRuntimeConfig()

const sendEmail = () => {
  emailjs.sendForm(env.serviceId, env.templateId, form.value, env.publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
}
</script>

<style scoped>
.brandIcon{
  @apply hover:animate-[pulse_1.5s_linear_infinite] text-3xl md:text-5xl
}

.formInput{
  @apply w-full bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 landscape:p-1 landscape:lg:p-3 p-3 rounded-lg focus:outline-none
}

.titleInput{
  @apply uppercase text-xs  md:text-sm text-gray-400 font-bold
}
</style>
