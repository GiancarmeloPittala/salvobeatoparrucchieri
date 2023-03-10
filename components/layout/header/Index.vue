<template>
  <header class="dark:text-gray-50 dark:bg-black text-gray-900 ">
    <nav class="container mx-auto px-4 xl:px-8 relative py-4 flex justify-between items-center ">
      <a @click="open = !open" class="text-3xl font-bold leading-none" href="#">
        <img class="h-10" src="/images/logo-bianco-261w.webp" alt="Logo">
      </a>
      <div class="lg:hidden">
        <button @click="open = !open" class="navbar-burger items-center text-primary dark:text-secondary p-3">
          <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">

        <li @click="current_link = link.text" v-for="link, i of links" :key="link.to.path" class="flex items-center gap-2">
        <span >
          <BaseLink :link="link" class="text-sm" :class="{
            'text-primary dark:text-secondary font-bold': current_link == link.text,
            'text-gray-400 hover:text-gray-500': current_link != link.text
          }">
            {{ link.text }}
          </BaseLink>
        </span>
        <!-- <span v-if="i != links.length - 1" class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </span> -->
        </li>
  
      </ul>
      <span class="hidden lg:inline-block lg:ml-auto py-2">
        <LayoutHeaderDarkModeButton />
      </span>
      <span class="hidden lg:inline-block py-2 pl-6">
        <LayoutHeaderLangSwitcher />
      </span>
    </nav>

    <div v-if="open" class="navbar-menu relative z-50">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav @mouseleave="open = false"
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 dark:text-gray-50 bg-gray-50 dark:bg-black text-gray-900 overflow-y-auto">
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <img class="h-12" src="/images/logo-bianco-261w.webp" alt="Logo">
          </a>
          <button @click="open = false" class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1" v-for="link of links" :key="link.text">
              <BaseLink @click="open = false" :link="link" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary-100 hover:text-primary dark:text-secondary-600
                      rounded-xl dark:hover:text-gray-200 hover:dark:bg-primary-300">
                {{ link.text }}
              </BaseLink>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <span
              class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none border-primary border  hover:bg-gray-100 dark:hover:bg-transparent rounded-xl">
              <LayoutHeaderDarkModeButton />
            </span>
            <span
              class="px-4 py-3 mb-2 flex justify-center leading-loose text-xs text-center text-white font-semibold bg-primary hover:bg-primary-900  rounded-xl"
              href="#">
              <LayoutHeaderLangSwitcher />
            </span>
          </div>
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Copyright © {{ new Date().getFullYear() }}</span>
          </p>
        </div>
      </nav>
    </div>

  </header>
</template>

<style>
.open {
  display: block;
}
</style>
<script setup>
const open = ref(false)
const links = ref([
  {
    to: { path: '/', hash: '#whoami' },
    text: 'Chi sono'
  },
  {
    to: { path: '/', hash: '#services' },
    text: 'Servizi'
  },
  {
    to: { path: '/', hash: '#contact' },
    text: 'Contatti'
  }
])

const current_link = ref('')
</script>