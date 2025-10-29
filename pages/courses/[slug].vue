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
  // Logique pour télécharger le formulaire
  console.log(`Downloading ${format} form for course: ${slug}`);
  // Ajoutez ici le lien de téléchargement réel
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

const courseData: Record<string, any> = {
  "parliamentary-process": {
    title: "Parliamentary Process",
    date: "1 day (November 2025)",
    venue: "Virtual Learning",
    registrationForm: "#",
    description: [
      "Government Exchange is excited to present an immersive and hands-on online short course attending to the Parliamentary Process. Allowing you to familiarise with the machinery of Parliament and interact with and distinguishes Members of the House of Lords."
    ],
    overview: [
      "The workshop is designed so that you get a clear understanding of the process involved in passing legislation through the UK Parliament. The priority is on with a real-world understanding of how Parliament actually operates. We will bring you the various stages including formal discussions, debates as well as the implications of the Royal Assent. Develop skills, such as formulating a policy proposal, processes, and give insights into key facets and noticing solutions to crafting new legislation.",
    ],
    speakers: [
      {
        name: "Lord Peter Lilley, Member of the House of Lords & former shadow Chancellor of the Exchequer",
      },
      {
        name: "Rt Hon Tam Dalyell MP",
      },
    ],
    outcomes: [
      "Gain comprehensive insight into the ethos and stages involved in passing legislation",
      "Understand the role and significance of relevant bodies, such as the Office of the Parliamentary Counsel (OPC), in scrutinising key legislation",
      "Develop a clearer picture of the role the civil service plays in this process",
      "Develop a nuanced perspective by encountering how policy-making works during different eras of the UK",
      "Develop an understanding of each stage of legislation in the House of Commons and the House of Lords",
      "Learn about the 'Early Years'. Learn how to debate draft, implement, and assess bills and Acts",
      "Appreciate best practice for civil servants (you in other words) who write policy",
      "Engage with real examples where political nuances and party whips may have made (or not made) legislation when you work and what examples of best practice entails",
      "Grapple with real media strategies to announce the challenges that often appear in policy-making",
      "Relate your understanding of how to effectively implement and modernise policies",
    ],
    agenda: [
      {
        time: "09:30",
        title: "Registration/Teas upon guest",
      },
      {
        time: "10:00",
        title: "Introduction from Chair",
      },
      {
        time: "10:10",
        title: "Rights Sort of How to do Parliamentary Process",
        speaker:
          "Lord Peter Lilley, Member of the House of Lords & former shadow Chancellor of the Exchequer",
        topics: [
          "How they run the Legislative Process; Drafting, Debates, Amendments, and House drama",
          "When Parliament sits",
          "Case Studies of Recent Legislation",
          "White Papers and Green Papers Explained",
          "Private Member's Bills Vs. Government Bills and Standing Orders",
          "Committee Proceedings and Scrutinising legislation",
        ],
      },
      {
        time: "11:40",
        title: "Coffee Break",
      },
      {
        time: "12:10",
        title: "Making that go to a Product?",
        topics: [
          "Mapping the Landscape: Why stakeholders and lobbyists matter",
          "Role of the Parliamentary Counsel (OPC): Roles and responsibilities",
          "Select Committees, All-Party Groups, and their Role in Making Sense on Debates",
          "The Select Committee Proceedings and what their debates and inquiries reveal",
          "Including Functional Committees: Public Accounts and Statutory Audit and External Consultants in the process",
          "The Role of Civil Servants in supporting Parliament",
          "How Timetable Motions and Guillotines Function",
          "Bill passage presentation from Ms. Lyons: In-House presentations from the Clerk: 20-minute group discussion",
        ],
      },
      {
        time: "13:15",
        title: "Lunch Break",
      },
      {
        time: "14:00",
        title: "Review out of the Policy Cycle",
        topics: [
          "Policy development and the relationship between Government to Implementation and Evaluation",
          "Chalking Legislation: Connecting Standing Concepts into Legislation",
          "Responding to Select Committee Reports",
          "How draft Bills are scrutinised for impact (e.g., 16-years experience from the Clerk)",
          "Presentation from the Team followed by group discussion and examples",
        ],
      },
      {
        time: "15:30",
        title: "Summarise from Chair",
      },
      {
        time: "16:00",
        title: "Finish",
      },
    ],
    testimonials: [
      {
        quote:
          "Really useful to have direct experience from such distinguished perspectives. I found the morning session particularly interesting and was able to discuss carefully the gaps of course their development during the passage with policy in their framework.",
        author: "Samuel Smith",
      },
      {
        quote:
          "I was a great session, ercelly paced. I was good to hear direct from perspective and gaining perspective and opportunity for reflection on the development of policy. It was right that many of key elements of policy working and different way of looking at things.",
        author: "Emily Andrews",
      },
      {
        quote:
          "This has been one of the best training I've attended. It was clear very clearly informative clear and interesting, so much to take away from it",
        author: "Professional Civil Service, Department of Health and Social Care",
      },
      {
        quote:
          "I would to hear the insider view of making legislative changes. Policy process was delivered by someone with the experience and insight was incredibly valuable.",
        author: "Patrick England",
      },
      {
        quote: "Excellent speakers gave us a brilliant workshop today with Lord Lilley.",
        author: "Professional Office",
      },
      {
        quote: "I got like the learning education and came very impressed with the level of what we have",
        author: "Public Servant",
      },
      {
        quote: "Impressive session. Really help me understand more other topics to.",
        author: "Scottish Trainee (Devel)",
      },
      {
        quote: "I am greatly enjoying this and I'm reading at the new and exciting the time looking forward",
        author: "IPG Nickel",
      },
      {
        quote: "Good experience and interesting walk Litter were Belgium",
        author: "Brussels Hall",
      },
      {
        quote: "Very useful session.",
        author: "EEA",
      },
    ],
    accreditation: {
      title: "Accredited By",
      logo: "/images/institute-of-leadership.png",
      description: "The Institute of Leadership has approved this training course. The Institute combines years of research, knowledge and innovation to champion the leadership agenda for aLL and since 1947 they have carried out extensive research into the knowledge, skills, attitudes, behaviours and values of great leadership. Based on The Institute's core leadership values, this course meets the standard that enables learners who have completed to access the following benefits:",
      benefits: [
        { text: "Membership of The Institute of Leadership will be in receipt of an ICPS/The Institute joint Certificate of achievement for the course" },
        { text: "Access to a raft of resources to help you with your continuing professional development, including an award-winning library of e-Learning materials" },
        { text: "A community of over 70,000 members worldwide enabling you to collaborate and grow your knowledge and skills" },
        { text: "Receipt of weekly news updates, podcasts and cutting-edge research and a monthly published journal and invitations to topical webinars" },
        { text: "Authorisation to use approved letters AMInstL (Associate Member of The Institute of Leadership) after your name for business correspondence" },
      ],
    },
    relatedCourses: [
      { title: "Working With the New Parliament", link: "#" },
      { title: "How Government Works: the New Coalition", link: "#" },
    ],
  },
};

