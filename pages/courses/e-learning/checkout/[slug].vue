<script setup lang="ts">
import Checkout from "~/components/Elearning/Checkout.vue";

useHead({
  title: 'E-learning - Government Exchange',
  meta: [
    { name: 'description', content: 'Access our online learning platform with flexible professional development courses.' }
  ]
})

const route = useRoute();
const slugParam = route.params.slug;
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

const slugWithSpaces = slug?.replace(/-/g, ' ');

const formattedSlug = (slugWithSpaces ?? '')
  .split(' ')
  .map(mot  => mot.charAt(0).toUpperCase() + mot.slice(1))
  .join(' ');

const title = ref(`Enroll Now - ${slug}`);
const subTitle = ref('Flexible online learning solutions designed for busy professionals');
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <div class="text-white py-8 md:py-12 lg:py-16 relative overflow-hidden">
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/images/banner/in_hourse_training.jpg')"
        ></div>

        <div class="absolute inset-0 bg-primary/90"></div>

        <div class="container ml-40 px-4 max-w-7xl relative z-10">
          <div class="mb-4">
          </div>
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">E-Learning Courses - {{ formattedSlug }}</h1>
          <div class="flex items-center gap-2 text-white/80 text-sm">
            <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
            <span>-</span>
            <NuxtLink to="/courses/e-learning" class="hover:text-white">E-learning courses</NuxtLink>
            <span>-</span>
            <span>{{ formattedSlug }}</span>
          </div>
        </div>
      </div>
      <Checkout />
    </main>
    <Footer />
  </div>
</template>
