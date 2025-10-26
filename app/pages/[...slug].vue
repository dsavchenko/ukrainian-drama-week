<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

</script>

<template>
  <div v-if="page">
    <ContentRenderer  :value="page" />
  </div>
</template>

