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

  <section class="mt-16">
    <div class="sm:px-10 px-5 py-6">
      <h3 class="font-bold text-center text-[32px]">Services</h3>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
      >
        <!-- Card -->
        <div>
          <img src="./../assets/demo.png" alt="" />
          <h3 class="text-[16px] font-bold mt-2">Adult Haircut</h3>
          <h3 class="text-[16px] font-bold mt-1">$50.00</h3>
          <button
            class="bg-black text-white text-[14px] font-semibold px-4 py-2 mt-2 rounded-md"
          >
            Schedule
          </button>
        </div>

        <div>
          <img src="./../assets/demo.png" alt="" />
          <h3 class="text-[16px] font-bold mt-2">Kids Haircut [Ages 3–17]</h3>
          <h3 class="text-[16px] font-bold mt-1">$30.00</h3>
          <button
            class="bg-black text-white text-[14px] font-semibold px-4 py-2 mt-2 rounded-md"
          >
            Schedule
          </button>
        </div>

        <div>
          <img src="./../assets/demo.png" alt="" />
          <h3 class="text-[16px] font-bold mt-2">Lineup</h3>
          <h3 class="text-[16px] font-bold mt-1">$20.00</h3>
          <button
            class="bg-black text-white text-[14px] font-semibold px-4 py-2 mt-2 rounded-md"
          >
            Schedule
          </button>
        </div>

        <div>
          <img src="./../assets/demo.png" alt="" />
          <h3 class="text-[16px] font-bold mt-2">
            Lineup + Facial Hair Trimmed
          </h3>
          <h3 class="text-[16px] font-bold mt-1">$30.00</h3>
          <button
            class="bg-black text-white text-[14px] font-semibold px-4 py-2 mt-2 rounded-md"
          >
            Schedule
          </button>
        </div>

        <div>
          <img src="./../assets/demo.png" alt="" />
          <h3 class="text-[16px] font-bold mt-2">
            Teen Haircut [Ages 3-17] + Facial Hair
          </h3>
          <h3 class="text-[16px] font-bold mt-1">$36.00</h3>
          <button
            class="bg-black text-white text-[14px] font-semibold px-4 py-2 mt-2 rounded-md"
          >
            Schedule
          </button>
        </div>

        <div>
          <img src="./../assets/demo.png" alt="" />
          <h3 class="text-[16px] font-bold mt-2">Before / After Hours Cut</h3>
          <h3 class="text-[16px] font-bold mt-1">$36.00</h3>
          <button
            class="bg-black text-white text-[14px] font-semibold px-4 py-2 mt-2 rounded-md"
          >
            $70.00
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
