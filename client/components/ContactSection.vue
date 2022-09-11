<template>
  <div class="w-screen h-screen section bg-[#152934] flex flex-col items-center justify-center">
    <h2 class="relative z-20 text-3xl flex items-center justify-center mb-16 font-bold">
      Contact
    </h2>
    <form class="flex justify-center items-center flex-col relative z-0" @submit.prevent="sendEmail" ref="form">
      <div class="bg-[#1B3543] rounded-2xl w-[70vw] h-[55vh] flex flex-col items-center gap-3 justify-center mb-10">
        <div class="flex flex-col w-[95%]">
          <label class="uppercase text-sm text-gray-400 font-bold">Nom</label>
          <input
            class="w-full bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <label class="uppercase text-sm text-gray-400 font-bold">Email</label>
          <input
            class="w-full bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <label class="uppercase text-sm text-gray-400 font-bold">Message</label>
          <textarea name="message"
            class="w-full h-40 bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mt-4">
          <input type="submit" class="button bg-[#7FD685] hover:bg-[#7fd698] transition-colors ease-in-out rounded-md px-6 py-2 text-[#152934] shadow-md" value="Envoyer"/>
        </div>
      </div>
      <div class="w-[70vw] flex gap-10">
        <a href="instagram.com"> <font-awesome-icon icon="fa-brands fa-instagram" class="hover:animate-[pulse_1.5s_linear_infinite] xl:text-5xl" /></a>
        <a href="linkedin.com"><font-awesome-icon icon="fa-brands fa-linkedin" class="hover:animate-[pulse_1.5s_linear_infinite] xl:text-5xl" /></a>
        <a href="github.com"><font-awesome-icon icon="fa-brands fa-github" class="hover:animate-[pulse_1.5s_linear_infinite] xl:text-5xl" /></a>
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
  console.log(form.value)

  emailjs.sendForm(env.serviceId, env.templateId, form.value, env.publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
}
</script>

<style scoped>
</style>
