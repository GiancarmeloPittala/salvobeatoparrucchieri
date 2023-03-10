<template>
  <!-- This is an example component -->
  <div class="h-screen w-screen bg-gray-100 flex items-center">
    <div class="container flex items-center justify-center px-5 text-gray-700">
      <div class="max-w-md">
        <div class="text-5xl font-dark font-bold">{{error.statusCode}}</div>
        <p class="text-2xl md:text-3xl font-light leading-normal">{{ error.message }} </p>
        <p class="mb-8" v-html="error.stack"></p>
        <BaseButton color="green" @click="$router.push('/')">back to homepage</BaseButton>
      </div>
  </div>
</div></template>



<script setup>
const props = defineProps({
  error: Object
})
</script>