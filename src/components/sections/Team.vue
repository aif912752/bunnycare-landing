<script setup lang="ts">
import { ref } from "vue";
import img1 from "@/assets/img/doctor1.png";
import img2 from "@/assets/img/doctor2.png";
import img3 from "@/assets/img/doctor3.png";
import img4 from "@/assets/img/doctor4.png";

const doctors = ref([
  {
    id: 1,
    name: "ดร.บัณฑิต ใจดี",
    specialty: "แพทย์ทั่วไป",
    description:
      "แพทย์ผู้เชี่ยวชาญด้านการตรวจสุขภาพทั่วไป ช่วยให้ผู้ป่วยรู้สึกสบายใจทุกครั้งที่มาเยือน",
    image: img3,
  },
  {
    id: 2,
    name: "พญ.ฟ้าใส ยิ้มสดใส",
    specialty: "ทันตกรรมเด็ก",
    description:
      "แพทย์ผู้เชี่ยวชาญด้านทันตกรรมเด็ก ดูแลช่องปากเด็กด้วยความอ่อนโยน",
    image: img4,
  },
  {
    id: 3,
    name: "พญ.เมฆา เกศราพันธ์",
    specialty: "แพทย์ผิวหนังเฉพาะทาง",
    description:
      " เชี่ยวชาญด้านผิวหนังเด็กและผู้ใหญ่ ด้วยเทคนิคไร้ความเจ็บปวดและอุปกรณ์ทันสมัย",
    image: img1,
  },
  {
    id: 4,
    name: "ดร.ภูผา หัวใจดี",
    specialty: "แพทย์กระดูกและข้อ",
    description:
      "ผู้เชี่ยวชาญด้านการฟื้นฟูร่างกายแบบไม่ผ่าตัด ด้วยท่าออกกำลังกายเฉพาะบุคคล",
    image: img2,
  },
]);
</script>

<template>
  <section
    id="team"
    class="overflow-hidden bg-light pb-12 pt-20 dark:bg-light lg:pb-[90px] lg:pt-[120px]"
  >
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[485px] text-center">
            <span class="block mb-2 text-lg font-semibold text-navy">
              ทีมแพทย์ผู้เชี่ยวชาญ
            </span>
            <h2
              class="mb-3 text-3xl font-bold leading-[1.2] text-navy dark:text-navy sm:text-4xl md:text-[40px]"
            >
              พบกับครอบครัว BunnyCare
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              ทีมแพทย์ของเราผสมผสานความเชี่ยวชาญระดับมืออาชีพ
              เข้ากับความอบอุ่นแบบเพื่อนบ้าน
              ทุกการรักษาคือความใส่ใจที่ออกแบบมาเฉพาะสำหรับคุณ
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center -mx-4">
        <div
          v-for="doctor in doctors"
          :key="doctor.id"
          class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4"
        >
          <div
            class="px-5 pt-12 pb-10 mb-8 bg-white group rounded-xl shadow-testimonial dark:bg-pink dark:shadow-none"
          >
            <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
              <img
                :src="doctor.image"
                :alt="`ภาพของ ${doctor.name}`"
                class="h-[120px] w-[120px] rounded-full"
              />
            </div>
            <div class="text-center">
              <h4
                class="mb-1 text-lg font-semibold text-dark dark:text-[#695349]"
              >
                {{ doctor.name }}
              </h4>
              <p class="mb-5 text-sm text-body-color dark:text-dark-6">
                {{ doctor.specialty }}
              </p>
              <div class="flex items-center justify-center gap-5">
                <p class="text-sm">
                  {{ doctor.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
