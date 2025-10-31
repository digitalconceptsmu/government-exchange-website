<script setup lang="ts">
import { CheckCircle, ChevronLeft, ChevronRight, Lightbulb, Quote, Target, Users } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from 'vue';
import { Button } from "~/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in all our training programs",
  },
  {
    icon: Target,
    title: "Relevance",
    description:
      "Training tailored to current challenges in Government and public service",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Led by experienced professionals and former civil servants",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "At the forefront of thinking in Government and skills development",
  },
];

const offerings = [
  {
    text: "Particularly relevant for Civil Servants, Agency and Non Departmental Public Body staff",
  },
  {
    text: "Useful for those from the private, voluntary and wider public sectors involved in Government work",
  },
  {
    text: "Training tailored to the needs of your organisation through regular consultation",
  },
  {
    text: "Entirely relevant, up-to-date training covering core Professional Skills for Government",
  },
  {
    text: "Best possible value for money with budget-conscious approach",
  },
  {
    text: "Robust evaluation system measuring knowledge and skills increases",
  },
];

const testimonials = [
  {
    quote:
      "The full-day virtual session was conducted well. The class number was small enough to allow for engagement, activities and content was sufficient, and the comfort breaks were appropriately timed. the trainer was excellent as usual. His facilitation approach to the participants, vast knowledge and international experience is beneficial and enhances the training experience.",
    author: "Cayman Islands Government",
    organization: "",
  },
  {
    quote: "I enjoyed the course and learnt a lot. Trainer was a very able trainer with a great manner ensuring everyone was able to ask any questions they needed to and to receive a comprehensive response.",
    author: "Lincolnshire County Council",
    organization: "",
  },
  {
    quote:
      "The programme was excellent. Very relatable to my job and I could see how I could put some of this to immediate use to address concerns about a project I've been asked to sponsor. The trainer was excellent and the session was delivered extremely well. Maybe as good if not better than face to face learning.",
    author: "Department for Work and Pensions",
    organization: "",
  },
  {
    quote:
      "Clearly an excellent trainer - I think in addition to the Strategic Thinking skills I've learned a few tips about presenting and engaging with an audience!",
    author: "University of Oxford",
    organization: "",
  },
  {
    quote:
      "I thought the course was really interesting and that the trainer managed to get through a great deal of material. His delivery was excellent - really clear and engaging.",
    author: "Standards Commission for Scotland",
    organization: "",
  },
  {
    quote:
      "Excellent programme with key takeaways that will impact my approach to strategic planning and thinking about high-level organisational change.",
    author: "Financial Services Commission, Barbados",
    organization: "",
  },
  {
    quote:
      "I enjoyed the day. I learned about structure of submissions and briefings, what to do and, possibly more important, what not to do. I was particularly interested in oral briefings and the exercise on this was useful as the range of examples highlighted areas for improvement. I also thought that it was useful being in an environment where other participants were from different organisations. I will be recommending it to colleagues.",
    author: "Environment Agency",
    organization: "",
  },
  {
    quote:
      "Exceeded my expectations. I will take away lessons learnt in both my personal and professional life.",
    author: "Ofgem",
    organization: "",
  },
  {
    quote:
      "Friendly, professional and engaging. Very relevant content, will be great for someone new to this.",
    author: "DVSA",
    organization: "",
  },
  {
    quote:
      "It was very useful. I feel more confident in drafting good briefings and submissions.",
    author: "Department of Health",
    organization: "",
  },
  {
    quote:
      "I have been to three Westminster Explained courses, however this Government Exchange course was more enjoyable.",
    author: "Her Majesty's Court Service",
    organization: "",
  },
  {
    quote:
      "The course was engaging, well thought out and provided useful insight. The trainer was excellent at keeping the participants alert and everyone kept their cameras on throughout. The subject matter expanded my knowledge and I felt that I had learned more about the specifics of submissions and briefings, especially in the UK gov context.",
    author: "Advanced Propulsion Centre UK",
    organization: "",
  },
];

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
  }, 5000);
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
  <div id="about">
    <section class="py-16 lg:px-14 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-36 items-start">
          <div class="space-y-6">
            <h2 class="text-4xl">About us</h2>
            <p class="text-gray-700 leading-relaxed">The training division of the Centre for Parliamentary Studies, providing excellence in public service education</p>
     
            <p class="text-gray-700 leading-relaxed">
              Government Exchange is the training division of the Centre for
              Parliamentary Studies.
            </p>

            <p class="text-gray-700 leading-relaxed">
              Based at the centre of Whitehall, and with strong links to
              Parliament and Government through our Advisory Board, we are
              acutely aware of the current challenges being faced in the civil
              service and wider public sector.
            </p>

            <p class="text-gray-700 leading-relaxed">
              We provide training that equips you with the relevant skills and
              knowledge to respond to these in your workplace.
            </p>

            <p class="text-gray-700 leading-relaxed">
              Our courses are particularly relevant for Civil Servants, Agency
              and Non Departmental Public Body staff, but are equally useful for
              those from the private, voluntary and wider public sectors
              involved in, or with an interest in any aspect of the work of
              Government.
            </p>

            <p class="text-gray-700 leading-relaxed">
              Through regular consultation and conducting thorough training
              needs analyses, we ensure that our training is entirely relevant,
              up-to-date, and tailored to the needs of your organisation. Our
              training also covers the core Professional Skills for Government.
            </p>

            <p class="text-gray-700 leading-relaxed">
              We fully understand current budgetary pressures and therefore
              ensure that our courses offer the best possible value for money.
              In order for you to guarantee the best possible return on
              investment, we have also developed a learning evaluation system
              that measures the increase in knowledge or skills that occurs,
              enabling you to accurately assess the impact of the training.
            </p>
          </div>

          <div class="lg:top-8">
            <img
              src="/images/about_us_new.png"
              alt="Government Exchange Brochure"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 lg:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-4xl lg:text-5xl text-gray-900 mb-4">Our Values</h2>
          <p class="text-lg text-gray-600">
            We are at the forefront of thinking in Government and skills
            development
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center lg:items-start"
          >
            <div
              class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
            >
              <component :is="value.icon" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-5xl text-gray-900 mb-4">What We Offer</h2>
          <p class="text-lg text-gray-600">
            Our courses are designed to meet the specific needs of public sector
            professionals
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            v-for="(offering, index) in offerings"
            :key="index"
            class="flex gap-4 items-start bg-gray-50 rounded-lg p-6"
          >
            <div class="flex-shrink-0 mt-1">
              <CheckCircle class="w-6 h-6 text-primary" />
            </div>
            <p class="text-gray-700">{{ offering.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-5xl text-gray-900 mb-4">Feedback from our Participants</h2>
          <p class="text-lg text-gray-600">
            Feedback from civil servants and public sector professionals
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
                  class="bg-white p-4 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div class="mb-6 flex items-start">
                    <p class="text-gray-900 italic">"{{ testimonial.quote }}"</p>
                    <div class="bg-primary/10 p-3 rounded-full">
                      <Quote class="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div class="border-t pt-4">
                    <p class="font-semibold text-gray-900">
                      {{ testimonial.author }}
                    </p>
                    <p class="text-sm text-gray-600">
                      {{ testimonial.organization }}
                    </p>
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

    <section>
      <div
        class="bg-primary py-28 px-6 flex flex-col gap-6 items-center justify-center"
      >
        <NuxtLink to="/courses">
          <Button variant="light" size="xl">View Course list</Button>
        </NuxtLink>

        <p class="text-white mt-4">
          Have questions or need more information? Get in touch with us
        </p>
        <div class="flex items-center gap-4">
          <a
            href="mailto:enquiry@governmentexchange.org"
          >
            <Button variant="light" size="xl">Email Us</Button>
          </a>
          <a
            href="tel:02031378632"
          >
            <Button variant="outline" size="xl">Contact us</Button>
          </a>
        </div>
      </div>
    </section>
  </div>
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