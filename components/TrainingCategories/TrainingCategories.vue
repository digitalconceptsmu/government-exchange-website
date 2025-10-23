<script setup lang="ts">
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  Cpu,
  FileText,
  Users2,
} from "lucide-vue-next";

const categories = [
  {
    icon: Building2,
    title: "Parliament, Government & Resilience Skills",
    description:
      "A comprehensive guide to all things Parliamentary, the structure and workings of Government, and the EU",
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "Policy, Strategy & Writing Skills",
    description:
      "Develop essential skills in policy development and delivery, briefing, negotiating, strategic thinking and effective writing",
    color: "bg-green-500",
  },
  {
    icon: Calculator,
    title: "Finance",
    description:
      "Understand key accounting principles and develop financial skills including budgeting, profiling, forecasting and managing contracts",
    color: "bg-purple-500",
  },
  {
    icon: Users2,
    title: "Management Skills",
    description:
      "Develop your skills in leading and managing people, performance, projects and change",
    color: "bg-orange-500",
  },
  {
    icon: Briefcase,
    title: "Organisational & Personal Capability",
    description:
      "Workshops designed for assessment centres, interviews, writing CVs, and for leaving the Civil Service",
    color: "bg-teal-500",
  },
  {
    icon: Cpu,
    title: "AI Empowerment for the Public Service",
    description:
      "Develop a clear understanding of AI fundamentals and their implications among public service.",
    color: "bg-pink-500",
  },
];
</script>

<template>
  <section id="courses" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl lg:text-5xl text-gray-900 mb-6">
          Training Categories
        </h2>
        <p class="text-lg text-gray-600">
          Explore our comprehensive range of professional development courses designed specifically for civil servants and public sector professionals
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow flex flex-col"
        >
          <div
            :class="`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mb-6`"
          >
            <component :is="category.icon" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ category.title }}
          </h3>
          <p class="text-gray-600 text-sm mb-6 flex-grow">
            {{ category.description }}
          </p>
          <a
            href="#"
            class="text-primary text-sm font-medium inline-flex items-center hover:underline group/link mt-auto"
          >
            Learn More
            <ArrowRight
              class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
