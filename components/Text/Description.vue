<template>
  <p class="text-gray-700 mb-4 leading-8 animate-fade-in">
    <slot />
  </p>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 2s ease-in-out;
}
</style>