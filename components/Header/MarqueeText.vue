<template>
  <div class="bg-black text-white py-2 overflow-hidden">
    <div class="animate-marquee whitespace-nowrap tracking-wider flex items-center gap-4">
      <img :src="smlogo" alt="Hypic" class="w-6 h-8" /> 
      New Collection Launch on March 29th! Stay Tuned For More Updates
    </div>
  </div>
</template>
<script setup>
  import smlogo from "@/assets/img/logo/sm-icon.jpg"
</script>
<style scoped>
.animate-marquee {
  animation: marquee 15s linear infinite;
}
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-80%);
  }
}
</style>