<script setup lang="ts">
import { ref } from "vue";
import img1 from "@/assets/img/doctor1.png";
import img2 from "@/assets/img/doctor2.png";
import img3 from "@/assets/img/doctor3.png";
import img4 from "@/assets/img/doctor4.png";

const doctors = ref([
  {
    id: 1,
    name: "คุณหมอโจ",
    specialty: "ผู้เชี่ยวชาญด้านการผ่าตัดและดูแลหลังผ่าตัด",
    description:
      "ความปลอดภัยของน้องๆ คือสิ่งที่เราตั้งใจที่สุด ทุกเคส เราดูแลเหมือนเป็นครอบครัว",
    image: img3,
  },
  {
    id: 2,
    name: "คุณหมอมายด์",
    specialty: "สัตวแพทย์เฉพาะทางสัตว์เลี้ยงขนาดเล็ก",
    description:
      "กระต่าย แฮมสเตอร์ หรือเม่นแคระ... ทุกตัวล้วนมีหัวใจที่อยากได้รับความรัก",
    image: img4,
  },
  {
    id: 3,
    name: " คุณหมอฟ้า",
    specialty: "สัตวแพทย์ด้านการดูแลความสะอาด",
    description:
      "อาบน้ำ ตัดขน ไม่ใช่แค่เรื่องความสวย แต่คือความสุขของสัตว์เลี้ยงที่เรารัก",
    image: img1,
  },
  {
    id: 4,
    name: "คุณหมอวิน",
    specialty: "ให้คำปรึกษาด้านสุขภาพสัตว์เลี้ยงทั่วไป",
    description:
      "เข้าใจสัตว์ เข้าใจเจ้าของ เพราะเราทุกคนคือทีมเดียวกัน",
    image: img2,
  },
]);
</script>

<template>
  <section
    id="team"
    class="overflow-hidden bg-[#FFFFFF] pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
  >
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[485px] text-center">
            <span class="block mb-2 text-lg font-semibold text-navy">
              BunnyCare
            </span>
            <h2
              class="mb-3 text-3xl font-bold leading-[1.2] text-navy sm:text-4xl md:text-[40px]"
            >
            ทีมสัตวแพทย์ผู้เชี่ยวชาญ ที่รักสัตว์เหมือนคุณ 
            </h2>
            <p class="text-base text-body-color">
              ทีม BunnyCare ประกอบด้วยสัตวแพทย์ที่มีประสบการณ์ในการดูแลสัตว์เลี้ยงขนาดเล็กโดยเฉพาะ พร้อมให้บริการด้วยใจและรอยยิ้มเสมอ
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
            class="px-5 pt-12 pb-10 mb-8 bg-primary group rounded-xl shadow-testimonial"
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
                class="mb-1 text-lg font-semibold"
              >
                {{ doctor.name }}
              </h4>
              <p class="mb-5 text-sm text-body-color text-[#333333]">
                {{ doctor.specialty }}
              </p>
              <div class="flex items-center justify-center gap-5 text-[#333333]">
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
