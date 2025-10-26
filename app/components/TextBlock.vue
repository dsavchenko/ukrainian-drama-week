<template>
  <div class="flex flex-col md:flex-row mx-4 md:mx-12 mt-10 scroll-mt-20" :id="anchor">
    <div class="flex-col md:min-w-1/3 md:w-1/3" :class="{'hidden': fullwide}">
      <h2 v-if="title" class="font-bold text-3xl md:text-4xl uppercase mb-2 md:mb-10">{{ title }}</h2>
      <h3 v-if="$slots.subtitle" class="font-semibold text-xl md:text-2xl md:pr-5 mb-5"><slot name="subtitle" /></h3>
    </div>
    <div class="textblock" :class="{'md:pl-10': !fullwide}">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  fullwide: {
    type: Boolean,
    default: false
  },
  anchor: {
    type: String,
    required: false
  }
})
</script>

<style>
@reference "../assets/css/main.css";

.textblock p {
  @apply md:mb-10 mb-4;
}
</style>