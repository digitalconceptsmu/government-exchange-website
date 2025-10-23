<script setup lang="ts">
import { Award, Users, BookOpen, TrendingUp } from 'lucide-vue-next'

const features = [
  {
    icon: Award,
    title: 'Accredited Training',
    description: 'Certified courses recognized across the UK public sector',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from experienced professionals and former civil servants',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Programs',
    description: 'Wide range of courses covering all aspects of government work',
  },
  {
    icon: TrendingUp,
    title: 'Career Development',
    description: 'Advance your skills and career in public service',
  },
]
</script>

<template>
  <section id="about" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-5xl text-gray-900 mb-6">
          Excellence in Public Service Training
        </h2>
        <p class="text-lg text-gray-600">
          We offer a wide range of highly informative
          <span class="text-primary">interactive training events</span> and
          <span class="text-primary">certificated courses</span>, providing insights into the
          workings of Parliament, Government and policy-making. We also offer
          <span class="text-primary">bespoke training</span> UK-wide and internationally.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
            <component :is="feature.icon" class="w-7 h-7 text-primary" />
          </div>
          <h3 class="text-xl text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
