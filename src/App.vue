<template>
  <div class="app">
    <Nav style="color: black"></Nav>
    <audio src="./assets/moneywalk.mp3" autoplay loop ref="bgMusic"></audio>
    <RouterView />
  </div>
</template>

<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
</script> -->

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/nav.vue";

const bgMusic = ref(null);

onMounted(() => {
  if (bgMusic.value) {
    // Try autoplay
    bgMusic.value.play().catch(() => {
      // If autoplay fails, play on first user interaction
      const resume = () => {
        bgMusic.value.play();
        document.removeEventListener("click", resume);
      };
      document.addEventListener("click", resume);
    });
  }
});
</script>

<style scoped>
.app {
  background-color: red;
}
</style>
