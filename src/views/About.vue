<template>
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

  <div
    class="flex flex-col items-center space-y-3 mt-20 sm:px-6 px-3"
    data-aos="fade-up"
    data-aos-offset="150"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-bottom"
  >
    <h3
      class="text-center text-[32px] font-bold"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="1000"
    >
      About
    </h3>

    <img
      src="./../assets/rell.png"
      alt="Terrell Chavous"
      class="w-42 h-42 rounded-full object-cover shadow-md"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
    />

    <h2
      class="text-[24px] font-bold"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      Terrell Chavous
    </h2>

    <!-- SOCIAL LINKS -->
    <div
      class="flex items-center gap-4 justify-center"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      <a href="#">
        <img src="./../assets/email.svg" />
      </a>

      <a href="#">
        <img src="./../assets/tiktok.svg" />
      </a>

      <a href="#">
        <img src="./../assets/insta.svg" />
      </a>

      <a href="#">
        <img src="./../assets/youtube.svg" />
      </a>
    </div>

    <p
      class="text-[24x] text-center leading-[28px]"
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="1000"
    >
      Thank you for considering my services! I am a 23 year old Master Barber.
      Check out <br />
      my photos, my work speaks for itself.
    </p>

    <p
      class="font-bold mt-2 text-[20px]"
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-duration="1000"
    >
      **PLEASE READ BEFORE BOOKING**
    </p>

    <p
      class="text-center text-gray-700 leading-[28px]"
      data-aos="fade-up"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      If you are more than 10 minutes late your appointment will be cancelled. I
      will not be<br />
      able to accept you after 10 minutes because you will be running over into
      someone<br />
      else scheduled appointment time. My time is valuable as well as yours.
    </p>

    <p class="text-[20px] text-center">
      THANK YOU for taking the time out to book with me see you soon!
    </p>

    <div class="mt-6 text-sm text-gray-600 text-[20px]">
      <p class="text-center">10959 Atomic Rd</p>
      <p class="text-center">North Augusta, SC 29841</p>
      <p class="text-center">(Entrance is on the right side of the building)</p>
    </div>
  </div>
</template>

<script setup>
const hello = "hello";
</script>
