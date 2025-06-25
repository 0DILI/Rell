<template>
  <div
    class="fixed inset-0 z-40 backdrop hidden"
    id="music"
    @click.self="closeModal"
  >
    <!-- Popup content -->
    <div class="absolute top-0 left-0 h-full w-64 p-4 z-50">
      <ul>
        <li
          v-for="(song, index) in songList"
          :key="song.title + index"
          class="font-bold text-[22px] text-white pt-3 slide-in"
        >
          <a
            :href="song.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline"
          >
            {{ song.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const songList = ref([
  {
    title: "Money Walk - Single",
    url: "https://music.apple.com/us/album/money-walk/1809138384?i=1809138385",
  },
]);

const closeModal = () => {
  const id = document.getElementById("music");
  id.classList.add("hidden");
};
</script>

<style>
.backdrop {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in {
  animation: slideIn 0.4s ease forwards;
}
</style>
