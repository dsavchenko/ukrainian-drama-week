<template>
  <div class="px-2 md:px-20 pt-10 m-3 border-4 border-viola flex flex-col flex-1">
    <h2 class="text-xl md:text-3xl font-bold md:mb-10">{{ title }}</h2>
    <div class="flex flex-col md:flex-row">
      <p class="italic font-semibold md:mr-30 pb-5">{{ title_orig }}</p>
      <p class="pb-5 px-20 md:px-5">{{ description }}</p>
    </div>
    <div class="flex-grow"></div>
    <div class="cardblock">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  title_orig: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style>
@reference "../assets/css/main.css";

.cardblock p {
  @apply mb-5
}
</style>