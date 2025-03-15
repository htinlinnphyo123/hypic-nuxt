<template>
  <main class="container mx-auto py-8 px-4">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <Thumbnail :source="thumbnail" />
      </div>

      <div class="md:w-1/2">
        <Title>Recycle Tea</Title>
        <Description>
          The life style you ordered is currently out of stock© <br>
          Thank millions for all supporter.‼️ <br>
          <b>Product Details</b> <br>  
          Size- M- L ( available ) <br>
          Colour -Black Tone <br> 
          Cutting line-Crop Boxy <br>
          Farbric -270GSM <br> 
          Price- 65000mmk , 600Bath <br>
            Stock control-(40/40)‼️ <br>
            <b>HYPIC</b> is not just a
          Brand ; it's a lifestyle. <br> Our first collections features a selection of
          garments made from 270gsm heavyweight cotton. <br>We utilize high quality
          screen printing . <br>Versatile sizing Available in sizes M and L ;our
          boxy line tee is designed for to fit your lifestyle effortlessly.
        </Description>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import thumbnail from "@/assets/img/first/first-drop.jpg";
import Title from "@/components/Text/Title.vue";
import Description from "../components/Text/Description.vue";
import Thumbnail from "../components/Image/Thumbnail.vue";

useHead({
  meta: [
    {
      property: 'og:image',
      content: thumbnail
    },
    {
      property: 'og:title',
      content: 'Recycle Tea - Hypic'
    },
    {
      property: 'og:description',
      content: 'Discover our Recycle Tea collection, featuring garments made from 270gsm heavyweight cotton.'
    }
  ]
})
</script>