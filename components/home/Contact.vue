<template>
  <section id="contact" class="">
    <BaseIntestazione :intestazione="intestazione" />
    <div class="my-4 ">

      <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-xl shadow-2xl">

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input class="w-full mt-2 p-3 rounded-lg " type="text" placeholder="First Name*" />
          <input class="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text"
            placeholder="Last Name*" />
          <input class="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email"
            placeholder="Email*" />
          <input class="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="number"
            placeholder="Phone*" />
        </div>
        <div class="my-4">
          <textarea placeholder="Message*"
            class="w-full h-32 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="my-2 w-1/2 lg:w-1/4">
          <button class="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full 
                                  focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>

      <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-primary rounded-xl">
        <div class="flex flex-col text-white">
          <div class="flex gap-4 items-center mb-4">
            <Icon name="ic:twotone-home-work" class="w-6 h-6" />
            <h2 class="text-2xl">Orari</h2>
          </div>

          <div class="grid gap-2">
            <div class="flex justify-between">
              <span>Lunedi</span>
              <span>Chiuso</span>
            </div>
            <div class="flex justify-between">
              <span>Mar - Ven</span>
              <span>08:30 - 12:30 <br /> 15:30 - 20:00</span>
            </div>
            <div class="flex justify-between">
              <span>Sabato</span>
              <span>08:30 - 20:00</span>
            </div>
            <div class="flex justify-between">
              <span>Domenica</span>
              <span>Chiuso</span>
            </div>
          </div>

          <div class="grid gap-4 my-4 ">
            <div class="flex gap-4 items-center">
              <Icon name="ic:round-home-work" class="w-6 h-6" />
              <h2 class="text-2xl">Salone</h2>
            </div>
            <div>
              <p class="">Via Giovanni Boccaccio, 104/C - 95047 Paternò (CT)</p>
            </div>
          </div>

          <div class="grid gap-4 my-4 w-2/3 lg:w-1/2">
            <div class="flex gap-4 items-center">
              <Icon name="ic:outline-local-phone" class="w-6 h-6" />
              <h2 class="text-2xl">Contatti</h2>
            </div>
            <div>
              <p class="">Tel: <a href="tel:+39 340 5996490">+39 340 5996490</a></p>
              <p class="mt-2">Email: <a href="mailto:salvobeato@hotmail.it">salvobeato@hotmail.it</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-full min-h-[600px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" frameborder="0" title="map" marginheight="0" marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2964359144808!2d14.904309915311824!3d37.57163677979705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131150e308e22149%3A0x70d90b827bee300e!2sVia%20G.%20Boccaccio%2C%20104C%2C%2095047%20Patern%C3%B2%20CT!5e0!3m2!1sit!2sit!4v1678464925351!5m2!1sit!2sit"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Informazioni</h2>
          <p class="mt-1">Via Giovanni Boccaccio, 104/C - 95047 Paternò (CT)</p>
          <p class="mt-1">P.I. 04921890879</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a href="mailto:salvobeato@hotmail.it">salvobeato@hotmail.it</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Telefono</h2>
          <a href="tel:+39 340 5996490">+39 340 5996490</a>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const intestazione = ref({
  title: "Hai delle domande?",
  name: "Contatti",
  description: "Siamo sempre felici di rispondere alle vostre domande e di fornire assistenza personalizzata. Se desiderate prenotare un appuntamento, richiedere informazioni sui nostri servizi o semplicemente lasciare un feedback, non esitate a contattarci."
})

</script>