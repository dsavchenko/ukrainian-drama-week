<template>
  <UCarousel
    v-slot="{ item }"
    :items="imagesm"
    loop
    arrows
    prev-icon="i-lucide-chevron-left"
    next-icon="i-lucide-chevron-right"
    :next="{variant: 'ghost', size: 'xl', color: 'neutral'}"
    :prev="{variant: 'ghost', size: 'xl', color: 'neutral'}"
    :ui="{ 
      item: 'basis-4/5 md:basis-1/4',
      controls: 'absolute top-1/2 inset-x-14',
      dot: 'w-7 h-1',
      }"
  >
    <nuxt-img :src="item" width=442 height=300 />
  </UCarousel>
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[],
}>()

let imagesm = [...props.images]

while ( imagesm.length < 5 ) {
  imagesm = imagesm.concat(imagesm)
}
</script>

<style>

</style>