<script setup lang="ts">
import { ref } from "vue";
import img1 from "@/assets/img/re1.png";
import img2 from "@/assets/img/re2.png";
import img3 from "@/assets/img/re3.png";
import img4 from "@/assets/img/re4.png";
import img5 from "@/assets/img/re5.png";
import img6 from "@/assets/img/re6.png";

interface Review {
  name: string;
  image: string;
  message: string;
}
const reviews = ref<Review[]>([
  {
    name: "คุณแม่น้องมีมี่",
    image: img1,
    message: "ลูกชายไม่ร้องไห้เวลามาทำฟันที่นี่เลย คุณหมอใจดีมาก พูดคุยกับเด็กอย่างนุ่มนวล แถมยังมีของเล่นให้ดูเพลิน ๆ ระหว่างทำฟัน ทำให้ลูกไม่กลัวเลยค่ะ หลังทำเสร็จก็ได้สติกเกอร์หมอฟูกลับบ้านทุกครั้ง ยิ้มแก้มปริเลยค่ะ คุณแม่ก็สบายใจมาก ๆ",
  },
  {
    name: "คุณลุงสมชาย",
    image: img2,
    message: "คลินิกสะอาดมาก บรรยากาศดี พนักงานยิ้มแย้มแจ่มใสตั้งแต่เดินเข้าประตู พยาบาลก็ดูแลอย่างดี ให้คำแนะนำละเอียด คุณหมอก็ใจเย็น ไม่รีบร้อน พูดจาน่าเชื่อถือ ทำให้รู้สึกอุ่นใจมากครับ ไปครั้งหน้าจะพาญาติมาด้วยแน่นอน รับรองว่าไม่ผิดหวัง",
  },
  {
    name: "คุณพ่อน้องพลอย",
    image: img3,
    message: "หมออธิบายผลตรวจละเอียดมาก ลูกสาวเข้าใจง่ายจนไม่กลัวการรักษา!",
  },
  {
    name: "น้องใบเตย (อายุ 8 ขวบ)",
    image: img4,
    message: "ชอบบรรยากาศคลินิกสุด ๆ เหมือนมาเที่ยวมากกว่ามาหาหมอ! มีของเล่นเยอะ แล้วก็มีมุมถ่ายรูปน่ารัก หนูอยากมาอีกบ่อย ๆ เลยค่ะ 💖",
  },
  {
    name: "คุณป้าส้ม",
    image: img5,
    message: "บริการรวดเร็ว ไม่ต้องรอนานเลยค่ะ มาถึงก็มีเจ้าหน้าที่มาต้อนรับอย่างดี แถมยังมีขนมกับของเล่นให้เด็ก ๆ ระหว่างรอด้วย เด็ก ๆ เลยไม่งอแง อารมณ์ดีทั้งก่อนและหลังทำฟัน คุณหมอก็ใจดี อธิบายเข้าใจง่าย ประทับใจมากค่ะ จะกลับมาใช้บริการอีกแน่นอน",
  },
  {
    name: "น้องภูผา (อายุ 10 ขวบ)",
    image: img6,
    message: "ฟันผุหายแน่นอนหลังมาทำฟันที่นี่! คุณหมอใจดีมาก ไม่ดุเลย แล้วก็เล่าเรื่องสนุก ๆ ระหว่างทำฟันด้วย ผมไม่รู้สึกกลัวเหมือนตอนที่เคยไปร้านอื่นเลยครับ แถมยังได้ของรางวัลกับสติกเกอร์ทุกครั้งที่มาตรวจ ตอนนี้ผมอยากมาหาหมอฟูบ่อย ๆ เลยครับ 😁",
  },
]);
</script>

<template>
  <section class=" flex w-full flex-col place-items-center p-[2%] bg-light">
    <h3 class="text-3xl font-medium text-navy max-md:text-2xl">
      เสียงสะท้อนจากคนไข้ของเรา
    </h3>
    <!-- Testimonials -->
    <div
      class="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3"
    >
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="flex h-fit w-[350px] break-inside-avoid flex-col rounded-lg p-4 shadow-lg max-lg:w-[320px]"  data-aos="fade-up" data-aos-delay="150"
       
      >
        <div class="flex place-items-center gap-3" >
          <div
            class="h-[50px] w-[50px] overflow-hidden rounded-full border-[2px] border-solid border-blue"
          >
            <img
              :src="review.image"
              class="h-full w-full object-cover"
              :alt="review.name"
            />
          </div>
          <div class="flex flex-col gap-1">
            <div class="font-semibold text-navy">{{ review.name }}</div>
          </div>
        </div>
        <p class="mt-4 italic text-gray-800">
          {{ review.message }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
