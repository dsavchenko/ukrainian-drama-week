<template>
  <div class="min-h-screen flex flex-col bg-beige text-gray-900 lg:text-lg">
    <!-- Header -->
    <AppHeader />

    <!-- Main -->
    <main class="mx-auto pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
