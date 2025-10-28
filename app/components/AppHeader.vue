<template>
  <header class="fixed left-0 top-0 w-dvw md:w-full z-50 bg-beige md:text-sm lg:text-xl font-semibold">
    <nav class="mx-auto flex items-center justify-between px-4 lg:px-12 align-middle h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2 md:mr-6 lg:mr-18">
        <nuxt-img src="logo.png" alt="Festival Logo" class="h-10" />
      </NuxtLink>

      <!-- Desktop Menu: Left -->
      <ul class="hidden md:flex md:space-x-4 lg:space-x-6">
        <li v-for="item in items" :key="item" class="relative group py-4">
          <NuxtLink :to="item.to" v-if="item.to"
            :class="{'text-viola': route.path == item.to}"
          >{{ item.label }}</NuxtLink>
          <span v-if="!item.to" :class="{'text-viola': item.children?.some(x => x.to == route.path)}">{{ item.label }}</span>
          <ul 
            v-if="item.children"
            class="absolute -left-4 mt-4 hidden w-36 bg-beige shadow-xl group-hover:block"
          >
            <li v-for="child in item.children"
                :key="child.label" 
                class="py-5 px-1"
                :class="{'text-viola': child.to == route.path}">
              <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Desktop Menu: Right -->
      <ul class="hidden md:flex space-x-6 ml-auto py-4">
        <li><NuxtLink 
          to="https://www.helloasso.com/associations/cie-air/formulaires/1"
          target="_blank">
            Soutenir
        </NuxtLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen" 
        class="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          :class="[
            'w-6 h-0.5 bg-viola transition-all duration-300',
            isOpen ? 'rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 bg-viola transition-all duration-300',
            isOpen ? 'opacity-0' : ''
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 bg-viola transition-all duration-300',
            isOpen ? '-rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="md:hidden bg-white shadow-lg absolute w-full left-0 top-20 z-50"
      >
        <ul class="flex flex-col space-y-4 py-6 px-6 font-medium">
          <li v-for="item in items">
            <NuxtLink :to="item.to" @click="isOpen=false" v-if="item.to">{{ item.label }}</NuxtLink>
            <span v-if="!item.to">{{ item.label }}</span>
            <ul v-if="item.children" class="flex flex-col space-y-2 py-2">
              <li v-for="child in item.children" class="ml-6">
                <NuxtLink :to="child.to" @click="isOpen=false">{{ child.label }}</NuxtLink>
              </li>
            </ul>
          </li>
        
          <!-- <li class="ml-auto"><NuxtLink to="/reserver" @click="isOpen=false">Réserver</NuxtLink></li> -->
          <li class="ml-auto">
            <NuxtLink 
              to="https://www.helloasso.com/associations/cie-air/formulaires/1" 
              target="_blank"
              @click="isOpen=false">
                Soutenir
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
const isOpen = ref(false)
const route = useRoute()

const items = ref([
  {
    label: "Le Festival",
    to: "/about"
  }, 
  {
    label: "Édition 2027",
    to: "/season-2027"
  },
  {
    label: "Archives",
    children: [
      {
        label: "Édition 2023",
        to: "/season-2023" 
      },
      {
        label: "Édition 2024",
        to: "/season-2024"
      }
    ]
  },
  {
    label: "Rejoignez-nous",
    to: "/join"
  }
])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
