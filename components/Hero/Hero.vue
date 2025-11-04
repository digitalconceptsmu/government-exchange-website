<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { Button } from "~/components/ui/button";

const images = [
  "/images/hero/image 1.png",
  "/images/hero/image 2.png",
  "/images/hero/image 3.png",
];

const currentImageIndex = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

const goToSlide = (index: number) => {
  currentImageIndex.value = index;
};
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
            Government Exchange is a leading provider of accredited professional training in the UK. As an organisation that trains Ministers, civil servants and public sector professionals, we are at the forefront of thinking in Government and skills development.  
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <NuxtLink to="/courses">
              <Button
                size="lg"
                variant="light"
              >
                Explore Courses
                <ArrowRight class="ml-2 w-5 h-5" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/contact">
              <Button
                size="lg"
                variant="light"
              >
                Contact Us
              </Button>
            </NuxtLink>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent rounded-2xl pointer-events-none z-10"></div>

            <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="relative aspect-[4/3]">
                <TransitionGroup name="fade">
                  <img
                    v-for="(image, index) in images"
                    v-show="index === currentImageIndex"
                    :key="image"
                    :src="image"
                    alt="Government Exchange Training"
                    class="absolute inset-0 w-full h-full object-cover"
                  />
                </TransitionGroup>
              </div>

              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                <button
                  v-for="(_, index) in images"
                  :key="index"
                  @click="goToSlide(index)"
                  :class="[
                    'w-3 h-3 rounded-full transition-all duration-300',
                    index === currentImageIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  ]"
                  :aria-label="`Go to slide ${index + 1}`"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>
