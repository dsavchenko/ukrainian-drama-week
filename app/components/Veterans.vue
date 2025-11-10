<template>
  <div class="bg-viola/32 mb-20 mt-20 pb-16 flex flex-col">
    <!-- <SiteImage image="theatre_veteran.png" position="left" 
               class="md:mb-10 order-last md:order-first"/>
    <TextBlock title="Le Théâtre des Vétérans">
      <slot />
    </TextBlock> -->
    <slot />
  </div>
  <Separator class="flex justify-end md:-mt-32 -mt-27" />
</template>

<script lang="ts" setup>

</script>

<style>

</style>