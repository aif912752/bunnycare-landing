<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isNavbarActive = ref(false);
const navbarCollapse = ref<HTMLElement | null>(null);
const isSticky = ref(false);

const menuItems = ref([
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]);

const toggleNavbar = () => (isNavbarActive.value = !isNavbarActive.value);

const closeNavbar = () => (isNavbarActive.value = false);

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const header = document.querySelector(".ud-header") as HTMLElement;
    const offset = (header?.offsetHeight || 0) + 16;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
    closeNavbar();
  }
};

const scrollToTop = () => {
  const easeInOut = (t: number, b: number, c: number, d: number) =>
    (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
  const animate = (el: HTMLElement, to = 0, dur = 500) => {
    const start = el.scrollTop,
      change = to - start,
      inc = 20;
    let time = 0;
    const scroll = () => {
      el.scrollTop = easeInOut((time += inc), start, change, dur);
      if (time < dur) setTimeout(scroll, inc);
    };
    scroll();
  };
  animate(document.documentElement);
};

const handleScroll = () => {
  const header = document.querySelector(".ud-header") as HTMLElement;
  isSticky.value = window.scrollY > (header?.offsetTop || 0);
  const btn = document.querySelector(".back-to-top") as HTMLElement;
  if (btn) btn.style.display = window.scrollY > 50 ? "flex" : "none";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header
    class="absolute top-0 left-0 z-40 w-full flex items-center bg-transparent ud-header"
    :class="{ 'fixed bg-white shadow-md': isSticky }"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between -mx-4">
        <div class="w-60 px-4">
          <a href="index.html" class="block py-5">
            <span
              class="text-2xl font-bold"
              :class="isSticky ? 'text-text' : 'text-text'"
            >
              Bunny
            </span>
          </a>
        </div>
        <div class="flex-1 flex items-center justify-between px-12">
          <div>
            <button
              id="navbarToggler"
              class="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              :class="{ navbarTogglerActive: isNavbarActive }"
              @click="toggleNavbar"
            >
              <span
                v-for="i in 3"
                :key="i"
                class="my-[6px] block h-[2px] w-[30px] bg-text"
              />
            </button>
            <nav
              id="navbarCollapse"
              ref="navbarCollapse"
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6"
              :class="{ 'hidden lg:block': !isNavbarActive }"
            >
              <ul
                class="block lg:flex 2xl:ml-20 font-medium text-text lg:text-text"
              >
                <li
                  v-for="item in menuItems"
                  :key="item.href"
                  class="relative group"
                >
                  <a
                    :href="item.href"
                    class="block py-2 mx-8 lg:mx-4 lg:px-2 lg:py-6 hover:text-[#FF0B55] lg:group-hover:opacity-70"
                    @click.prevent="scrollToSection(item.href)"
                  >
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden lg:flex">
            <button class="px-4 py-2 text-white bg-[#FF0B55] rounded-lg">
              จองคิว
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div
    class="back-to-top fixed bottom-8 right-8 z-50 hidden items-center justify-center rounded-full bg-[#FF0B55] p-4 text-white cursor-pointer"
    @click="scrollToTop"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </div>
</template>

<style scoped>
.navbarTogglerActive > span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}
.navbarTogglerActive > span:nth-child(2) {
  opacity: 0;
}
.navbarTogglerActive > span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}
</style>
