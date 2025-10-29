<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const images = [
  '/images/image001.png',
  '/images/image002.png',
  '/images/image003.png',
  '/images/image004.png',
  '/images/Gemini_Generated_Image_u303oou303oou303.png',
];

const currentIndex = ref(0);
let intervalId: number | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 4000);
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section>
    <div
      class="relative w-full"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
    >
      <div class="relative overflow-hidden shadow-2xl aspect-[16/6]">
        <TransitionGroup name="slide-fade">
          <div
            v-for="(image, index) in images"
            v-show="index === currentIndex"
            :key="image"
            class="absolute inset-0"
          >
            <img
              :src="image"
              :alt="`Training event ${index + 1}`"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </TransitionGroup>

        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-gray-500 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-gray-500 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight class="w-6 h-6" />
        </button>
      </div>

      <div class="flex justify-center gap-3 left-1/2 bottom-4 absolute">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            index === currentIndex
              ? 'bg-white w-8'
              : 'bg-white/40 hover:bg-white'
          ]"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>