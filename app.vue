<template>
  <NuxtLayout class="min-h-full bg-gray-100">
    <NuxtPage class="px-60 py-8" />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Capputeno',
  description: 'Find your precious product just a click away',
  ogTitle: 'Capputeno',
  ogDescription: 'Find your precious product just a click away',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>
<style lang="scss">
body,
#__nuxt {
  width: 100vw;
  height: 100vh;
}
</style>
