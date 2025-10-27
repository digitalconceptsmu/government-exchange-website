<script setup lang="ts">
import { Button } from "~/components/ui/button";

const route = useRoute();
const slug = route.params.slug;

const elearningCourseData: Record<string, any> = {
  "successful-managers-toolkit": {
    title: "The Successful Managers Toolkits For The Public Service",
    breadcrumb: "E-Learning Courses",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    description:
      "A collection of six essential courses designed to enhance your quality, leadership, managerial, communication, and policy skills. Learn through the competencies of the sector, which technology and time strategies are best through this flexible collection course - and build and develop requisite skills for professional productivity and time efficiency.",
    courseDescription: [
      "This suite of courses is designed to provide essential public service knowledge to participants as a collection of vital courses across a comprehensive range of competency areas. This program empowers participants to embark on a path through the competencies of the public sector through a carefully curated combination of courses that will benefit their career journey through public service in this category.",
      "Following the completion of this suite, participants will receive a suite level certificate for this program.",
      "The suite includes our four key The Key Success courses and two additional courses:",
    ],
    courseList: [
      "Managing for Success in the Public Service",
      "Leading for Success in the Public Service",
      "Communicating for Success in the Public Service",
      "Budgeting for Success in the Public Service",
    ],
    certification:
      "Upon successful completion of each course in this suite, you will receive a certificate. Completion Badge And Certificate will be awarded to participants who complete all courses including assessment/quizzes and apply what they have learnt. For those who do not participate in all assessment/quizzes and apply what they have learnt to case studies and discussions, a participant certificate will be provided if desired.",
    learningOutcomes: [
      {
        number: 1,
        title: "Effective time Skills for the Public Service",
        description:
          "Develop the time management skills and competencies required for public service excellence. Learn to prioritize tasks to make better use of your time to enhance productivity and efficiency in your public service career.",
      },
      {
        number: 2,
        title: "Managing for Success in the Public Service",
        description:
          "Learn how to use your time better and shape your work environment in accordance with your core service delivery goals. Develop your competency in results-based planning, strategic communication, priority-setting and data-driven decision making.",
      },
      {
        number: 3,
        title: "Communicating for Success in the Public Service",
        description:
          "Techniques for respectful presentation, clarity, toning and team collaboration. Develop strong written and oral communication skills for effective engagement within the work environment and with external stakeholders.",
      },
      {
        number: 4,
        title: "Leading for Success in the Public Service",
        description:
          "Strategies for managing teams, resource allocation and prioritization, change management, strategic engagement with stakeholders for successful leadership in organisations. Master the art of delegation and employee growth and development.",
      },
      {
        number: 5,
        title: "Budgeting for Success in the Public Service",
        description:
          "Effective budgeting approaches that are applied to make better decisions to enhance organisational effectiveness. Learn budget planning and execution, monitoring and financial resource allocation aligned with strategic goals of the organisation.",
      },
      {
        number: 6,
        title: "Learning for Success in the Public Service",
        description:
          "Courses on learning, understanding, learning styles and application of what we have learnt to enhance our competency and capabilities for better public service and social delivery.",
      },
    ],
    licenses: [
      { count: "5 Licenses", price: "£1000" },
      { count: "10 Licenses", price: "£1500" },
      { count: "20 Licenses", price: "£2000" },
      { count: "50 Licenses", price: "£4000" },
      { count: "100 Licenses", price: "£7000" },
      { count: "200+ Licenses", price: "£12000" },
    ],
    freeEvaluation: {
      title: "Free Evaluation Period",
      description:
        "Evaluation is for the usage of your courses to check and confirm that the courses are suited to your needs and help you make a decision on your professional growth and development. It is a platform for you to preview content and features before committing to a paid subscription or implementation in your organisation.",
    },
    relatedCourses: [
      {
        title: "Effective Policy Development Suite for the Public Service",
        description:
          "Develop the foundational and advanced policy competencies for effective policy developmen...",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop",
      },
      {
        title: "Core Skills for Public Service Professionals",
        description:
          "Essential skills development for public service professionals including communication,...",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      },
      {
        title: "Advanced Public Service Leadership Programme",
        description:
          "Advanced leadership capabilities for senior public service professionals and emerging...",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      },
    ],
  },
};

