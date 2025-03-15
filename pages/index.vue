<template>
  <main class="container mx-auto py-8 px-4">
    <!-- T-shirt Image Section -->
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <Thumbnail :source="logo" />
      </div>

      <div class="md:w-1/2">
        <Title>Old Enough To Understand</Title>
        <Description>
          This number signifies a pivotal moment in life,a time when young guys
          transition into adulthood AT 19, many experience profound changes in
          their perspective, relationships,and aspirations.it's an age where
          you're old enough to understand th world around,yet young enough to
          chase dreams fearlessly. This T shirt celebrate that unique blend of
          youthful energy and emerging wisdom
        </Description>
      </div>
    </div>
  </main>
</template>
<script setup>
import logo from "@/assets/img/second/logo.jpeg";
import Navbar from "@/components/Header/NavBar.vue";
import Title from "../components/Text/Title.vue";
import Description from "../components/Text/Description.vue";
import Thumbnail from "../components/Image/Thumbnail.vue";
</script>