import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@headlessui/vue',
      '@heroicons/vue'
    ]
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/main.css'
  ],
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  publicRuntimeConfig: {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    publicKey: process.env.PUBLIC_KEY
  }
})
