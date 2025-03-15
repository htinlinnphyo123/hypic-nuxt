<template>
  <div>
    <MarqueeText />
    <Navbar />
    <slot />
  </div>
</template>
<script setup>
import logo from "@/assets/img/logo.png";
import Navbar from "@/components/Header/NavBar.vue";
import MarqueeText from "@/components/Header/MarqueeText.vue";
</script>