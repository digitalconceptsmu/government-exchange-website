<script setup lang="ts">
import { ArrowDownToLine, Calendar, CheckCircle, FileText, MapPin } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { Button } from "~/components/ui/button";

const route = useRoute();
const slug = route.params.slug;

const showDropdown1 = ref(false);
const showDropdown2 = ref(false);
const dropdown1Ref = ref<HTMLElement | null>(null);
const dropdown2Ref = ref<HTMLElement | null>(null);

const toggleDropdown1 = () => {
  showDropdown1.value = !showDropdown1.value;
  showDropdown2.value = false;
};

const toggleDropdown2 = () => {
  showDropdown2.value = !showDropdown2.value;
  showDropdown1.value = false;
};

const closeDropdowns = () => {
  showDropdown1.value = false;
  showDropdown2.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  if (
    dropdown1Ref.value &&
    !dropdown1Ref.value.contains(target) &&
    dropdown2Ref.value &&
    !dropdown2Ref.value.contains(target)
  ) {
    closeDropdowns();
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape" || event.key === "Enter") {
    closeDropdowns();
  }
};

const downloadForm = (format: "pdf" | "word") => {
  console.log(`Downloading ${format} form for course: ${slug}`);
  closeDropdowns();
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleKeyDown);
});

const upcomingCourseData: Record<string, any> = {
  "leadership-and-management": {
    title: "Professional Certificate in Leadership and Management",
    duration: "6 days (November 2025)",
    dates: "1st - 6th November 2025",
    location: "Virtual Learning",
    venue: "Virtual Learning",
    time: "09:00 - 17:00",
    price: "£2,495",
    priceNote: "+ VAT per person",
    description: [
      "The Professional Certificate in Leadership and Management is a comprehensive programme designed specifically for civil servants and public sector professionals who aspire to take on leadership roles or enhance their current leadership capabilities."
    ],
    overview: [
      "This intensive 6-day programme combines theoretical frameworks with practical application, enabling participants to develop the essential skills needed to lead effectively in the complex and dynamic environment of government and public service.",
      "Through interactive workshops, case studies, and peer learning, participants will explore contemporary leadership challenges, develop strategic thinking capabilities, and build confidence in their ability to drive positive change within their organizations."
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
    accreditation: {
      title: "This course has been approved by",
      logo: "/images/logos/institute-of-leadership.png",
      description: "The Institute of Leadership has approved this training course. The Institute combines years of research, knowledge and innovation to champion the leadership agenda for aLL and since 1947 they have carried out extensive research into the knowledge, skills, attitudes, behaviours and values of great leadership. Based on The Institute's core leadership values, this course meets the standard that enables learners who have completed to access the following benefits:",
      benefits: [
        {
          text: "Membership of The Institute of Leadership will be in receipt of an ICPS/The Institute joint Certificate of achievement for the course"
        },
        {
          text: "Access to a raft of resources to help you with your continuing professional development, including an award-winning library of e-Learning materials"
        },
        {
          text: "A community of over 70,000 members worldwide enabling you to collaborate and grow your knowledge and skills"
        },
        {
          text: "Receipt of weekly news updates, podcasts and cutting-edge research and a monthly published journal and invitations to topical webinars"
        },
        {
          text: "Authorisation to use approved letters AMInstL (Associate Member of The Institute of Leadership) after your name for business correspondence"
        }
      ]
    },
    relatedCourses: [
      { title: "Working With the New Parliament", link: "#" },
      { title: "How Government Works: the New Coalition", link: "#" },
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
      <div>
        <div class="text-white py-16 relative overflow-hidden">
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style="background-image: url('/images/banner/in_hourse_training.jpg')"
          ></div>

          <div class="absolute inset-0 bg-primary/90"></div>

          <div class="container mx-auto px-4 max-w-7xl relative z-10">
            <div class="mb-4"></div>
            <NuxtLink
              to="/courses"
              class="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              ← Back to Courses
            </NuxtLink>
            <h1 class="text-4xl lg:text-5xl font-bold">
              {{ course.title }}
            </h1>
          </div>
        </div>

        <div class="bg-white border-b">
          <div class="container mx-auto px-4 max-w-7xl py-6">
            <div class="flex flex-wrap gap-6 text-sm">
              <div v-if="course.dates" class="flex items-center gap-2">
                <Calendar class="w-5 h-5 text-primary" />
                <div>
                  <div class="text-gray-600 text-xs">Date</div>
                  <div class="font-medium">{{ course.dates }}</div>
                </div>
              </div>
              <div v-if="course.venue" class="flex items-center gap-2">
                <MapPin class="w-5 h-5 text-primary" />
                <div>
                  <div class="text-gray-600 text-xs">Venue</div>
                  <div class="font-medium">{{ course.venue }}</div>
                </div>
              </div>
              <div class="flex items-center gap-2 relative" ref="dropdown1Ref">
                <Button
                  class="inline-flex items-center gap-2"
                  @click="toggleDropdown1"
                >
                  <ArrowDownToLine class="w-5 h-5" />
                  Click for Registration Form
                </Button>
                <div
                  v-if="showDropdown1"
                  class="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-3 min-w-[240px] z-50"
                >
                  <button
                    @click="downloadForm('word')"
                    class="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start gap-3 transition-colors"
                  >
                    <FileText class="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div class="text-sm font-medium text-gray-900">Word Document</div>
                      <div class="text-xs text-gray-500">Download .docx format</div>
                    </div>
                  </button>
                  <button
                    @click="downloadForm('pdf')"
                    class="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start gap-3 transition-colors"
                  >
                    <FileText class="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div class="text-sm font-medium text-gray-900">PDF Document</div>
                      <div class="text-xs text-gray-500">Download .pdf format</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4 max-w-7xl py-12">
          <div class="grid lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-8">
              <section class="bg-white border rounded-xl shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Course Overview
                </h2>

                <div v-if="Array.isArray(course.description)" class="space-y-4 mb-6">
                  <p
                    v-for="(paragraph, index) in course.description"
                    :key="index"
                    class="text-gray-700 leading-relaxed"
                  >
                    {{ paragraph }}
                  </p>
                </div>
                <p v-else class="text-gray-700 leading-relaxed mb-6">
                  {{ course.description }}
                </p>

                <div v-if="course.overview">
                  <div v-if="Array.isArray(course.overview)" class="space-y-4">
                    <p
                      v-for="(paragraph, index) in course.overview"
                      :key="index"
                      class="text-gray-700 leading-relaxed"
                    >
                      {{ paragraph }}
                    </p>
                  </div>
                  <div v-else class="text-gray-700 leading-loose course-overview-content" v-html="course.overview" />
                </div>
              </section>

              <section v-if="course.benefits && course.benefits.length > 0" class="bg-white border rounded-xl shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Learning Outcomes
                </h2>
                <div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <div
                    v-for="(benefit, index) in course.benefits"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p class="text-gray-700">{{ benefit.text }}</p>
                  </div>
                </div>
              </section>

              <section v-if="course.modules && course.modules.length > 0" class="bg-white border rounded-xl shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Agenda
                </h2>
                <div class="space-y-6">
                  <div
                    v-for="(module, index) in course.modules"
                    :key="index"
                    class="border-l-4 border-primary pl-6 py-2"
                  >
                    <h3 class="font-semibold text-gray-900 mb-3">
                      {{ module.title }}
                    </h3>
                    <ul v-if="module.items" class="space-y-2">
                      <li
                        v-for="(item, itemIndex) in module.items"
                        :key="itemIndex"
                        class="flex items-start gap-3"
                      >
                        <CheckCircle class="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span class="text-sm text-gray-700">{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section class="rounded-lg p-8 text-white text-center">
                <div class="relative inline-block" ref="dropdown2Ref">
                  <Button
                    size="xl"
                    class="inline-flex items-center gap-2"
                    @click="toggleDropdown2"
                  >
                    <ArrowDownToLine class="w-5 h-5" />
                    Click for Registration Form
                  </Button>
                  <div
                    v-if="showDropdown2"
                    class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg py-3 min-w-[240px] z-50"
                  >
                    <button
                      @click="downloadForm('word')"
                      class="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start gap-3 transition-colors"
                    >
                      <FileText class="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div class="text-sm font-medium text-gray-900">Word Document</div>
                        <div class="text-xs text-gray-500">Download .docx format</div>
                      </div>
                    </button>
                    <button
                      @click="downloadForm('pdf')"
                      class="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start gap-3 transition-colors"
                    >
                      <FileText class="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div class="text-sm font-medium text-gray-900">PDF Document</div>
                        <div class="text-xs text-gray-500">Download .pdf format</div>
                      </div>
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <div class="lg:col-span-1">
              <div class="space-y-6 top-32">
                <div v-if="course.testimonials && course.testimonials.length > 0" class="bg-white border rounded-xl shadow-sm p-6">
                  <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                    What Learners Say
                  </h2>
                  <div class="space-y-4">
                    <div
                      v-for="(testimonial, index) in course.testimonials"
                      :key="index"
                      class="border-l-4 border-primary pl-4 py-2"
                    >
                      <p class="text-sm text-gray-700 italic mb-2">
                        "{{ testimonial.quote }}"
                      </p>
                      <p class="text-xs text-gray-600">— {{ testimonial.author }}</p>
                    </div>
                  </div>
                </div>

                <div v-if="course.relatedCourses && course.relatedCourses.length > 0" class="bg-white border rounded-xl shadow-sm p-6">
                  <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                    Related Courses
                  </h2>
                  <div class="space-y-3">
                    <NuxtLink
                      v-for="(relatedCourse, index) in course.relatedCourses"
                      :key="index"
                      :to="relatedCourse.link"
                      class="flex items-center gap-2 text-primary group"
                    >
                      <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
                      <span class="text-sm hover:underline">{{ relatedCourse.title }}</span>
                    </NuxtLink>
                  </div>
                </div>

                <div class="bg-white border rounded-xl shadow-sm p-6">
                  <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                    Need More Information?
                  </h2>
                  <p class="text-gray-700 mb-6">
                    Please contact our team for any assistant.
                  </p>
                  <div class="space-y-4">
                    <a
                      href="tel:02031378632"
                      class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>020 3137 8632</span>
                    </a>
                    <a
                      href="mailto:enquiry@governmentexchange.org"
                      class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>enquiry@governmentexchange.org</span>
                    </a>
                  </div>
                </div>

                <!-- Accreditation Section -->
                <div v-if="course.accreditation" class="bg-white border rounded-xl shadow-sm p-6">
                  <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                    {{ course.accreditation.title }}
                  </h2>
                  <div class="mb-6">
                    <img
                      :src="course.accreditation.logo"
                      :alt="course.accreditation.title"
                      class="w-full max-w-md mx-auto"
                    />
                  </div>
                  <div class="space-y-4 text-gray-700">
                    <p class="leading-relaxed">
                      {{ course.accreditation.description }}
                    </p>
                    <ul v-if="course.accreditation.benefits && course.accreditation.benefits.length > 0" class="space-y-3">
                      <li
                        v-for="(benefit, index) in course.accreditation.benefits"
                        :key="index"
                        class="flex items-start gap-2"
                      >
                        <span class="text-primary mt-1">▸</span>
                        <span class="text-sm">{{ benefit.text }}</span>
                      </li>
                    </ul>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.course-overview-content :deep(p) {
  margin-bottom: 1rem;
}

.course-overview-content :deep(p:last-child) {
  margin-bottom: 0;
}

.course-overview-content :deep(br) {
  display: block;
  content: "";
  margin-bottom: 1rem;
}
</style>
