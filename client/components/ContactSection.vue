<template>
  <div class="w-screen h-screen section bg-[#152934] flex flex-col items-center justify-center">
    <contact-modal
      :open="open"
      :confirmation-message="'Compris !'"
      @close="open=false"
    >
      {{ contactInfos.data.contactSection.data.attributes.confirmationMessage }}
    </contact-modal>
    <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl relative z-20 flex items-center justify-center portrait:mb-2 lg:mb-4 font-bold">
      {{ contactInfos.data.contactSection.data.attributes.title }}
    </h2>
    <form ref="form" class="flex justify-center items-center flex-col relative z-10" @submit.prevent="sendEmail">
      <div class="bg-[#1B3543] rounded-2xl landscape:h-[82vh] landscape:w-[70vw] w-[80vw] landscape:lg:h-[60vh] landscape:xl:h-[75vh] landscape:2xl:h-[53vh] h-[28rem] md:h-[55vh] flex flex-col items-center gap-3 justify-center landscape:mb-1 landscape:lg:mb-5 mb-2 md:mb-5">
        <div class="flex flex-col w-[95%]">
          <label class="titleInput">{{ contactInfos.data.contactSection.data.attributes.name }}</label>
          <input
            class="formInput"
            required="required"
            type="text"
            name="name"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <label class="titleInput">{{ contactInfos.data.contactSection.data.attributes.email }}</label>
          <input
            class="formInput"
            required="required"
            type="email"
            name="email"
            placeholder=""
          >
        </div>
        <div class="flex flex-col w-[95%]">
          <label class="titleInput">{{ contactInfos.data.contactSection.data.attributes.message }}</label>
          <textarea
            name="message"
            required="required"
            class="w-full landscape:h-20 landscape:lg:h-40 h-40 bg-[#224254] border-2 border-[#152934] text-gray-300  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="landscape:mb-7 landscape:lg:mb-0 lg:mt-4">
          <input type="submit" class="button bg-[#7FD685] hover:bg-[#7fd698] transition-colors ease-in-out rounded-md px-4 py-1 md:px-6 md:py-2 text-[#152934] shadow-md cursor-pointer" value="Envoyer">
        </div>
      </div>
    </form>
    <div class="w-[70vw] flex gap-10">
      <a href="https://instagram.com/ramin_kenny_433/"><font-awesome-icon icon="fa-brands fa-instagram" class="brandIcon" /></a>
      <a href="https://www.linkedin.com/in/kenny-ramin/"><font-awesome-icon icon="fa-brands fa-linkedin" class="brandIcon" /></a>
      <a href="https://github.com/LawderDev/"><font-awesome-icon icon="fa-brands fa-github" class="brandIcon" /></a>
    </div>
    <div class="absolute  top-[90vh] md:top-[84vh] text-center landscape:top-[90vh] landscape:text-xs landscape:lg:top-[86vh] landscape:lg:text-lg">
      <p>© 2022 Kenny Ramin</p>
      <a @click="openCredit = true" class="underline cursor-pointer">Credits</a>
    </div>
    <contact-modal
        :open="openCredit"
        :confirmation-message="'Fermer'"
        @close="openCredit=false"
    >
      <div class="flex flex-col gap-2 font-normal underline">
        <a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/uranus" title="uranus icons">Uranus icons created by BZZRINCANTATION - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/saturn" title="saturn icons">Saturn icons created by Chanut-is-Industries - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/bot" title="bot icons">Bot icons created by Smashicons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/satellite" title="satellite icons">Satellite icons created by Icongeek26 - Flaticon</a>
        <a href="https://fontawesome.com/" title="fontawesome icons">All the other icon - Fontawesome</a>
      </div>
    </contact-modal>
  </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { useRuntimeConfig } from '#imports'
import ContactModal from '@/components/ContactModal'
import { ref, useStrapiGraphQL } from '#imports'
import { contactQuery } from '@/graphql/query'
const graphql = useStrapiGraphQL()
const contactInfos = await graphql(contactQuery)

const form = ref({} as HTMLFormElement)
const env = useRuntimeConfig()
const open = ref(false as boolean)
const openCredit = ref(false as boolean)

const sendEmail = () => emailjs.sendForm(env.serviceId, env.templateId, form.value, env.publicKey)
  .then(() => {
    open.value = true
  })
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
