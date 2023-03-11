<template>
  <section id="blog" class="flex flex-col justify-center sm:px-6">
    <BaseIntestazione :intestazione="intestazione" />

    <div class="flex flex-wrap -mx-4">
      <div data-aos="fade-right" :data-aos-delay="100 * article" v-for="article of 4" :key="article" class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
        <img src="https://source.unsplash.com/Lki74Jj7H-U/400x300" alt="Card img"
          class="object-cover object-center w-full h-48 rounded-b-none " />
        <div class="flex flex-grow">
          <div class="triangle"></div>
          <div class="shadow-xl flex flex-col justify-between px-4 py-6 rounded-xl rounded-t-none border border-gray-50 text ">
            <div>
              <a href="#"
                class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary hover:text-primary transition-colors">Eventi</a>
              <a href="#" class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-primary transition-colors">
                Corso di formazione
              </a>
              <p class="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet
                cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, explicabo! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Repellat, natus.
              </p>
            </div>
            <div>
              <a href="#"
                class="inline-block pb-1 mt-2 text-base font-black text-primary uppercase border-b border-transparent hover:border-primary transition-colors">Read
                More -></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
const intestazione = ref({
  title: "Le ultime informazioni",
  name: "Blog",
  description: ""
})
</script>

<style>
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #1a202c transparent transparent;
}

.dark .triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #fff transparent transparent;
}
</style>