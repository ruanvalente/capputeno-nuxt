<script setup lang="ts">
import { useFetchProductByCategory } from '~/composables/useProductListByCategory'

const { data, pending, error } = await useFetchProductByCategory('electronics')
</script>

<template>
  <LazyProductList :data="data" :pending="pending" :error="error" />
</template>

<style scoped></style>
