<script setup lang="ts">
import { ArrowRight, Briefcase, Building2, Calculator, FileText, MessageSquare, Users2 } from 'lucide-vue-next';

const categories = [
  {
    icon: Building2,
    title: 'Parliament, Government & Resilience Skills',
    description: 'A comprehensive guide to all things Parliamentary, the structure and workings of Government, and the EU',
    color: 'bg-blue-500',
  },
  {
    icon: FileText,
    title: 'Policy, Strategy & Writing Skills',
    description: 'Develop essential skills in policy development and delivery, briefing, negotiating, strategic thinking and effective writing',
    color: 'bg-green-500',
  },
  {
    icon: Calculator,
    title: 'Finance',
    description: 'Understand key accounting principles and develop financial skills including budgeting, profiling, forecasting and managing contracts',
    color: 'bg-purple-500',
  },
  {
    icon: Users2,
    title: 'Management Skills',
    description: 'Develop your skills in leading and managing people, performance, projects and change',
    color: 'bg-orange-500',
  },
  {
    icon: Briefcase,
    title: 'Organisational & Personal Capability',
    description: 'Workshops designed for assessment centres, interviews, writing CVs, and for leaving the Civil Service',
    color: 'bg-teal-500',
  },
  {
    icon: MessageSquare,
    title: 'Communication & Stakeholder Engagement',
    description: 'Master effective communication strategies, public speaking, media relations, and stakeholder management for the public sector',
    color: 'bg-pink-500',
  },
]
</script>

<template>
  <section id="courses" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-5xl text-gray-900 mb-6">
          Training Categories
        </h2>
        <p class="text-lg text-gray-600">
          Explore our comprehensive range of professional development courses designed specifically for civil servants and public sector professionals
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card
          v-for="(category, index) in categories"
          :key="index"
          class="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100 border-2 rounded-xl py-4 px-6 flex flex-col items-start justify-center gap-4"
        >
          <CardHeader>
            <div :class="`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`">
              <component :is="category.icon" class="w-7 h-7 text-white" />
            </div>
            <CardTitle class="text-xl group-hover:text-primary transition-colors">
              {{ category.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription class="text-gray-600 mb-6">
              {{ category.description }}
            </CardDescription>
            <Button
              variant="ghost"
              class="text-primary text-sm mt-8 hover:text-primary/90 hover:bg-primary/5 p-0 h-auto group/btn flex items-center"
            >
              Learn More
              <ArrowRight class="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div class="bg-primary rounded-2xl p-8 lg:p-12 text-white">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl lg:text-3xl mb-4">Need Bespoke Training?</h3>
            <p class="text-white/90 mb-6">
              We offer customized training solutions tailored to your organization's specific needs.
              Available UK-wide and internationally.
            </p>
            <Button size="lg" class="bg-white text-primary hover:bg-gray-100 flex items-center py-2 px-4 rounded-lg">
              Request Bespoke Training
              <ArrowRight class="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div class="space-y-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 class="mb-2">Flexible Delivery</h4>
              <p class="text-sm text-white/80">In-person, virtual, or hybrid training options</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 class="mb-2">Expert Facilitation</h4>
              <p class="text-sm text-white/80">Delivered by experienced sector specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
