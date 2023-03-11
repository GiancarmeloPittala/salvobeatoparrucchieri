<template>
  <button v-bind="{ ...$attrs }" 
    class="rounded-lg px-4 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium  transition-colors"
    :class="color_style[color]">
      <slot />
  </button>
</template>



<script setup>
const props = defineProps({
  color: {
    typeof: String,
    default: 'primary'
  }
})

const color_style = ref({
  primary: 'border-primary hover:bg-primary hover:text-gray-50 text-primary',
  green: 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-gray-50',
  blue: 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-gray-50',
  white: 'border-gray-50 hover:bg-gray-50 hover:text-gray-900',
  red: 'dark:border-gray-50 dark:text-gray-50 hover:dark:bg-transparent border-primary text-primary  hover:bg-primary hover:text-gray-50 dark:hover:text-primary dark:hover:bg-gray-50',
})
</script>