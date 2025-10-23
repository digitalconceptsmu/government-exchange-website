<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="bg-primary rounded-2xl p-12 lg:p-16 text-white text-center max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-semibold mb-6">
          Start Your Learning Journey
        </h2>
        <p class="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
          Access our comprehensive e-learning library designed for public service professionals. Learn at your own pace with expert-designed courses.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            class="bg-white text-primary hover:bg-gray-100 font-medium"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="border-2 border-white text-white hover:bg-white/10 font-medium"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
