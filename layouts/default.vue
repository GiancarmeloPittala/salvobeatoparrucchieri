<template>
  <div :class="{'dark': darkMode}">
    <LayoutHeader />
    <main class="dark:text-gray-50 dark:bg-black text-gray-900">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>


<script setup>

const { locale } = useI18n()
const darkMode = useState('darkMode', () => false)

useHead({
  htmlAttrs: {
    lang: locale
  }
})



</script>