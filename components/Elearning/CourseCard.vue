<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

interface Props {
  title: string;
  description: string;
  image: string;
  slug?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
    <div class="aspect-video overflow-hidden bg-gray-100">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-3">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm mb-6">
        {{ description }}
      </p>
      <NuxtLink
        v-if="slug"
        :to="`/courses/e-learning/${slug}`"
        class="text-primary text-sm font-medium inline-flex items-center hover:underline group cursor-pointer"
      >
        Read more
        <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </NuxtLink>
      <span
        v-else
        class="text-gray-400 text-sm font-medium inline-flex items-center cursor-not-allowed"
      >
        Read more
        <ArrowRight class="ml-2 w-4 h-4" />
      </span>
    </div>
  </div>
</template>