const course = courseData[slug as string];

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
  <div class="min-h-screen bg-background bg-gray-50">
    <Navigation />
    <main>
      <div>
        <div class="text-white py-16 relative overflow-hidden">
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style="background-image: url('/images/course_details.png')"
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
              <div class="flex items-center gap-2">
                <Calendar class="w-5 h-5 text-primary" />
                <div>
                  <div class="text-gray-600 text-xs">Date</div>
                  <div class="font-medium">{{ course.date }}</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
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

              <section v-if="course.speakers && course.speakers.length > 0" class="bg-white rounded-xl border shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Distinguished Speakers:
                </h2>
                <div class="space-y-4">
                  <div
                    v-for="(speaker, index) in course.speakers"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div class="text-gray-900">
                        {{ speaker.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="bg-white border rounded-xl shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Interview With One of the Training Experts
                </h2>
                <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://drive.google.com/file/d/11BXEWCUF2hjWuwveQImtXQpsVYPD6e76/preview"
                    class="absolute inset-0 w-full h-full"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </section>

              <section class="bg-white border rounded-xl shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Learning Outcomes
                </h2>
                <div class="space-y-4">
                  <div
                    v-for="(outcome, index) in course.outcomes"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p class="text-gray-700">{{ outcome }}</p>
                  </div>
                </div>
              </section>

              <section class="bg-white border rounded-xl shadow-sm p-8">
                <h2 class="text-2xl text-gray-900 mb-6 pb-3 border-b-4 border-primary">
                  Agenda
                </h2>
                <div class="space-y-6">
                  <div
                    v-for="(item, index) in course.agenda"
                    :key="index"
                    class="border-l-4 border-primary pl-6 py-2"
                  >
                    <div class="flex items-center gap-3 mb-2">
                      <span
                        class="inline-block px-2 border border-primary text-primary rounded-lg text-sm font-medium"
                      >
                        {{ item.time }}
                      </span>
                      <h3 class="font-semibold text-gray-900">
                        {{ item.title }}
                      </h3>
                    </div>
                    <div v-if="item.speaker" class="text-sm italic text-gray-600 mb-2">
                      {{ item.speaker }}
                    </div>
                    <ul v-if="item.topics" class="space-y-1 mt-2">
                      <li
                        v-for="(topic, topicIndex) in item.topics"
                        :key="topicIndex"
                        class="text-sm text-gray-700 ml-4 list-disc"
                      >
                        {{ topic }}
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
              <div class="space-y-6 sticky top-32">
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
                    Our team is here to answer any questions you may have about this course.
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

/* Ajouter de l'espacement entre les paragraphes dans le contenu HTML */
.course-overview-content :deep(p) {
  margin-bottom: 1rem; /* 16px d'espace entre les paragraphes */
}

.course-overview-content :deep(p:last-child) {
  margin-bottom: 0; /* Pas d'espace après le dernier paragraphe */
}

.course-overview-content :deep(br) {
  display: block;
  content: "";
  margin-bottom: 1rem; /* 16px d'espace après chaque <br> */
}
</style>
