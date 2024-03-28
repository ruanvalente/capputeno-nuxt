<script setup lang="ts">
import { useFetchProductByCategory } from '~/composables/useProductListByCategory'

const { data, pending, error } = await useFetchProductByCategory('jewelery')
</script>

<template>
  <div>
    <LazyProductList :data="data" :pending="pending" :error="error" />
  </div>
</template>

<style scoped></style>
