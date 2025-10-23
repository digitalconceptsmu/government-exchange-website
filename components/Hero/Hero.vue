<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-gradient-to-r from-primary to-[#2d8c61] text-white overflow-hidden">
    <div class="container mx-auto px-4 py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span class="text-sm">Leading UK Training Provider</span>
          </div>
          <h1 class="text-4xl lg:text-6xl">
            Strategic Thinking
            <span class="block text-white/90 mt-2">for Public Service Excellence</span>
          </h1>
          <p class="text-lg text-white/90 max-w-xl">
            Government Exchange is a leading provider of accredited professional training in the UK.
            As an organisation that trains Ministers, we are at the forefront of thinking in Government and skills development.
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <Button size="lg" class="bg-white text-primary hover:bg-gray-100 flex items-center py-2 px-4 rounded-lg">
              Explore Courses
              <ArrowRight class="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" class="border-white text-white hover:bg-white/10 hover:underline">
              Contact Us
            </Button>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent rounded-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
            alt="Strategic thinking training session"
            class="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent"></div>
  </section>
</template>
