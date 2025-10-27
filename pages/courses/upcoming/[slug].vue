<script setup lang="ts">
import { ArrowDownToLine, Award, Calendar, CheckCircle, Clock, FileText, Mail, MapPin, Phone, Users } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { Button } from "~/components/ui/button";

const route = useRoute();
const slug = route.params.slug;
const showFormatDropdown = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    showFormatDropdown.value = false;
  }
};

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showFormatDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscapeKey);
});

const upcomingCourseData: Record<string, any> = {
  "leadership-and-management": {
    title: "Professional Certificate in Leadership and Management",
    duration: "6 days (November 2025)",
    dates: "1st - 6th November 2025",
    location: "Virtual Learning",
    time: "09:00 - 17:00",
    price: "£2,495",
    priceNote: "+ VAT per person",
    overview: [
      "The Professional Certificate in Leadership and Management is a comprehensive programme designed specifically for civil servants and public sector professionals who aspire to take on leadership roles or enhance their current leadership capabilities.",
      "This intensive 6-day programme combines theoretical frameworks with practical application, enabling participants to develop the essential skills needed to lead effectively in the complex and dynamic environment of government and public service.",
      "Through interactive workshops, case studies, and peer learning, participants will explore contemporary leadership challenges, develop strategic thinking capabilities, and build confidence in their ability to drive positive change within their organizations.",
    ],
    modules: [
      {
        title: "Module 1: Leadership Fundamentals",
        items: [
          "Understanding leadership styles and approaches",
          "Self-awareness and emotional intelligence",
          "Building trust and credibility",
          "Leading by example and influence",
        ],
      },
      {
        title: "Module 2: Strategic Thinking and Decision Making",
        items: [
          "Strategic planning and execution",
          "Critical thinking and problem solving",
          "Risk assessment and management",
          "Data-driven decision making",
        ],
      },
      {
        title: "Module 3: People Management and Team Development",
        items: [
          "Building high-performing teams",
          "Effective delegation and empowerment",
          "Performance management and feedback",
          "Coaching and mentoring skills",
        ],
      },
      {
        title: "Module 4: Communication and Stakeholder Engagement",
        items: [
          "Effective communication strategies",
          "Stakeholder mapping and engagement",
          "Influencing and negotiation skills",
          "Presenting with impact",
        ],
      },
      {
        title: "Module 5: Change Management and Innovation",
        items: [
          "Leading organizational change",
          "Managing resistance and building buy-in",
          "Fostering innovation and creativity",
          "Continuous improvement mindset",
        ],
      },
      {
        title: "Module 6: Professional Development and Impact",
        items: [
          "Personal leadership development plan",
          "Measuring leadership effectiveness",
          "Building a leadership legacy",
          "Sustaining leadership excellence",
        ],
      },
    ],
    benefits: [
      {
        text: "Develop advanced leadership and management capabilities",
      },
      {
        text: "Gain practical skills immediately applicable to your role",
      },
      {
        text: "Learn from experienced practitioners and senior leaders",
      },
      {
        text: "Network with fellow civil servants and government professionals",
      },
      {
        text: "Receive a professional certificate upon completion",
      },
      {
        text: "Access to ongoing resources and alumni network",
      },
      {
        text: "Build confidence in leading teams and driving change",
      },
      {
        text: "Understand best practices in public sector leadership",
      },
    ],
    testimonials: [
      {
        quote:
          "This programme transformed my approach to leadership. The practical tools and frameworks have been invaluable in my role.",
        author: "Sarah Mitchell",
        position: "Director, Department for Education",
      },
      {
        quote:
          "An excellent investment in professional development. The course content is relevant and immediately applicable to the challenges we face in government.",
        author: "James Patterson",
        position: "Deputy Director, Cabinet Office",
      },
    ],
    courseInfo: [
      {
        icon: "Users",
        label: "Class Size",
        value: "Maximum 20 participants",
      },
      {
        icon: "Award",
        label: "Certification",
        value: "Professional Certificate awarded",
      },
      {
        icon: "FileText",
        label: "Materials",
        value: "Comprehensive course pack included",
      },
    ],
  },
};

const course = upcomingCourseData[slug as string];

if (!course) {
  throw createError({
    statusCode: 404,
    statusMessage: "Course not found",
  });
}

