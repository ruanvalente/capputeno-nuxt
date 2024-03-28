<script setup lang="ts">
import type { PropType } from 'vue'
import PageNumbersButton from '~/components/pagination/PageNumbersButton.vue'

const props = defineProps({
  itemsPerPage: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  onPageChange: {
    type: Function as PropType<(pageNumber: number) => void>,
    required: true
  }
})

const currentPage = ref(1)
const totalPages = Math.ceil(
  (props.totalItems as number) / (props.itemsPerPage as number)
)

console.log(totalPages)
const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value = currentPage.value + 1
    props.onPageChange(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1
    props.onPageChange(currentPage.value - 1)
  }
}

const handlePageClick = (pageNumber: number) => {
  currentPage.value = pageNumber
  props.onPageChange(pageNumber)
}

const renderPageNumbers = () => {
  return Array.from({ length: totalPages }, (_, i) => i + 1)
}
watch(currentPage, (newValue) => {
  props.onPageChange(newValue)
})
</script>
<template>
  <nav aria-label="Page navigation">
    <ul class="inline-flex -space-x-px text-sm">
      <div v-for="pageNumber in renderPageNumbers()">
        <PageNumbersButton
          :key="pageNumber"
          :page-number="pageNumber"
          :is-current-page="currentPage === pageNumber"
          :handle-click="handlePageClick"
        />
      </div>
      <li>
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded mr-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i class="pi pi-chevron-left text-sm"></i>
        </button>
      </li>
      <li>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 rounded mr-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i class="pi pi-chevron-right text-sm"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
