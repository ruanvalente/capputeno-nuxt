<script setup lang="ts"></script>

<template>
  <div class="flex items-center w-full h-[80px] bg-white px-60 py-2 header">
    <div class="w-full flex justify-between">
      <h2 class="header__title text-4xl text-gray-600">capputeno</h2>
      <div class="flex justify-center items-center gap-10 relative">
        <input
          class="w-[325px] bg-gray-100 px-4 py-2 border-gray-50 border-[1px] rounded outline-slate-500 transition-all"
          placeholder="Procura por algo especial?"
        />
        <i
          class="pi pi-search absolute top-3 ottom-0 right-[80px] text-gray-500 text-base"
        ></i>

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
