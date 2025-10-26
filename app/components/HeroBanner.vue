<template>
  <div class="w-full mb-10 md:mb-20">
    <nuxt-img 
      :src="src" 
      :alt="alt" 
      class="w-full h-64 md:h-[700px] object-cover object-center" 
    />
  </div>
</template>

<script setup>
defineProps({ src: String, alt: String })
</script>
