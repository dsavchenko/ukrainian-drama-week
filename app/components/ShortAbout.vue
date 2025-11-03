<template>
  <Separator class="-mb-7 md:-mb-12 flex justify-end"/>
  <div class="pt-20 bg-viola/31 pb-16 md:pb-28 px-4 md:px-0">
    <h2 class="md:ml-[30%] text-right md:text-left font-bold text-2xl md:text-3xl uppercase mb-10">
      À propos
    </h2>
    <div class="flex flex-col md:flex-row">
      <div class="md:mx-12 md:w-2/5 md:min-w-2/5 my-5">
        <nuxt-img :src="image" alt="photo" />
      </div>
      <div class="flex flex-col pr-10">
        <h3 class="uppercase font-bold text-xl md:text-2xl mb-7">
          <slot name="subtitle"/>
        </h3>
        <div>
          <slot name="description"/>
        </div>
        <nuxt-link class="font-semibold italic mt-3 md:mt-auto hover:underline" to="about">En savoir plus →</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    required: true,
    default: 'placeholder.png'
  }
})
</script>

<style>

</style>