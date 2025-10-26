<template>
  <div class="flex flex-col md:flex-row p-4 md:p-0 md:mx-12 mt-10 bg-viola md:bg-beige">
    <div class="min-w-2/6 w-2/6">
      <h2 class="font-bold text-4xl uppercase mb-10">Presse</h2>
    </div>
    <div class="flex flex-col md:flex-row md:min-w-4/6 md:w-4/6 justify-between">
      <div v-for="col in cols"
           :key="col"
           class="md:pl-10 presslinks"
           :class="{'text-right': col != 'col1'}"
      >
        <slot :name="col" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const slots = useSlots()
const cols = computed(() =>
  Object.keys(slots).filter(key => key.startsWith('col'))
)
</script>

<style>
@reference "../assets/css/main.css";

.presslinks p {
  @apply mb-10;
}

.presslinks a {
  @apply md:text-green-500 before:content-['['] after:content-[']']
}
</style>