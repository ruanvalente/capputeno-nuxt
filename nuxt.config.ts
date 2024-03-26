// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Saira: true,
      'Saira Stencil One': true
    }
  },
  css: ['primeicons/primeicons.css'],
  ssr: true
})
