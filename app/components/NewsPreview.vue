<script lang="ts" setup>

const { data: news } = await useAsyncData('news', async () => {
  return queryCollection("news").all()
})

</script>

<template>
  <h2 class="text-right md:text-left pr-4 md:ml-[30%] font-bold text-2xl md:text-3xl uppercase mb-10">Actualités</h2>
  <div v-for="item in news" class="flex flex-col md:flex-row mb-10 mx-4 md:mx-0">
    <div class="md:mx-12 md:w-2/5 md:min-w-2/5 mb-5 md:mb-0">
    <nuxt-img :src="item.image" alt="photo"/>
    </div>
    <div class="flex flex-col pr-10">
      <h3 class="uppercase font-bold text-xl md:text-2xl mb-7">{{ item.title }}</h3>
      <h4 class="font-semibold text-lg md:text-xl mb-7">{{ item.subtitle }}</h4>
      <ContentRenderer :value="item" excerpt />
      <UModal :title="item.title"  :ui="{ content: 'md:max-w-4/5 lg:max-w-3/5' }" >
        <a class="text-viola mt-auto cursor-pointer italic font-semibold hover:underline">En savoir plus →</a>
        <template #body>
            <ContentRenderer :value="item" />
        </template>
      </UModal>
    </div>
  </div>
</template>

<style>
@reference "../assets/css/main.css";

p {
  @apply md:mb-4 mb-2;
}
</style>