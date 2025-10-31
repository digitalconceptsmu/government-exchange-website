<script setup lang="ts">
import { ref } from "vue";
import CourseCard from "./CourseCard.vue";

interface Course {
  title: string;
  description: string;
  image: string;
  slug?: string;
}

const activeTab = ref("all");

const tabs = [
  { id: "all", label: "ALL COURSES" },
  { id: "suites", label: "SUITES" },
  { id: "individual", label: "INDIVIDUAL COURSES" },
];

const allCourses: Course[] = [
  {
    title: "The Successful Managers Toolkits for the Public Service",
    description:
      "Comprehensive toolkit for managers in public service to enhance leadership and operational effectiveness.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "successful-managers-toolkit",
  },
  {
    title: "The Essentials of Managing Equality for the Public Service",
    description:
      "Essential knowledge and competencies for implementing equality frameworks across public sector organizations.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
  },
  {
    title: "Ethics in Policy Development and Its Role for the Public Service",
    description:
      "Understanding ethical frameworks and their application in policy development processes.",
    image: "https://images.unsplash.com/photo-1555325284-6f27e85b0e50?w=800&h=600&fit=crop",
  },
  {
    title: "Effective Writing Skills for the Public Service",
    description:
      "Develop professional writing competencies for clear and effective communication in government.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
  },
  {
    title: "Competence in Human Resource Management",
    description:
      "HR management competencies for public sector human capital development.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
];

const suites: Course[] = [
  {
    title: "The Successful Managers Toolkits for the Public Service",
    description:
      "Comprehensive toolkit for managers in public service to enhance leadership and operational effectiveness.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    slug: "successful-managers-toolkit",
  },
  {
    title: "The Essentials of Managing Equality for the Public Service",
    description:
      "Essential knowledge and competencies for implementing equality frameworks across public sector organizations.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
  },
  {
    title: "Ethics in Policy Development and Its Role for the Public Service",
    description:
      "Understanding ethical frameworks and their application in policy development processes.",
    image: "https://images.unsplash.com/photo-1555325284-6f27e85b0e50?w=800&h=600&fit=crop",
  },
];

const individualCourses: Course[] = [
  {
    title: "Effective Writing Skills for the Public Service",
    description:
      "Develop professional writing competencies for clear and effective communication in government.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
  },
  {
    title: "Competence in Human Resource Management",
    description:
      "HR management competencies for public sector human capital development.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
];

const currentCourses = computed(() => {
  switch (activeTab.value) {
    case "suites":
      return suites;
    case "individual":
      return individualCourses;
    default:
      return allCourses;
  }
});
</script>

<template>
  <section class="py-4 lg:py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex gap-4 mb-8 border-b pb-8 justify-center border-gray-200">
          <div class="border-b">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-2 lg:px-6 py-3 font-normal lg:font-medium text-sm transition-colors relative',
                activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700',
              ]"
            >
            {{ tab.label }}
          </button>
        </div>
      </div>

        <div class="mb-12 max-w-4xl">
          <p class="text-gray-700 mb-4">
            Explore a range of eLearning courses developed by our specialist trainers.
          </p>
          <p class="text-gray-700">
            These eLearning courses are designed for public service professionals seeking to build their skills in different competency areas including but not limited to governance, policy, and leadership.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            v-for="(course, index) in currentCourses"
            :key="index"
            :title="course.title"
            :description="course.description"
            :image="course.image"
            :slug="course.slug"
          />
        </div>
      </div>
    </div>
  </section>
</template>
