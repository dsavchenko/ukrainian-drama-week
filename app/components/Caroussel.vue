<template>
  <UCarousel
    v-slot="{ item }"
    loop
    dots
    :items="images"
    :ui="{ 
      item: 'basis-4/5 md:basis-1/4',
      dot: 'w-7 h-1'
      }"
  >
    <nuxt-img :src="item" width=442 height=300 />
  </UCarousel>
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[],
}>()
</script>

<style>

</style>