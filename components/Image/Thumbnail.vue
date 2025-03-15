<template>
    <img 
        :src="source" 
        alt="Hypic" 
        class="w-full rounded-lg shadow-xl cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-101 animate-fade-in" 
    />
</template>

<script setup>
    const props = defineProps({
        source: {
            type: String,
            required: true,
        },
    })
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>