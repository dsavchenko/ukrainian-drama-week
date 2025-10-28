<template>
  <footer class="bg-beige">
    <div class="h-10 sm:h-16 lg:h-24" :class="mtclass">
      <nuxt-img
        src="separator-wide.png" 
        class="h-full mx-auto hidden md:block"
      />
      <nuxt-img
        src="separator-wide-crop.png" 
        class="h-full mx-auto md:hidden"
      />
    </div>
    <div class="mx-auto px-6 py-12 flex flex-col md:flex-row text-center md:text-left justify-between items-center space-y-6 md:space-y-0 text-base">
      
      <div class="flex-col space-y-4">
        <p class="uppercase">Semaine de la dramaturgie ukrainienne</p>
        <p><nuxt-link to="/join#contact" class="uppercase">Contact</nuxt-link></p>
      </div>

      <div class="flex-col space-y-4">
        <p><a href="#" class="uppercase">Instagram</a></p>
        <p><a href="#" class="uppercase">YouTube</a></p>
      </div>

      <div class="flex-col space-y-4">
        <p><a href="#" class="uppercase">Soutenir la creation</a></p>
        <p> </p>
      </div>

      <div class="flex space-x-2">
        <div class="flex-col space-y-4">
          <p> </p>
          <p class="uppercase">Le festival est produit par</p>
        </div>

        <div>
          <a href="https://www.helloasso.com/associations/cie-air" target="_blank">
            <nuxt-img src='air-logo.png' class="h-20"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const route = useRoute()

const mtclass = computed( () => {
  return route.path == '/' ? '-mt-6 md:-mt-12' : 'mt-10'
  } )
</script>
