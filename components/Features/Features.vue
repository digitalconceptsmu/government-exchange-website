<script setup lang="ts">
import { Award, BookOpen, TrendingUp, Users } from "lucide-vue-next";

const features = [
  {
    icon: Award,
    title: "Accredited Training",
    description: "Certified courses recognized across the UK public sector",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from experienced professionals and former civil servants",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Programs",
    description: "Wide range of courses covering all aspects of government work",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "Advance your skills and career in public service",
  },
];
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white flex flex-col items-start rounded-lg p-8 hover:shadow-lg transition-shadow"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <component :is="feature.icon" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl text-gray-900 mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
