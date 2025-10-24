<script setup lang="ts">
import { Quote } from 'lucide-vue-next';

const testimonials = [
  {
    quote: "Overall, the day was extremely worthwhile and I will recommend it to fellow civil servants.",
    author: "M. Riddell",
    role: "Communities and Local Government",
  },
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
          What Participants Say
        </h2>
        <p class="text-lg text-gray-600">
          Hear from civil servants who have benefited from our training programs
        </p>
      </div>

      <div class="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white p-8 lg:p-12 rounded-2xl shadow-sm relative"
        >
          <div class="absolute top-8 right-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Quote class="w-8 h-8 text-primary" />
          </div>
          <blockquote class="text-xl mr-10 text-gray-900 mb-8 italic relative z-10">
            "{{ testimonial.quote }}"
          </blockquote>
          <div class="border-t border-gray-200 pt-6">
            <p class="text-gray-900">{{ testimonial.author }}</p>
            <p class="text-gray-600">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
