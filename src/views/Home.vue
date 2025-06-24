<template>
  <section
    class="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('../assets/Homepage.png')]"
  >
    <!-- Full screen image with proper scaling -->
    <!-- <img
        src="./assets/Homepage.png"
        class="w-full custom-full-heigh object-cover aspect-[16/9]"
      /> -->

    <!-- Navigation -->

    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="absolute top-20 right-4 bg-black bg-opacity-80 text-white p-4 rounded-md space-y-2 text-[18px] font-bold hidden md:hidden z-20"
    >
      <a href="#" class="block hover:text-[#fbddfe]">About</a>
      <a href="#" class="block hover:text-[#fbddfe]">Services</a>
      <a href="#" class="block hover:text-[#fbddfe]">Portfolio</a>
      <a href="#" class="block hover:text-[#fbddfe]">Music</a>
    </div>
  </section>
</template>

<script setup>
import Nav from "@/components/nav.vue";

// import { RouterLink, RouterView } from "vue-router";
</script>
