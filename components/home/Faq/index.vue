<template>
  <section id="faq" class="transition-all">
    <BaseIntestazione :intestazione="intestazione"  />
    <div class="flex flex-wrap transition-all">
      <div class="w-full lg:w-1/2 p-2" v-for="i in 4" :key="i">
        <HomeFaqItem />
      </div>
    </div>
  </section>
</template>

<script setup>
const intestazione = ref({
  title: "Any Questions? Look Here",
  name: "F.A.Q",
  description:  "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
})
</script>