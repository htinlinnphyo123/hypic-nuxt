<template>
  <div class="grid grid-cols-1 gap-6" id="home">
    <div class="col-span-1">
      <Carousel
        id="carousel"
        class=""
        :value="data"
        circular
        style="position: relative"
        :autoplay-interval="1000"
      >
        <template #item="slotProps">
          <div class="font-serif w-full relative">
            <div class="relative mx-auto">
              <img
                v-on:load="imgLoaded(slotProps.data.id)"
                :src="getImageSource(slotProps.data.id, slotProps.data.photo)"
                alt="Hypic"
                class="w-full h-[250px] sm:h-[400px] md:h-[500px] xl:h-[870px] mx-auto object-fill"
              />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
  
  <script setup>
import { defineProps, ref } from "vue";
import Carousel from "primevue/carousel";
import placeHolder from "@/assets/img/place_holder.webp";
const imgLoading = ref({});

const imgLoaded = (id) => {
  imgLoading.value[id] = false;
};

const getImageSource = (id, thumbnail) => {
  return imgLoading.value[id] === false ? thumbnail : placeHolder;
};

const props = defineProps({
  data: Array,
});
props.data.forEach((datum) => {
  imgLoading.value[datum.id] = true;
});
</script>
  <style>
.p-carousel-prev-button {
  position: absolute !important;
  background-color: #fca503 !important;
  left: 0 !important;
  font-size: 3rem !important;
  z-index: 90;
  border-radius: 20px !important;
  /* padding: 0 0.5rem !important; */
}

.p-carousel-next-button {
  position: absolute !important;
  background-color: #fca503 !important;
  font-size: 3rem !important;
  right: 0 !important;
  border-radius: 20px !important;
}
</style>