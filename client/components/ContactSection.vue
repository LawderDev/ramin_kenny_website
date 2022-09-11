<template>
  <div class="w-screen h-screen section bg-[#152934] flex flex-col items-center justify-center">
    <h2 class="relative z-20 text-3xl flex items-center justify-center mb-16 font-bold">
      Contact
    </h2>
    <div class="flex justify-center items-center flex-col relative z-0">
      <div class="bg-[#1B3543] rounded-2xl w-[70vw] h-[45vh] flex flex-col items-center gap-3 justify-center mb-10">
        <div class="flex flex-col w-[95%]">
          <span class="uppercase text-sm text-gray-400 font-bold">Nom</span>
          <input
            class="w-full bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <span class="uppercase text-sm text-gray-400 font-bold">Email</span>
          <input
            class="w-full bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <span class="uppercase text-sm text-gray-400 font-bold">Message</span>
          <textarea
            class="w-full h-32 bg-[#224254] border-2 border-[#152934] text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button type="button" class="button bg-[#7FD685] hover:bg-[#7fd698] transition-colors ease-in-out  rounded-md px-6 py-2 text-[#152934]  shadow-md hover:">Envoyer</button>
        </div>
      </div>
      <div class="w-[70vw] flex gap-10">
        <a href="instagram.com"> <font-awesome-icon icon="fa-brands fa-instagram" class="hover:animate-[pulse_1.5s_linear_infinite] xl:text-5xl" /></a>
        <a href="linkedin.com"><font-awesome-icon icon="fa-brands fa-linkedin" class="hover:animate-[pulse_1.5s_linear_infinite] xl:text-5xl" /></a>
        <a href="github.com"><font-awesome-icon icon="fa-brands fa-github" class="hover:animate-[pulse_1.5s_linear_infinite] xl:text-5xl" /></a>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>
