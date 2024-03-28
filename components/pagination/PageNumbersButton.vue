<script setup lang="ts">
const props = defineProps<{
  pageNumber: Number
  isCurrentPage: Boolean
  handleClick: (pageNumber: number) => void
}>()
const pageClass = computed(() => {
  return props.isCurrentPage
    ? 'text-orange-500 border border-orange-500 bg-white'
    : 'text-gray-500 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
})
</script>
<template>
  <li>
    <button
      :class="`flex items-center justify-center px-3 h-8 leading-tight ${pageClass} rounded mr-1`"
      @click="() => handleClick(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </li>
</template>

<style scoped></style>
