<template>
  <nav
    class="absolute top-4 left-0 right-0 px-6 flex items-center md:gap-[200px] gap-0 max-[768px]:justify-between text-black z-10"
  >
    <!-- Left: Nav Links -->
    <ul class="hidden md:flex text-[18px] font-bold gap-6 items-center">
      <li class="hover:text-[#000] cursor-pointer">
        <router-link to="/about">About</router-link>
      </li>
      <li class="hover:text-[#000] cursor-pointer">
        <router-link to="/services">Services</router-link>
      </li>

      <li class="hover:text-[#000] cursor-pointer">
        <router-link to="/portfolio">Portfolio</router-link>
      </li>

      <li class="hover:text-[#000] cursor-pointer" @click="openModal">Music</li>
    </ul>

    <!-- Right: Logo -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <p class="text-[20px] font-bold" :class="Color">
        <router-link to="/" active-class="text-white"
          >Rell Cut Experience</router-link
        >
      </p>
    </div>

    <!-- Hamburger for mobile -->
    <button
      @click="toggleMenu"
      ref="toggleBtn"
      class="md:hidden focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div
      v-if="menuOpen"
      ref="mobileMenu"
      class="absolute flex flex-col top-10 left-4 bg-[#F0F0F5] bg-opacity-80 text-black p-4 rounded-md space-y-2 text-[18px] z-20"
    >
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <p @click="openModal">Music</p>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuOpen = ref(false);
const toggleBtn = ref(null);
const mobileMenu = ref(null);

const Color = computed(() => {
  return route.name === "home" ? "white" : "black";
});

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleClickOutside = (event) => {
  if (
    toggleBtn.value &&
    mobileMenu.value &&
    !toggleBtn.value.contains(event.target) &&
    !mobileMenu.value.contains(event.target)
  ) {
    menuOpen.value = false;
  }
};

const openModal = () => {
  const id = document.getElementById("music");
  id.classList.remove("hidden");
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.white {
  color: white;
}

.black {
  color: #000;
}

.router-link-active {
  color: black;
}
</style>
