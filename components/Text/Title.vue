<template>
  <h2 class="text-3xl font-bold text-gray-600 mb-4 animate-slide-in">
    <slot />
  </h2>
</template>

<style>
@keyframes slideIn {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slideIn 1s ease-out;
}
</style>