<template>
  <div>
    <Nav :class="navColor"></Nav>
    <audio ref="bgMusic" :src="money" autoplay loop></audio>

    <musicModal></musicModal>
    <RouterView />
  </div>
</template>

<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
</script> -->

<script setup>
import { onMounted, ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import money from "@/assets/MoneyWalk.mp3";
import Nav from "./components/nav.vue";
import musicModal from "./components/musicModal.vue";

const bgMusic = ref(null);

const route = useRoute();

const navColor = computed(() => {
  return route.name === "home" ? "white" : "black";
});

onMounted(() => {
  const tryPlay = () => {
    bgMusic.value?.play();
    window.removeEventListener("click", tryPlay);
  };
  window.addEventListener("click", tryPlay);
});
</script>

<style scoped>
.white {
  color: white;
}

.black {
  color: rgba(0, 0, 0, 0.4);
}
</style>
