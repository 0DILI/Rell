<template>
  <div
    class="fixed inset-0 z-40 backdrop hidden"
    id="music"
    @click.self="closeModal"
  >
    <!-- Popup content -->
    <div class="absolute top-0 left-0 h-full w-64 p-4 z-50">
      <transition-group name="fade-left" tag="ul">
        <ul>
          <transition-group name="fade-left" tag="div">
            <li
              v-for="(song, index) in songList"
              :key="index"
              class="font-bold text-[22px] text-white pt-3"
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
          </transition-group>
        </ul>
      </transition-group>
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

.fade-left-enter-active {
  transition: all 0.5s ease;
}
.fade-left-leave-active {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-10px);
}
.fade-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
