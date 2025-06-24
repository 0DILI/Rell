<template>
  <nav
    class="absolute top-4 left-0 right-0 px-6 flex items-center md:gap-[200px] gap-0 max-[768px]:justify-between text-white z-10"
  >
    <!-- Left: Nav Links -->
    <ul class="hidden md:flex text-[18px] font-bold gap-6 items-center">
      <li class="hover:text-[#fbddfe] cursor-pointer">
        <router-link to="/about" class="hover:text-[#f0a4f7]"
          >About</router-link
        >
      </li>
      <li class="hover:text-[#fbddfe] cursor-pointer">
        <router-link to="/services" class="hover:text-[#f0a4f7]"
          >Services</router-link
        >
      </li>
      <li class="hover:text-[#fbddfe] cursor-pointer">
        <a href="./portfolio.html">Portfolio</a>
      </li>
      <li class="hover:text-[#fbddfe] cursor-pointer">Music</li>
    </ul>

    <!-- Right: Logo -->
    <p class="text-[20px] font-bold text-white">
      <a href="./index.html">Rell Cut Experience</a>
    </p>

    <!-- Hamburger for mobile -->
    <button id="menu-toggle" class="md:hidden focus:outline-none">
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
  </nav>
</template>
