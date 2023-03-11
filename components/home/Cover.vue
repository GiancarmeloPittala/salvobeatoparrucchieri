<template>
  <section id="cover" class="relative flex flex-col-reverse lg:flex-col">
    <div
    data-aos="fade-left" data-aos-delay="400"
      class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
      <svg class="absolute left-0 hidden h-full text-white dark:text-black transform -translate-x-1/2 lg:block" viewBox="0 0 100 100"
        fill="currentColor" preserveAspectRatio="none slice">
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>
      <img  class="w-full h-56 shadow-lg lg:shadow-none md:h-96 lg:h-full"
        src="https://source.unsplash.com/1Pmp9uxK8X8"
        alt="" />
    </div>
    <div class="relative flex flex-col items-start w-full max-w-xl mx-auto md:px-0 lg:container">
      <div class="mb-20 lg:my-24 lg:max-w-lg lg:pr-5">
        <p
          data-aos="fade-right"
          class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary dark:text-secondary uppercase rounded-full bg-primary-200">
           Top barber
        </p>
        <h1 data-aos="fade-right" data-aos-delay="100" class="mb-5 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
          <span>
            Salvo Beato<br class="hidden md:block" />
          </span>
          <span class="mt-4">
            Moda & Stile Parrucchieri a 
          </span>
          <span class="inline-block text-primary dark:text-secondary">Paternò</span>
        </h1>
        <span data-aos-delay="200" data-aos="fade-right" class="block pr-5 mb-5 text-base md:text-lg">
          Benvenuti sul mio sito professionale! Sono appassionati del mio lavoro e mi impegno ogni giorno per offrire il miglior servizio possibile. 
        </span>
        <div data-aos="fade-right" data-aos-delay="300" class="flex items-center gap-2">
          <BaseButton color="red">
            <BaseLink :link="link_1" />
          </BaseButton>
          <BaseButton color="red">
            <BaseLink :link="link_2" />
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const link_1 = reactive({
  to: { path: '/', hash: '#contact'},
  text: 'Contatti'
})

const link_2 = reactive({
  to: { path: '/', hash: '#contact'},
  text: 'Prenota ora'
})
</script>