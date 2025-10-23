<script setup lang="ts">
import { Mail, Menu, Phone, X } from 'lucide-vue-next'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Course List', href: '#courses' },
  { name: 'About Us', href: '#about' },
  { name: 'Open Courses', href: '#courses' },
  { name: 'Bespoke Training', href: '#bespoke' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <!-- Top Bar -->
    <div class="bg-primary text-white">
      <div class="container mx-auto px-4 py-2">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-6">
            <a href="tel:02031378833" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone class="w-4 h-4" />
              <span class="text-sm">020 3137 8833</span>
            </a>
            <a href="mailto:enquiry@governmentexchange.co.uk" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail class="w-4 h-4" />
              <span class="text-sm">enquiry@governmentexchange.co.uk</span>
            </a>
          </div>
          <div class="text-sm">For enquiries and bookings please call or email</div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div>
              <h1 class="text-2xl text-primary">Government Exchange</h1>
              <p class="text-xs text-gray-600">Centre for Parliamentary Studies</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-1">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              class="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              {{ link.name }}
            </a>
            <Button class="ml-4 bg-primary py-2 px-4 text-sm rounded-md text-white hover:bg-primary/90">
              Register Now
            </Button>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 text-gray-700"
          >
            <X v-if="mobileMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav v-if="mobileMenuOpen" class="lg:hidden py-4 border-t border-gray-200">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </a>
          <div class="px-4 pt-4">
            <Button class="w-full bg-primary hover:bg-primary/90">
              Register Now
            </Button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
