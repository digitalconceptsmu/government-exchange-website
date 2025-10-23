<script setup lang="ts">
import { AlertCircle, Calendar, CheckCircle } from "lucide-vue-next";
import { Button } from "~/components/ui/button";

const keyFeatures = [
  "Training and learning days with free core 'Life and Social Competence Framework'",
  "Expert speakers led by experienced trainers with specialist knowledge",
  "Courses are highly interactive, requiring you engage with the issues throughout the day",
  "For an extra cost you receive one to one coaching, enabling you to improve the increase in your knowledge and skills resulting from the training (Education Plus 1 or 2)",
  "Up to 24 hours supplementary reading resources",
  "Learning is relevant, timely and immediately applicable",
  "Courses speakers include senior MPs, Lords and Government officials",
  "All our courses offer Certificate of Personal Development and gain a thorough understanding",
  "Comprehensive reading resources",
];

const courseCategories = [
  {
    title: "Parliament, Government & Resilience Skills",
    courses: [
      {
        name: "Parliamentary Questions Workshop",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Briefing Ministers and Officials",
        date: "11th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Understanding the European Drugs & Sales Act of 2020",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Understanding Devolution",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Political Awareness",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Parliamentary Process",
        date: "11th November 2025",
        status: "No events currently planned",
      },
      {
        name: "The Role of Select Committees (including with the Clerk of the Welsh Affairs Select Committee)",
        date: "4th December 2025",
        status: "No events currently planned",
      },
      {
        name: "Government, Opposition Policy, Ministers with Special Interests",
        date: "4th December 2025",
        status: "No events currently planned",
      },
      {
        name: "Artificial Intelligence and Its Impact on Public Service Transformation",
        date: null,
        status: "No events currently planned",
      },
    ],
  },
  {
    title: "Policy, Strategy & Writing Skills",
    courses: [
      {
        name: "Policy Development Skills: Framework & Influence",
        date: "13th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Stakeholder Management",
        date: "25th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Commissioning & Budgeting",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Commissioning and influencing the wider government eco-system in the Public Sector",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Policy Masterclass (Business Interests and the Public Sector",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Principles of Public Sector Contracting",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Principles of Public Advice, Supervision & Handling Casework",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Innovative Contracting",
        date: "20th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Understanding Devolution: The Public Sector",
        date: "28th October 2025",
        status: "No events currently planned",
      },
      {
        name: "Safeguarding Engagement for the Public Sector",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Policy Responses",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Principles of Public Advice, Supervision & Handling Casework",
        date: null,
        status: "No events currently planned",
      },
    ],
  },
  {
    title: "Management Skills",
    courses: [
      {
        name: "Leadership Skills",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Developing Skills",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "People Management for Line Managers",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Coordination in Project Management",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Introduction to Project Management (APM Accredited)",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Introduction to Stakeholder Management",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Improving Change For Public Sector",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Public Sector Equality Duties",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Preventing Corruption in the Public Sector",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Best Practice: Understanding Executive Functions for the Public Sector",
        date: "9th December 2025",
        status: "No events currently planned",
      },
      {
        name: "Essential Knowledge: Public Sector Finance & Business Change",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Certificate in Management: Executive Functions",
        date: null,
        status: "No events currently planned",
      },
    ],
  },
  {
    title: "Finance",
    courses: [
      {
        name: "Civil Servants Guide to Finance",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Understanding Business Cases",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Civil Servants Guide to Budgeting",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Introduction to Economics",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Introduction to Economics for the Public Sector",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Understanding Socio-Economics",
        date: null,
        status: "No events currently planned",
      },
    ],
  },
  {
    title: "Organisational & Personal Capability",
    courses: [
      {
        name: "Applying for Jobs: Interview Skills & CV Writing",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Communication Skills",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Security and Data Protection: Resistance Against Social Engineering",
        date: "11th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Working Well for New Managers",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Accountability and Governance",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Team Behavior: Promoting Prosocial Behaviors for Control Unit",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "Email and Digital Etiquette",
        date: "2nd December 2025",
        status: "No events currently planned",
      },
      {
        name: "Case Behavior - Team Boundaries in an Unethical Digital Environment",
        date: null,
        status: "No events currently planned",
      },
    ],
  },
  {
    title: "AI Empowerment for the Public Service",
    courses: [
      {
        name: "AI Ethics: Governance & Risk Management",
        date: "11th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Artificial Intelligence",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "AI Tools & Capabilities and Cases",
        date: "5th December 2025",
        status: "No events currently planned",
      },
      {
        name: "AI Literacy and Applications",
        date: null,
        status: "No events currently planned",
      },
      {
        name: "In A Public Service Awareness",
        date: "9th December 2025",
        status: "No events currently planned",
      },
      {
        name: "Data and AI Accountability for Public Service",
        date: "2nd December 2025",
        status: "No events currently planned",
      },
      {
        name: "Applied AI Tools for Government",
        date: "5th November 2025",
        status: "No events currently planned",
      },
      {
        name: "Understanding Artificial Intelligence Opportunities Service Implementation",
        date: null,
        status: "No events currently planned",
      },
    ],
  },
];
</script>

<template>
  <section id="courses" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h3 class="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div
            v-for="(feature, index) in keyFeatures"
            :key="index"
            class="flex gap-3 items-start"
          >
            <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p class="text-sm text-gray-700">{{ feature }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div
          v-for="(category, categoryIndex) in courseCategories"
          :key="categoryIndex"
          class="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div class="bg-primary text-white px-6 py-4">
            <h3 class="text-lg font-semibold">{{ category.title }}</h3>
          </div>

          <div class="divide-y divide-gray-200">
            <div
              v-for="(course, courseIndex) in category.courses"
              :key="courseIndex"
              class="px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div class="flex justify-between items-start gap-4">
                <div class="flex-1">
                  <h4 class="text-gray-900 font-medium mb-1">
                    {{ course.name }}
                  </h4>
                  <div
                    v-if="course.date"
                    class="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Calendar class="w-4 h-4" />
                    <span>{{ course.date }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <AlertCircle class="w-4 h-4" />
                  <span>{{ course.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-primary rounded-lg p-8 lg:p-12 text-white text-center mt-12"
      >
        <h3 class="text-2xl lg:text-3xl font-semibold mb-4">
          Interested in Our Courses?
        </h3>
        <p class="text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us to learn more about upcoming course dates and how we can
          support your professional development needs.
        </p>
        <div class="flex gap-4 justify-center">
          <Button size="xl" variant="light">Email Us</Button>
          <Button size="xl" variant="outline"> Call Us </Button>
        </div>
      </div>
    </div>
  </section>
</template>
