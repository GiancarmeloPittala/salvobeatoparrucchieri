<template>
  <div class="rounded-xl border border-primary-200 dark:border-primary  p-4 sm:p-8 lg:px-6 xl:px-8">
    <div class="flex items-center w-full text-left">
      <div @click="open = !open"
        class=" cursor-pointer transition-colors hover:bg-primary-900 mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-opacity-5 text-gray-50 bg-primary">
        <Icon name="ic:baseline-keyboard-arrow-up" class="w-8 h-8 transition-transform" :class="{ 'rotate-180': open }" />
      </div>
      <div class="w-full">
        <h4 class="text-lg font-semibold " v-text="faq.title"></h4>
      </div>
    </div>
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <div v-if="open" class="pl-[62px]">
        <p class="py-3 text-base leading-relaxed text-body-color" v-html="faq.description"></p>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  faq: {
    type: Object,
    default: () => ({ title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, laborum!' })
  }
})
const open = ref(false)

</script>