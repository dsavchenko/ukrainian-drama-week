<template>
  <div class="md:mx-8 md:grid md:grid-cols-2 md:gap-8 mb-8 md:items-stretch">
    <div class="flex flex-col">
      <slot name="col1"/>
    </div>
    <div class="flex flex-col">
      <slot name="col2"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>