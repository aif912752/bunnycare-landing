<script setup lang="ts">
const title = "สุขภาพดีเริ่มต้นที่นี่...ด้วยรอยยิ้ม!"
const subtitle = "BunnyCare Clinic พร้อมดูแลคุณและครอบครัวด้วยความอบอุ่นเหมือนบ้าน"
</script>

<template>
  <section class="hero bg-gradient-to-r from-primary to-secondary">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 space-y-6 text-white">
        <h1 class="text-4xl md:text-5xl font-heading">{{ title }}</h1>
        <p class="text-xl">{{ subtitle }}</p>
        <div class="flex space-x-4">
          <AppButton variant="accent">นัดหมายล่วงหน้า</AppButton>
          <AppButton variant="outline-white">ดูบริการทั้งหมด</AppButton>
        </div>
      </div>
      <div class="md:w-1/2">
        <img 
          src="@/assets/images/mascot/dr-bunny-hero.png" 
          alt="Dr. Bunny" 
          class="w-full max-w-md mx-auto"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>