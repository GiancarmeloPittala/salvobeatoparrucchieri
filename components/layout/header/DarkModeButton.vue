<template>
  <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-900  " @click="dark = !dark">
    <Icon class="w-[24px] h-[24px] text-yellow-500" v-if="!dark" name="material-symbols:sunny-rounded" />
    <Icon class="w-[24px] h-[24px]" v-else name="ri:moon-line" />
  </button>
</template>


<script setup>
const dark = useState('darkMode', () => false)

watch(dark, () => {

})
</script>