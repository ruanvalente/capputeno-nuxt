<script setup lang="ts">
import type { ProductType } from '~/types'
import { formatReal } from '~/utils/formatters/price'
import type { FetchError } from 'ofetch'
import { checkClothingCategory } from '~/utils/check-clothing-category'

const props = defineProps<{
  data: ProductType[]
  pending: boolean
  error: FetchError
}>()

const checkCategory = (category: string) => {
  return checkClothingCategory(category)
}

const handlePageChange = (pageNumber: number) => {
  console.log(pageNumber)
}
</script>

<template>
  <div>
    <div class="flex items-center w-full justify-end mt-[-40px] mb-8">
      <Pagination
        :items-per-page="8"
        :total-items="28"
        :on-page-change="handlePageChange"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
      <div v-for="product in props.data" :key="product.id">
        <LazySkeletonProductList v-if="props.pending" />
        <NuxtLink
          :href="`/products/${checkCategory(product.category)}`"
          :key="product.id"
        >
          <div
            class="bg-white rounded hover:cursor-pointer transition-all hover:scale-110"
          >
            <LazyNuxtImg
              class="w-full h-[300px] rounded-t-sm rounded-l-sm object-fill p-4"
              loading="lazy"
              :src="product.image"
              :title="product.title"
            />
            <div class="flex flex-col px-4 py-4 divide-y">
              <h2 class="text-base text-gray-500 truncate">
                {{ product.title }}}
              </h2>
              <div class="mt-2">
                <p class="mt-2 text-sm font-medium text-gray-900">
                  {{ formatReal(product.price) }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div
        class="col-span-full flex items-center justify-center min-h-screen"
        v-show="props.error"
      >
        <p class="text-gray-600">
          Ops... não foi possível carregar os dados no momento. Entre em contato
          com suporte !
        </p>
      </div>
    </div>
  </div>
</template>
