<template>
  <section id="services">
    <div>
      <BaseIntestazione :intestazione="intestazione" />
    </div>


    <div class="grid gap-6 gap-y-14 max-w-6xl mx-auto ">
      <HomeServicesCard v-for="service, i of services" :key="'ser' + i" :service="service" :reverse="i % 2 == 1" />
    </div>

  </section>
</template>


<script setup>

const intestazione = ref({
  title: "Servizi di Parrucchiere di alta qualità",
  name: "Servizi",
  description: "Siamo un salone di bellezza specializzato in servizi di parrucchiere di alta qualità. La nostra esperienza e competenza nel settore ci permettono di offrire una vasta gamma di servizi personalizzati per soddisfare ogni esigenza dei nostri clienti."
})

const services = ref([]);

services.value = [{
  img: {
    src: 'https://source.unsplash.com/random?barber,hair',
    alt: 'hair'
  },
  categoria: 'Uomo',
  title: 'Tagli personalizzati',
  description: 'I nostri parrucchieri esperti sono in grado di creare tagli personalizzati per ogni tipo di capello e di viso. Siamo in grado di offrire tagli moderni, classici e di tendenza, tutti eseguiti con la massima attenzione ai dettagli.',
  price: '14'
},
{
  img: {
    src: 'https://source.unsplash.com/random?barber,2',
    alt: 'hair'
  },
  categoria: 'Uomo',
  title: 'Servizi di Parrucchiere di alta qualità',
  description: 'Siamo un salone di bellezza specializzato in servizi di parrucchiere di alta qualità. La nostra esperienza e competenza nel settore ci permettono di offrire una vasta gamma di servizi personalizzati per soddisfare ogni esigenza dei nostri clienti.',
  price: '15'
},{
  img: {
    src: 'https://source.unsplash.com/random?barber,color',
    alt: 'color'
  },
  categoria: 'Donna',
  title: 'Colorazioni di tendenza',
  description: 'Offriamo una vasta gamma di colorazioni di tendenza per capelli. Dai colori naturali alle sfumature più audaci, i nostri parrucchieri sono in grado di creare il colore perfetto per ogni cliente.',
  price: '32'
}]


</script>