<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
</script>

<template>
  <section class="relative bg-gradient-to-r from-primary to-[#38735c] text-white overflow-hidden min-h-[600px] flex items-center">
    <div class="container mx-auto px-4 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span class="text-sm font-medium">Leading UK Training Provider</span>
          </div>

          <h1 class="text-5xl lg:text-6xl font-semibold leading-tight">
            Excellence in Public Service Training
          </h1>

          <p class="text-lg text-white leading-relaxed max-w-xl">
            We offer a wide range of highly informative interactive training events and certificated courses, providing insights into the workings of Parliament, Government and policy-making. We also offer bespoke training UK-wide and internationally.
          </p>

          <p class="text-lg text-white/90 max-w-xl leading-relaxed">
            Government Exchange is a leading provider of accredited professional training in the UK. As an organisation that trains Ministers, we are at the forefront of thinking in Government and skills development.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              variant="light"
            >
              Explore Courses
              <ArrowRight class="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="light"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent rounded-2xl pointer-events-none z-10"></div>

            <div class="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <!-- <img
                src="/images/government-exchange-brochure.jpg"
                alt="Government Exchange Training Brochure"
                class="w-full h-auto rounded-lg"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
  </section>
</template>
