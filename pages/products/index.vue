<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { data, pending, error } = await useFetch(
  'https://fakestoreapi.com/products?limit=8',
  {
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    }
  }
)
</script>

<template>
  <LazyProductList :data="data" :pending="pending" :error="error" />
</template>

<style scoped></style>
