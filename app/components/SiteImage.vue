<template>
  <div :class="{'max-h-80': position == 'wide', 
                'overflow-hidden': position == 'wide', 
                'md:w-3/5 md:ml-12 mx-4 my-5': position == 'left',
                'h-[300px] md:ml-[32%] md:pl-18': position == 'right'}">
    <nuxt-img :src="image" alt="photo" v-if="position!='right'"/>
    <nuxt-img :src="image" alt="photo" height=300 v-if="position=='right'"/>
  </div>
  <div v-if="credit" class="text-xs text-right -mt-5 text-white">Photo: {{ credit }}</div>
</template>

<script lang="ts" setup>
type PositionSelector = "wide" | "left" | "right"

defineProps({
  image: {
    type: String,
    required: true
  },
  position: {
    type: String as () => PositionSelector,
    default: "wide"
  },
  credit: {
    type: String,
    required: false
  }
})
</script>

<style>

</style>