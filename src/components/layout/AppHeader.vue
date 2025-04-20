<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isNavbarActive = ref(false)
const navbarCollapse = ref<HTMLElement | null>(null)

const isSticky = ref(false)

const menuItems = ref([
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
])

const toggleNavbar = () => {
  isNavbarActive.value = !isNavbarActive.value
}

const closeNavbar = () => {
  isNavbarActive.value = false
}
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const header = document.querySelector('.ud-header') as HTMLElement
    const headerHeight = header ? header.offsetHeight : 0
    const offset = headerHeight + 16 // Additional padding for better spacing
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    })
    closeNavbar() // Close mobile navbar after scrolling
  }
}
const handleScroll = () => {
  const udHeader = document.querySelector('.ud-header')
  if (udHeader) {
    const sticky = (udHeader as HTMLElement).offsetTop
    isSticky.value = window.pageYOffset > sticky

    const backToTop = document.querySelector('.back-to-top') as HTMLElement
    if (backToTop) {
      backToTop.style.display =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
          ? 'flex'
          : 'none'
    }
  }
}


const scrollToTop = () => {
  const scrollTo = (element: HTMLElement, to: number = 0, duration: number = 500) => {
    const start = element.scrollTop
    const change = to - start
    const increment = 20
    let currentTime = 0

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    const animateScroll = () => {
      currentTime += increment
      const val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }

    animateScroll()
  }

  scrollTo(document.documentElement)
}

onMounted(() => {
  if (typeof window !== 'undefined' && (window as any).WOW) {
    new (window as any).WOW().init()
  }

  window.addEventListener('scroll', handleScroll)

  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ud-header"
    :class="{ 'fixed top-0 left-0 z-40 bg-white shadow-md': isSticky }"
  >
    <div class="container px-4 mx-auto">
      <div class="relative flex items-center justify-between -mx-4">
        <div class="max-w-full px-4 w-60">
          <a href="index.html" class="block w-full py-5 navbar-logo">
            <span
              class="text-2xl font-bold"
              :class="isSticky ? 'text-black' : 'text-text'"
            >
              Bunny
            </span>
          </a>
        </div>
        <div class="flex items-center justify-between w-full px-12">
          <div>
            <button
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              :class="{ navbarTogglerActive: isNavbarActive }"
              @click="toggleNavbar"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-text"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-text"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-text"
              ></span>
            </button>
            <nav
              id="navbarCollapse"
              ref="navbarCollapse"
              class="absolute mx-3 right-4 top-full  w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-24"
              :class="{ hidden: !isNavbarActive && !isSticky }"
            >
              <ul
                class="block lg:flex  2xl:ml-20 font-medium text-text  lg:text-text"
              >
                <li v-for="item in menuItems" :key="item.href" class="relative group">
                  <a
                    :href="item.href"
                    class="flex py-2 mx-8 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70"
                    @click.prevent="scrollToSection(item.href)"
                  >
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden sm:flex">
            <button
              class="px-4 py-2 text-white bg-[#FF0B55] rounded-lg"
            >
              จองคิว
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Back to Top Button -->
  <div
    class="back-to-top fixed bottom-8 right-8 hidden items-center justify-center rounded-full bg-[#FF0B55] p-4 text-white cursor-pointer"
    @click="scrollToTop"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      ></path>
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