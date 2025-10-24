<script setup lang="ts">
import { Calendar } from "lucide-vue-next";
import { Button } from "~/components/ui/button";

const upcomingCourses = {
  november: [
    {
      title: "Professional Certificate in Leadership and Management",
      date: "1st - 6th November 2025",
    },
    {
      title: "Professional Certificate in International Regulatory Affairs",
      date: "5th - 7th November 2025",
    },
    {
      title: "Professional Certificate in Legislative Processes and Drafting",
      date: "11th - 13th November 2025",
    },
    {
      title: "AI in Communication & Public Trust",
      date: "11th November 2025",
    },
    {
      title: "Applied AI Tools for Government",
      date: "12th November 2025",
    },
    {
      title: "Professional Certificate in Disaster Risk Reduction",
      date: "17th - 19th November 2025",
    },
    {
      title: "Professional Certificate in Public Financial Management",
      date: "17th - 19th November 2025",
    },
    {
      title: "Professional Certificate in Strategic Policy Planning",
      date: "19th - 21st November 2025",
    },
  ],
  december: [
    {
      title: "Professional Certificate - Introduction to Parliament",
      date: "1st - 3rd December 2025",
    },
    {
      title: "Professional Certificate in Economic Development",
      date: "1st - 3rd December 2025",
    },
    {
      title: "Professional Certificate in Project and Programme Management",
      date: "1st - 3rd December 2025",
    },
    {
      title: "Geopolitical Trends & AI Strategy",
      date: "2nd December 2025",
    },
    {
      title: "AI in Public Service Awareness",
      date: "4th December 2025",
    },
    {
      title: "Artificial Intelligence (AI) in Public Service Awareness Course",
      date: "4th December 2025",
    },
  ],
};
</script>

<template>
  <section id="upcoming" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="mb-12">
          <p class="text-gray-700 leading-relaxed">
            The following courses are currently accepting delegate registrations. Click on any course that interest you or your organization for more details.
          </p>
        </div>

        <div class="mb-12">
          <div class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">
              November
            </h2>
            <div class="w-20 h-1 bg-primary"></div>
          </div>

          <div class="bg-white rounded-2xl border shadow-sm overflow-clip">
            <div
              v-for="(course, index) in upcomingCourses.november"
              :key="index"
              class="border-b border-gray-200 last:border-b-0"
            >
              <a
                href="#"
                class="flex justify-between items-center px-8 py-6 hover:bg-gray-50 transition-colors group"
              >
                <h3 class="text-primary group-hover:underline font-medium">
                  {{ course.title }}
                </h3>
                <div class="flex items-center gap-2 text-gray-600 text-sm flex-shrink-0 ml-8">
                  <Calendar class="w-4 h-4" />
                  <span>{{ course.date }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <div class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">
              December
            </h2>
            <div class="w-20 h-1 bg-primary"></div>
          </div>

          <div class="bg-white rounded-2xl border shadow-sm overflow-clip">
            <div
              v-for="(course, index) in upcomingCourses.december"
              :key="index"
              class="border-b border-gray-200 last:border-b-0"
            >
              <a
                href="#"
                class="flex justify-between items-center px-8 py-6 hover:bg-gray-50 transition-colors group"
              >
                <h3 class="text-primary group-hover:underline font-medium">
                  {{ course.title }}
                </h3>
                <div class="flex items-center gap-2 text-gray-600 text-sm flex-shrink-0 ml-8">
                  <Calendar class="w-4 h-4" />
                  <span>{{ course.date }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-primary rounded-lg p-12 text-white text-center">
          <h3 class="text-3xl font-semibold mb-4">
            Ready to Register?
          </h3>
          <p class="text-white/90 mb-8 max-w-2xl mx-auto">
            Secure your place on one of our upcoming courses. For registration inquiries or more information, please get in touch with our team.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <Button
              size="xl"
              variant="light"
            >
              Contact Us
            </Button>
            <Button
              size="xl"
              variant="outline"
            >
              Call: 020 3137 8632
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
