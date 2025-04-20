<script setup lang="ts">
import Logo from "../Logo.vue";



</script>

<template>
  <!-- ====== Hero Section Start -->
  <div
    id="home"
    class="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
  >
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full px-4">
          <div
            class="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
            data-aos="fade-up"
          >
            <h1
              class="mb-6 text-3xl font-bold leading-snug text-text sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
            >
            BunnyCare – คลินิกรักษาสัตว์เลี้ยงครบวงจร
            </h1>
            <p
              class="mx-auto mb-9 max-w-[600px] text-base font-medium text-text sm:text-lg sm:leading-[1.44]"
            >
            สัตวแพทย์เฉพาะทาง | จองคิวง่าย | ปลอดภัย อ่อนโยน ไม่เครียด
            </p>
            <ul class="flex flex-wrap items-center justify-center gap-5 mb-10">
              <li>
                <a
                  href="https://links.tailgrids.com/play-download"
                  class="inline-flex items-center justify-center rounded-md bg-text px-7 py-[14px] text-white text-center text-base font-medium  shadow-1 transition duration-300 ease-in-out hover:bg-coral/70 hover:text-body-color"
                >
                นัดหมายเลย
                </a>
              </li>
              <li>
                  <a
                    href="https://github.com/tailgrids/play-tailwind"
                    target="_blank"
                    class="flex items-center gap-4 rounded-md bg-text/[0.12] px-6 py-[14px] text-base font-medium text-text transition duration-300 ease-in-out hover:bg-white"
                  >
                
                    ปรึกษาแพทย์ฟรี
                  </a>
                </li>
            </ul>
          </div>
        </div>

        <div class="w-full px-4">
          <div
            class="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
            data-wow-delay=".25s"
          >
            <div class="mt-16">
              <img
                src="@/assets/img/bunny1.png"
                alt="hero"
                class="max-w-full mx-auto rounded-t-xl rounded-tr-xl"
              />
            </div>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
