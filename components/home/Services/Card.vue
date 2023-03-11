<template>
  <div
    class="relative flex flex-col  space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 border border-white bg-white" :class="{'md:flex-row': !reverse, 'md:flex-row-reverse': reverse}">
    <div class="w-full md:w-1/3 bg-white grid place-items-center" :class="{'pl-5': reverse, 'md:pr-5': !reverse}">
      <img :src="service.img.src" :alt="service.img.alt" class="rounded-xl h-full w-full max-h-[300px] object-cover" />
    </div>
    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3" :class="{'lg:text-right': reverse}">
      <div class="flex justify-end item-center">
        <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
          {{ service.categoria }}  
        </div> 
      </div>
      <h3 class="font-black text-gray-800 md:text-3xl text-xl">{{ service.title }}</h3>
      <p class="md:text-lg text-gray-500 text-base">{{ service.description }}</p>
      <p class="text-xl font-black text-gray-800">
        €{{  service.price }}
      </p>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  reverse: {
    type: Boolean,
    deafaul: () => false
  },
  service: {
    type: Object,
    required: false,
    default: () => ({
      img: {
        src: 'https://source.unsplash.com/random?barber,hair',
        alt: ''
      },
      categoria: 'Uomo',
      title: 'Taglio Capelli',
      description: '',
      prezzo: ''
    })
  }
})
</script>