<template>
  <div class="grid grid-cols-1 gap-6" id="home">
    <div class="col-span-1">
      <Carousel
        id="carousel"
        class=""
        :value="DetailDatas"
        circular
        style="position: relative"
        :autoplay-interval="3000"
      >
        <template #item="slotProps">
          <div class="font-serif w-full relative">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.photo"
                alt="Hypic"
                class="w-full lg:w-1/3 mx-auto object-fill"
              />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
    
<script setup>
import Carousel from "primevue/carousel";
import DetailDatas from "@/server/detail/first-drop"

</script>
    <style>
    .p-carousel-prev-button,
    .p-carousel-next-button {
        display: none !important;   
        /* font-size: 15rem !important; */
    }
/* .p-carousel-prev-button {
  position: absolute !important;
  background-color: black !important;
  left: 0 !important;
  font-size: 3rem !important;
  z-index: 90;
}

.p-carousel-next-button {
  position: absolute !important;
  right: 0;
  background-color: black !important;
  font-size: 3rem !important;
} */
</style>