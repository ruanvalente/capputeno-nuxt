import type { ProductType } from '~/types'

export const useFetchProductByCategory = async (category: string) => {
  const nuxtApp = useNuxtApp()
  const { data, error, pending } = await useAsyncData<ProductType[]>(
    `${category}`,
    () => $fetch(`https://fakestoreapi.com/products/category/${category}`),
    {
      getCachedData(key) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    }
  )
  return { data, error, pending }
}