const course = elearningCourseData[slug as string];

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
      content: course.description,
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navigation />
    <main>
      <div class="text-white py-16 relative overflow-hidden">
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/images/in_hourse_training.jpg')"
        ></div>

        <div class="absolute inset-0 bg-primary/90"></div>

        <div class="container mx-auto px-4 max-w-7xl relative z-10">
          <div class="mb-4">
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">E-Learning Courses</h1>
          <div class="flex items-center gap-2 text-white/80 text-sm">
            <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
            <span>-</span>
            <span>{{ course.breadcrumb }}</span>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl py-12">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <section>
              <h2 class="text-3xl text-gray-900 mb-6">
                {{ course.title }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ course.description }}
              </p>

              <div class="bg-primary rounded-lg p-12 mb-8">
                <div class="flex items-center gap-8">
                  <!-- Left: Card -->
                  <div class="flex-shrink-0">
                    <div class="bg-white rounded-2xl p-8 shadow-2xl w-72">
                      <div class="text-center">
                        <div class="text-2xl font-bold text-primary mb-2">
                          Government<br>Exchange
                        </div>
                        <div class="text-sm text-gray-600 font-medium">Professional Development</div>
                      </div>
                    </div>
                  </div>

                  <!-- Right: Images Grid -->
                  <div class="flex-1">
                    <div class="grid grid-cols-3 gap-6">
                      <div
                        v-for="i in 6"
                        :key="i"
                        class="aspect-square rounded-full overflow-hidden border-4 border-white/20"
                      >
                        <img
                          :src="`/images/Hero ${i}.jpeg`"
                          alt="Course illustration"
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h3 class="text-2xl text-gray-900 mb-6">
                Course Description
              </h3>
              <div class="space-y-4 mb-6">
                <p
                  v-for="(paragraph, index) in course.courseDescription"
                  :key="index"
                  class="text-gray-700 leading-relaxed"
                >
                  {{ paragraph }}
                </p>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(item, index) in course.courseList"
                  :key="index"
                  class="flex items-center gap-3"
                >
                  <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>
            </section>

            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h3 class="text-2xl text-gray-900 mb-6">Certification</h3>
              <p class="text-gray-700 leading-relaxed">
                {{ course.certification }}
              </p>
            </section>

            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h3 class="text-2xl text-gray-900 mb-6">
                Learning Outcomes
              </h3>
              <div class="space-y-6">
                <div
                  v-for="outcome in course.learningOutcomes"
                  :key="outcome.number"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-semibold flex-shrink-0"
                    >
                      {{ outcome.number }}
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        {{ outcome.title }}
                      </h4>
                      <p class="text-gray-700 text-sm leading-relaxed">
                        {{ outcome.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl text-gray-900">Related Courses</h3>
                <div class="flex gap-2">
                  <button
                    class="w-10 h-10 rounded bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    class="w-10 h-10 rounded bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              </div>
              <div class="grid md:grid-cols-3 gap-6">
                <div
                  v-for="(related, index) in course.relatedCourses"
                  :key="index"
                  class="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
                >
                  <div class="aspect-video overflow-hidden bg-gray-100">
                    <img
                      :src="related.image"
                      :alt="related.title"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="p-6 flex flex-col flex-grow">
                    <h4 class="font-semibold text-gray-900 mb-2">
                      {{ related.title }}
                    </h4>
                    <p class="text-sm text-gray-600 mb-4">
                      {{ related.description }}
                    </p>
                    <Button class="w-full bg-yellow-500 hover:bg-yellow-600 mt-auto">
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="lg:col-span-1">
            <div class="space-y-6 sticky top-32">
              <div class="bg-white rounded-xl border shadow-sm p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-6">
                  Annual Licenses
                </h3>
                <div class="space-y-4">
                  <div
                    v-for="(license, index) in course.licenses"
                    :key="index"
                    class="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span class="text-gray-700">{{ license.count }}</span>
                    <span class="font-semibold text-gray-900">{{ license.price }}</span>
                  </div>
                </div>
              </div>

              <div class="bg-gray-100 rounded-xl border p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  {{ course.freeEvaluation.title }}
                </h3>
                <p class="text-sm text-gray-700 leading-relaxed mb-6">
                  {{ course.freeEvaluation.description }}
                </p>
                <div class="space-y-3">
                  <Button class="w-full bg-yellow-500 hover:bg-yellow-600" size="lg">
                    LEARN MORE
                  </Button>
                  <Button
                    variant="secondary"
                    class="w-full bg-gray-700 hover:bg-gray-800 text-white"
                    size="lg"
                  >
                    ENROLL NOW
                  </Button>
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
