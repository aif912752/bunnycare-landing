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
    name: "คุณอิง & เจ้าหมูหวาน (กระต่าย)",
    image: img1,
    message: "ประทับใจมากค่ะ คุณหมอดูแลน้องละเอียด ใจเย็นสุดๆ หมูหวานไม่กลัวเลยสักนิด ทั้งการตรวจและให้คำแนะนำก็อธิบายเข้าใจง่ายมากค่ะ",
  },
  {
    name: "คุณบอล & น้องถังชา (แมวเปอร์เซีย)",
    image: img2,
    message: "คลินิกสะอาดมากครับ พนักงานและคุณหมอน่ารักทุกคน ให้คำแนะนำดีมาก น้องถังชามีปัญหาเรื่องผิวหนัง มารักษาไม่กี่ครั้งก็ดีขึ้นชัดเจนเลยครับ",
  },
  {
    name: "🐶 คุณฝน & น้องชิบุ (ชิวาวา)",
    image: img3,
    message: "น้องเคยกลัวคลินิกมาก แต่พอมาที่ BunnyCare กลับยอมนั่งนิ่งให้คุณหมอตรวจแบบไม่งอแงเลยค่ะ ขอบคุณที่ดูแลน้องด้วยความอ่อนโยนและใส่ใจค่ะ",
  },
  {
    name: "🦔 คุณแน็ต & เจ้าจิ๋ว (เม่นแคระ)",
    image: img4,
    message: "หาคลินิกรับดูแลเม่นแคระยากมากค่ะ แต่ที่นี่เข้าใจดีมาก มีความรู้เฉพาะทาง คุณหมอมือเบาและใส่ใจในรายละเอียดมากๆ รู้สึกสบายใจทุกครั้งที่มา",
  },
  {
    name: "🐹 คุณเบล & น้องซูซู (แฮมสเตอร์)",
    image: img5,
    message: "ประทับใจตั้งแต่ครั้งแรกเลยค่ะ คุณหมอและทีมงานน่ารัก ใจดี ให้คำแนะนำเรื่องการดูแลน้องซูซูแบบเข้าใจง่าย น้องไม่เครียดเลยค่ะเวลามาตรวจสุขภาพ",
  },
  {
    name: "🐕‍🦺 คุณแม็กซ์ & น้องโบโบ้ (ไซบีเรียน)",
    image: img6,
    message: "น้องตัวใหญ่แต่น่ารักมากครับ คลินิกก็รองรับได้ดี คุณหมอคุยดี มีความรู้ ทำหมันให้น้องเรียบร้อยและปลอดภัย หลังผ่าตัดก็มีแนะนำการดูแลละเอียดมากครับ",
  },
]);
</script>

<template>
  <section class=" flex w-full flex-col place-items-center p-[2%] bg-white">
    <h3 class="text-3xl font-medium text-navy max-md:text-2xl">
      รีวิวจากลูกค้าผู้ไว้วางใจ BunnyCare Clinic
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
