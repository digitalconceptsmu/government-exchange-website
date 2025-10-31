<script setup lang="ts">
import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const testimonials = [
  {
    quote: "The course met all of my objectives. The section on Policy design was very interesting and informative.",
    author: "Charlotte Dann",
    role: "BEIS",
  },
  {
    quote: "A great mix of practical advice and background information. Thank you!",
    author: "Proskills UK",
    role: "",
  },
  {
    quote: "really like this content as well - very complete and touches all aspect of the policy development - again, thanks for sharing this information",
    author: "Office of the Chief Information Officer Canada",
    role: "",
  },
  {
    quote: "This was by far the best virtual training session I have completed, the trainer was interesting and made the information easy to understand. The course started on time and finished accordingly.",
    author: "HMPPS",
    role: "",
  },
  {
    quote: "This is probably the best course I have ever attended. Delivered at exactly the right pace, excellent content, excellent facilitator. Even though I am not a civil servants this was delivered in a way that I could find application to my work",
    author: "Great Ormond Street Hospital NHS Foundation Trust",
    role: "",
  },
  {
    quote: "As a new person to policy, I wanted to gain a better understand of how it works, the tools to use and the wide range of factors that need to be considered when developing policy options. I thought todays session really helped with that.",
    author: "DWP",
    role: "",
  },
  {
    quote: "Very valuable insight, thank you!! You've equipped us with a toolkit to keep in mind whilst also being mindful to the challenges faced when applying theory.",
    author: "Agenzija Sapport",
    role: "",
  },
  {
    quote: "There were a great deal of good examples and illustrations that helped embed learning of what could otherwise have been a very technical material.",
    author: "UKCISA",
    role: "",
  },
  {
    quote: "The course met my objectives fully and exceeded my expectations. The trainer was excellent and managed the day expertly. I would recommend Government Exchange to colleagues.",
    author: "Ministry of Justice",
    role: "",
  },
  {
    quote: "I thought that the training course was extremely informative and exceeded my expectations. The Trainer was extremely knowledgeable and ensured that everyone's questions were addressed and answered throughout the day. The course was delivered to a high standard in a virtual format with plenty of breaks throughout the day to ensure time away from the screen. I would highly recommend this course to others.",
    author: "UKRI",
    role: "",
  },
  {
    quote: "Whole day was very informative. Definitely increased my knowledge and increased confidence to share information with colleagues.",
    author: "HMPPS",
    role: "",
  },
  {
    quote: "I enjoyed the programme. The trainer had a really nice style, managed the online delivery aspects really well, gave a really good overview of the steps to developing a strategy, tools that help and key issues and challenges. It worked really well. I felt inspired to move ahead and pick up some of the ideas for my own strategy work.",
    author: "University of Surrey",
    role: "",
  },
]

const currentSlide = ref(0);
const autoPlayInterval = ref<ReturnType<typeof setInterval> | null>(null);
const isAutoPlaying = ref(true);
const slideDirection = ref('next');
const windowWidth = ref(0);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

const itemsPerSlide = computed(() => {
  return windowWidth.value < 768 ? 1 : 6;
});

const totalSlides = computed(() => {
  return Math.ceil(testimonials.length / itemsPerSlide.value);
});

const currentTestimonials = computed(() => {
  const start = currentSlide.value * itemsPerSlide.value;
  return testimonials.slice(start, start + itemsPerSlide.value);
});

const nextSlide = () => {
  slideDirection.value = 'next';
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  slideDirection.value = 'prev';
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index: number) => {
  slideDirection.value = index > currentSlide.value ? 'next' : 'prev';
  currentSlide.value = index;
};

const startAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
  }
  autoPlayInterval.value = setInterval(() => {
    if (isAutoPlaying.value) {
      nextSlide();
    }
  }, 4000);
};

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value;
  if (isAutoPlaying.value) {
    startAutoPlay();
  } else if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
  }
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
  startAutoPlay();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
  }
});
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
          Feedback from our Participants
        </h2>
        <p class="text-lg text-gray-600">
          Hear from participants who have benefited from our training programs
        </p>
      </div>

      <div class="relative max-w-7xl mx-auto">
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          aria-label="Previous testimonials"
        >
          <ChevronLeft class="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
        </button>

        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          aria-label="Next testimonials"
        >
          <ChevronRight class="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
        </button>

        <div class="overflow-hidden">
          <transition :name="slideDirection === 'next' ? 'slide-next' : 'slide-prev'" mode="out-in">
            <div :key="currentSlide" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div
                v-for="(testimonial, index) in currentTestimonials"
                :key="index"
                class="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div class="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote class="w-6 h-6 text-primary" />
                </div>
                <blockquote class="text-base mr-8 text-gray-900 mb-6 italic relative z-10">
                  "{{ testimonial.quote }}"
                </blockquote>
                <div class="border-t border-gray-200 pt-4">
                  <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
                  <p v-if="testimonial.role" class="text-sm text-gray-600">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div class="flex items-center justify-center mt-8 lg:mt-12 space-x-6">
          <div class="flex space-x-2">
            <button
              v-for="index in totalSlides"
              :key="index"
              @click="goToSlide(index - 1)"
              class="w-3 h-3 rounded-full transition-all duration-200"
              :class="[
                currentSlide === index - 1 
                  ? 'bg-primary scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              ]"
              :aria-label="`Go to slide ${index}`"
            />
          </div>

          <button
            @click="toggleAutoPlay"
            class="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <div class="w-8 h-5 bg-gray-300 rounded-full relative transition-colors duration-200"
                 :class="isAutoPlaying ? 'bg-primary/30' : 'bg-gray-300'">
              <div class="absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow"
                   :class="isAutoPlaying ? 'translate-x-4' : 'translate-x-0'">
              </div>
            </div>
            <span class="text-xs font-medium">{{ isAutoPlaying ? 'Auto' : 'Manual' }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.6s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>