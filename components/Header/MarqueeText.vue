<template>
  <div class="bg-black text-white py-2 overflow-hidden">
    <div class="animate-marquee whitespace-nowrap tracking-wider">
      🎉 New Collection Launch on March 29th! Stay Tuned For More Updates
    </div>
  </div>
</template>
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