useHead({
  title: `${course.title} - Government Exchange`,
  meta: [
    {
      name: "description",
      content: course.overview[0],
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navigation />
    <main>
      <div class="text-white py-16 relative overflow-hidden">
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/images/in_hourse_training.jpg')"
        ></div>

        <!-- Semi-transparent Overlay -->
        <div class="absolute inset-0 bg-primary/90"></div>

        <div class="container mx-auto px-4 max-w-7xl relative z-10">
          <div class="mb-4">
          </div>
          <NuxtLink
            to="/courses/upcoming"
            class="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            ← Back to Upcoming Courses
          </NuxtLink>
          <h1 class="text-4xl lg:text-5xl font-bold">
            {{ course.title }}
          </h1>
        </div>
      </div>

      <div class="bg-white border-b">
        <div class="container mx-auto px-4 max-w-7xl py-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div class="flex items-start gap-3">
              <FileText class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div class="text-gray-600 text-xs mb-1">Duration</div>
                <div class="font-medium text-gray-900">{{ course.duration }}</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Calendar class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div class="text-gray-600 text-xs mb-1">Dates</div>
                <div class="font-medium text-gray-900">{{ course.dates }}</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div class="text-gray-600 text-xs mb-1">Location</div>
                <div class="font-medium text-gray-900">{{ course.location }}</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Clock class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div class="text-gray-600 text-xs mb-1">Time</div>
                <div class="font-medium text-gray-900">{{ course.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl py-12">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h2 class="text-2xl text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Programme Overview
              </h2>
              <div class="space-y-4">
                <p
                  v-for="(paragraph, index) in course.overview"
                  :key="index"
                  class="text-gray-700 leading-relaxed"
                >
                  {{ paragraph }}
                </p>
              </div>
            </section>

            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h2 class="text-2xl text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Programme Modules
              </h2>
              <div class="space-y-6">
                <div
                  v-for="(module, index) in course.modules"
                  :key="index"
                  class="border-l-4 border-primary pl-6"
                >
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    {{ module.title }}
                  </h3>
                  <ul class="space-y-2">
                    <li
                      v-for="(item, itemIndex) in module.items"
                      :key="itemIndex"
                      class="flex items-start gap-3"
                    >
                      <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span class="text-gray-700">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h2 class="text-2xl text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Key Benefits
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  v-for="(benefit, index) in course.benefits"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{{ benefit.text }}</span>
                </div>
              </div>
            </section>

            <section class="bg-gray-50 border rounded-xl shadow-sm p-8">
              <h2 class="text-2xl text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                What Participants Say
              </h2>
              <div class="space-y-6">
                <div
                  v-for="(testimonial, index) in course.testimonials"
                  :key="index"
                  class="bg-white shadow-sm border p-6 rounded-xl flex flex-col justify-center gap-3"
                >
                  <p class="text-gray-700 italic">
                    "{{ testimonial.quote }}"
                  </p>
                  <div class="w-full h-[1px] bg-gray-200"></div>
                  <div>
                    <div class="font-semibold text-gray-900">
                      {{ testimonial.author }}
                    </div>
                    <div class="text-sm text-gray-600">
                      {{ testimonial.position }}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="lg:col-span-1">
            <div class="space-y-6 sticky top-32">
              <div class="bg-primary rounded-xl p-6 text-white">
                <h3 class="text-xl font-semibold mb-4">Book Your Place</h3>

                <div class="mb-6">
                  <div class="text-sm text-white/80 mb-1">Course Fee</div>
                  <div class="text-4xl font-bold mb-1">{{ course.price }}</div>
                  <div class="text-sm text-white/80">{{ course.priceNote }}</div>
                </div>

                <div class="space-y-3">
                  <Button variant="light" class="w-full" size="lg">
                    Register Interest
                  </Button>
                  <div class="relative" ref="dropdownRef">
                    <Button
                      variant="light"
                      class="w-full"
                      size="lg"
                      @click="showFormatDropdown = !showFormatDropdown"
                    >
                      <ArrowDownToLine class="w-5 h-5" />
                      Click for Registration Form
                    </Button>
                    <div
                      v-if="showFormatDropdown"
                      class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10"
                    >
                      <a
                        href="#"
                        class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        @click.prevent="showFormatDropdown = false"
                      >
                        <FileText class="w-5 h-5 text-primary" />
                        <div>
                          <div class="text-sm font-medium text-gray-900">Word Document</div>
                          <div class="text-xs text-gray-500">Download .docx format</div>
                        </div>
                      </a>
                      <div class="w-full h-[1px] bg-gray-200"></div>
                      <a
                        href="#"
                        class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        @click.prevent="showFormatDropdown = false"
                      >
                        <FileText class="w-5 h-5 text-primary" />
                        <div>
                          <div class="text-sm font-medium text-gray-900">PDF Document</div>
                          <div class="text-xs text-gray-500">Download .pdf format</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl border shadow-sm p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                  Course Information
                </h3>
                <div class="space-y-4">
                  <div
                    v-for="(info, index) in course.courseInfo"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <component
                      :is="info.icon === 'Users' ? Users : info.icon === 'Award' ? Award : FileText"
                      class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        {{ info.label }}
                      </div>
                      <div class="text-sm text-gray-600">{{ info.value }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white border rounded-xl shadow-sm p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                  Need More Information?
                </h3>
                <p class="text-sm text-gray-600 mb-6">
                  Our team is here to answer any questions you may have about this
                  programme.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-3 text-sm">
                    <Phone class="w-4 h-4 text-primary" />
                    <span class="text-gray-700">020 3137 8632</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <Mail class="w-4 h-4 text-primary" />
                    <span class="text-gray-700">enquiry@governmentexchange.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
