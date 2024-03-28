<script setup lang="ts"></script>

<template>
  <div
    class="flex items-center w-full h-[80px] bg-white px-4 py-2 header lg:px-60"
  >
    <div class="w-full flex justify-between">
      <h2 class="text-2xl lg:text-4xl header__title text-gray-600">
        capputeno
      </h2>
      <div class="flex justify-end items-center gap-4 md:gap-10 relative">
        <input
          class="w-3/4 truncate lg:w-[325px] bg-gray-100 px-4 py-2 border-gray-50 border-[1px] rounded outline-slate-500 transition-all"
          placeholder="Procura por algo especial?"
        />
        <span
          class="hidden lg:inline-block absolute top-3 bottom-0 right-[80px]"
        >
          <i class="pi pi-search text-gray-500 text-base"></i>
        </span>
        <div class="flex items-center flex-col relative cursor-pointer">
          <i class="pi pi-shopping-bag text-gray-500 text-base"></i>
          <span
            class="flex justify-center items-center w-[17px] h-[17px] absolute top-[16px] right-[-6px] rounded-full bg-red-500 text-white text-[10px]"
          >
            2
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__title {
    font-family: 'Saira Stencil One', sans-serif;
  }
}
</style>
