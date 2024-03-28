<script setup lang="ts">
import { useFetchProductByCategory } from '~/composables/useProductListByCategory'
import type { ProductType } from '~/types'

const {
  data: menClothing,
  pending,
  error
} = await useFetchProductByCategory("men's clothing")
const { data: womanClothing } =
  await useFetchProductByCategory("women's clothing")

const data = ref<ProductType[]>([])
data.value = [
  ...(menClothing.value as ProductType[]),
  ...(womanClothing.value as ProductType[])
]
</script>

<template>
  <LazyProductList :data="data" :pending="pending" :error="error" />
</template>

<style scoped></style>
