<template>
  <section id="gallery">
    <div class="w-full">
      <BaseIntestazione :intestazione="intestazione"  />
    </div>
    <div class="gallery">
      <div class="gallery__column w-1/2 md:w-1/4" v-for="images,i of gallery_cols" :key="'gallery_col' + i">
        <a data-aos="fade-bottom"  :data-aos-delay="10 * j"  v-for="image,j of images" :key="'image' + j" href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img :src="image.src" :alt="image.alt"
              class="gallery__image" :class="{ 
                'h-[300px]': j + i % 2 === 0 , 
                'h-[350px] md:h-[500px]': (j + i % 2 !== 0 ) }">
            <figcaption class="gallery__caption" v-text="image.text"></figcaption>
          </figure>
        </a>
      </div>
    </div>
  </section>
</template>



<script setup>
const images = ref([]);
const intestazione = ref({
  title: "I miei ultimi lavori",
  name: "Galleria",
  description:  "Benvenuti nella galleria fotografica del nostro salone di bellezza! Qui potrete trovare una selezione di foto che illustrano il nostro lavoro, dalla creazione di acconciature per matrimoni fino alla cura dei capelli di tutti i giorni."
})
for (let i = 0; i < 16; i++) {
  images.value.push({
    src: "https://source.unsplash.com/random?barber," + i,
    alt: "alter " + i,
    text: "testo" + i
  })
}


const gallery_cols = reactive([[], [], [], []])

for (const [i, img] of images.value.entries())
  gallery_cols[i % 4].push(img)



</script>

<style>
.gallery {
  display: flex;
  padding: 2px;
  flex-wrap: wrap;
  transition: 0.3s;
}

.gallery:hover .gallery__image {
  filter: grayscale(1);
}

.gallery__column {
  display: flex;
  flex-direction: column;
  
}
.gallery .gallery__column:nth-child(2) .gallery__link:last-child,
.gallery .gallery__column:nth-child(4) .gallery__link:last-child {
  height: 300px;
}

.gallery__link {
  margin: 2px;
  overflow: hidden;
}

.gallery__link:hover .gallery__image {
  filter: grayscale(0);
}

.gallery__link:hover .gallery__caption {
  opacity: 1;
}

.gallery__thumb {
  position: relative;
}

.gallery__image {
  display: block;
  width: 100%;
  transition: 0.3s;
}

.gallery__image:hover {
  transform: scale(1.1);
}

.gallery__caption {
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px 15px 15px;
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: white;
  opacity: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, .2) 100%);
  transition: 0.3s;
}</style>

<script setup>



</script>