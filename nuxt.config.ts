// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['~/assets/css/tailwind.css'],
  colorMode: {
    classSuffix: ''
  },
  runtimeConfig: {
    // Private keys (only available server-side)
    // Add private keys here if needed in the future

    // Public keys (exposed to client-side)
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080/api'
    }
  }
})
