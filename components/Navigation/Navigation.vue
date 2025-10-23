<script setup lang="ts">
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-vue-next";
import { ref } from "vue";

const mobileMenuOpen = ref(false);
const coursesDropdownOpen = ref(false);
let closeTimeout: ReturnType<typeof setTimeout> | null = null;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Bespoke Training", href: "/bespoke" },
  { name: "Contact", href: "/contact" },
];

const coursesDropdown = [
  { name: "Our Courses", href: "/courses" },
  { name: "Upcoming Courses", href: "/courses/upcoming" },
  { name: "E-learning", href: "/courses/e-learning" },
];

const handleMouseEnter = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  coursesDropdownOpen.value = true;
};

const handleMouseLeave = () => {
  closeTimeout = setTimeout(() => {
    coursesDropdownOpen.value = false;
  }, 100);
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="bg-primary text-white">
      <div class="container mx-auto px-4 py-2">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-6">
            <a
              href="tel:02031378833"
              class="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone class="w-4 h-4" />
              <span class="text-sm">020 3137 8833</span>
            </a>
            <a
              href="mailto:enquiry@governmentexchange.co.uk"
              class="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail class="w-4 h-4" />
              <span class="text-sm">enquiry@governmentexchange.co.uk</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div>
              <h1 class="text-2xl text-primary">Government Exchange</h1>
            </div>
          </NuxtLink>

          <nav class="hidden lg:flex items-center gap-1">
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-md transition-colors"
              active-class="text-primary bg-primary/5"
              exact-active-class="text-primary bg-primary/5"
              :class="
                $route.path === '/'
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              "
            >
              Home
            </NuxtLink>

            <div
              class="relative"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
            >
              <button
                :class="[
                  'px-4 py-2 rounded-md transition-colors flex items-center gap-1',
                  $route.path.startsWith('/courses')
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50',
                ]"
              >
                Courses
                <ChevronDown class="w-4 h-4" />
              </button>

              <div
                v-if="coursesDropdownOpen"
                class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <NuxtLink
                  v-for="item in coursesDropdown"
                  :key="item.name"
                  :to="item.href"
                  class="block px-4 py-3 transition-colors"
                  active-class="text-primary bg-primary/5"
                  :class="
                    $route.path === item.href
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  "
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink
              v-for="link in navLinks.filter((l) => l.name !== 'Home')"
              :key="link.name"
              :to="link.href"
              class="px-4 py-2 rounded-md transition-colors"
              active-class="text-primary bg-primary/5"
              :class="
                $route.path === link.href
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              "
            >
              {{ link.name }}
            </NuxtLink>

            <NuxtLink to="/courses">
              <Button
                class="ml-4 bg-primary py-2 px-4 text-sm rounded-md text-white hover:bg-primary/90"
              >
                Explore Courses
              </Button>
            </NuxtLink>
          </nav>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 text-gray-700"
          >
            <X v-if="mobileMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>

        <nav
          v-if="mobileMenuOpen"
          class="lg:hidden py-4 border-t border-gray-200"
        >
          <NuxtLink
            to="/"
            class="block px-4 py-3 transition-colors"
            active-class="text-primary bg-primary/5"
            exact-active-class="text-primary bg-primary/5"
            :class="
              $route.path === '/'
                ? 'text-primary bg-primary/5'
                : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
            "
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>

          <div>
            <button
              @click="coursesDropdownOpen = !coursesDropdownOpen"
              :class="[
                'w-full flex items-center justify-between px-4 py-3 transition-colors',
                $route.path.startsWith('/courses')
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary',
              ]"
            >
              <span>Courses</span>
              <ChevronDown
                :class="[
                  'w-4 h-4 transition-transform',
                  coursesDropdownOpen ? 'rotate-180' : '',
                ]"
              />
            </button>
            <div v-if="coursesDropdownOpen" class="bg-gray-50">
              <NuxtLink
                v-for="item in coursesDropdown"
                :key="item.name"
                :to="item.href"
                class="block px-8 py-2 text-sm transition-colors"
                active-class="text-primary bg-primary/5"
                :class="
                  $route.path === item.href
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                "
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            v-for="link in navLinks.filter((l) => l.name !== 'Home')"
            :key="link.name"
            :to="link.href"
            class="block px-4 py-3 transition-colors"
            active-class="text-primary bg-primary/5"
            :class="
              $route.path === link.href
                ? 'text-primary bg-primary/5'
                : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
            "
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>

          <div class="px-4 pt-4">
            <NuxtLink to="/courses">
              <Button class="w-full bg-primary hover:bg-primary/90">
                Explore Courses
              </Button>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
