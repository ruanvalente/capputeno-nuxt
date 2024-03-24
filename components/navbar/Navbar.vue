<script setup lang="ts">
import { MENU_OPTIONS } from '~/constants/components/navbar/menu-options'

const route = useRoute()
const isActive = (href: string) => {
  return route.path === href
}
</script>

<template>
  <nav class="w-full flex items-center gap-10 px-60 py-8">
    <div v-for="(item, index) in MENU_OPTIONS" :key="item.pathName">
      <NuxtLink :href="item.pathName">
        <span
          :class="[
            'text-base uppercase text-gray-500 transition-all',
            {
              'text-gray-900 border-b-4 border-orange-400': isActive(
                item.pathName
              )
            }
          ]"
        >
          {{ item.label }}
        </span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped></style>
