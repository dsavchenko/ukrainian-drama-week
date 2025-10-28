<template>
  <p class="text-xl">
    {{ name }}<br/>
    <a :href="mailto">{{ email }}</a>
  </p>
  <!-- TODO bot protection -->
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string,
  email: string
}>()
const mailto = computed(() => {return 'mailto:' + props.email})
</script>

<style>

</style>