<script setup lang="ts">
import { ArrowDownToLine, CheckCircle, FileText, MapPin } from "lucide-vue-next";
import { Button } from "~/components/ui/button";

const route = useRoute();
const slug = route.params.slug;

const courseData: Record<string, any> = {
  "leadership-and-management": {
    title: "Professional Certificate in Leadership and Management",
    type: "6 days (1st - 6th November 2025)",
    venue: "Online",
    registrationForm: "#",
    description:
      "This comprehensive professional certificate program is designed for current and aspiring leaders in the public sector. Develop essential leadership competencies, strategic thinking, and management skills required to lead high-performing teams and drive organizational excellence.",
    overview:
      "Over six intensive days, participants will explore contemporary leadership theories, practical management tools, and evidence-based approaches to leading in complex public sector environments. The program combines theoretical knowledge with practical application through case studies, group discussions, and hands-on exercises.",
    speakers: [
      {
        name: "Dr. Sarah Mitchell",
        title: "Director of Leadership Development, Cabinet Office",
      },
      {
        name: "Professor James Reynolds",
        title: "Professor of Public Management, London School of Economics",
      },
    ],
    outcomes: [
      "Develop advanced leadership skills for managing diverse teams in public service",
      "Master strategic planning and decision-making in complex organizational contexts",
      "Build effective communication and stakeholder engagement capabilities",
      "Understand change management principles and how to lead organizational transformation",
      "Learn to create and sustain high-performance cultures",
      "Develop emotional intelligence and adaptive leadership competencies",
      "Apply evidence-based management practices to public sector challenges",
      "Build resilience and navigate political and organizational complexities",
    ],
    agenda: [
      {
        time: "Day 1",
        title: "Foundations of Public Sector Leadership",
      },
      {
        time: "Day 2",
        title: "Strategic Thinking and Decision Making",
      },
      {
        time: "Day 3",
        title: "Leading High-Performance Teams",
      },
      {
        time: "Day 4",
        title: "Change Management and Organizational Development",
      },
      {
        time: "Day 5",
        title: "Stakeholder Engagement and Political Awareness",
      },
      {
        time: "Day 6",
        title: "Leadership in Practice and Action Planning",
      },
    ],
    testimonials: [
      {
        quote:
          "An exceptional program that transformed my approach to leadership. The practical tools and frameworks are immediately applicable.",
        author: "Director, Department for Education",
      },
      {
        quote:
          "Outstanding faculty and excellent content. This certificate has significantly enhanced my leadership capabilities.",
        author: "Senior Manager, NHS",
      },
    ],
  },
  "successful-managers-toolkit": {
    title: "The Successful Managers Toolkits for the Public Service",
    type: "E-Learning Course (Self-paced)",
    venue: "Online Platform",
    registrationForm: "#",
    description:
      "A comprehensive online toolkit designed for managers at all levels in public service. This e-learning course provides practical tools, templates, and frameworks to enhance your management effectiveness and achieve better outcomes for your organization.",
    overview:
      "This flexible, self-paced course covers essential management competencies including planning, organizing, delegating, monitoring performance, and developing your team. Each module includes practical exercises, downloadable resources, and real-world case studies from public sector contexts.",
    speakers: [],
    outcomes: [
      "Master essential management tools and techniques for daily operations",
      "Develop effective planning and prioritization skills",
      "Learn to delegate effectively and empower your team",
      "Build performance management and coaching capabilities",
      "Understand resource management and budgeting basics",
      "Create action plans for implementing learning in your workplace",
      "Access a library of templates and tools for immediate use",
      "Connect with a community of public sector managers",
    ],
    agenda: [
      {
        title: "Module 1: Planning and Organizing Your Work",
      },
      {
        title: "Module 2: Effective Delegation and Empowerment",
      },
      {
        title: "Module 3: Performance Management Essentials",
      },
      {
        title: "Module 4: Resource Management and Budgeting",
      },
      {
        title: "Module 5: Coaching and Developing Your Team",
      },
      {
        title: "Module 6: Problem Solving and Decision Making",
      },
    ],
    testimonials: [
      {
        quote:
          "The toolkit approach is brilliant. I can access resources when I need them and apply them immediately to real challenges.",
        author: "Team Leader, Local Government",
      },
      {
        quote:
          "Flexible and practical. The templates alone have saved me countless hours and improved my team's performance.",
        author: "Manager, Civil Service",
      },
    ],
  },
  "parliamentary-process": {
    title: "Parliamentary Process",
    type: "1 day (November 2025)",
    venue: "Virtual Learning",
    registrationForm: "#",
    description:
      "Government Exchange is excited to present an immersive and hands-on online short course attending to the Parliamentary Process. Allowing you to familiarise with the machinery of Parliament and interact with and distinguishes Members of the House of Lords.",
    overview:
      "The workshop is designed so that you get a clear understanding of the process involved in passing legislation through the UK Parliament. The priority is on with a real-world understanding of how Parliament actually operates. We will bring you the various stages including formal discussions, debates as well as the implications of the Royal Assent. Develop skills, such as formulating a policy proposal, processes, and give insights into key facets and noticing solutions to crafting new legislation.",
    speakers: [
      {
        name: "Lord Peter Lilley",
        title:
          "Member of the House of Lords & former shadow Chancellor of the Exchequer",
      },
      {
        name: "Rt Hon Tam Dalyell MP",
        title: "",
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
          "I would to hear the insider view of making legislative changes. Policy process was delivered by someone with the experience and insight was beautifully helpful.",
        author: "Policy Officer",
      },
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
      <div class="bg-primary text-white py-16">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="mb-6">
            <NuxtLink
              to="/courses"
              class="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              ← Back to Open Courses
            </NuxtLink>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">
            {{ course.title }}
          </h1>
        </div>
      </div>

      <div class="bg-white border-b">
        <div class="container mx-auto px-4 max-w-7xl py-6">
          <div class="flex flex-wrap gap-6 text-sm">
            <div class="flex items-center gap-2">
              <FileText class="w-5 h-5 text-primary" />
              <div>
                <div class="text-gray-600 text-xs">Type</div>
                <div class="font-medium">{{ course.type }}</div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <MapPin class="w-5 h-5 text-primary" />
              <div>
                <div class="text-gray-600 text-xs">Venue</div>
                <div class="font-medium">{{ course.venue }}</div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <FileText class="w-5 h-5 text-primary" />
              <div>
                <div class="text-primary text-xs hover:underline cursor-pointer">Registration form (doc)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl py-12">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <section class="bg-white border rounded-xl shadow-sm p-8">
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ course.description }}
              </p>
              <p class="text-gray-700 leading-relaxed">
                {{ course.overview }}
              </p>
            </section>

            <section v-if="course.speakers && course.speakers.length > 0" class="bg-white rounded-xl border shadow-sm p-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">
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
                    <div class="font-medium text-gray-900">
                      {{ speaker.name }}
                    </div>
                    <div v-if="speaker.title" class="text-sm text-gray-600">
                      {{ speaker.title }}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="bg-white border rounded-xl shadow-sm p-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">
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
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">Agenda</h2>
              <div class="space-y-6">
                <div
                  v-for="(item, index) in course.agenda"
                  :key="index"
                  class="border-l-4 border-primary pl-6 py-2"
                >
                  <div class="flex items-center gap-3 mb-2">
                    <span
                      class="inline-block px-3 py-1 bg-gray-100 rounded text-sm font-medium"
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
              <Button
                size="xl"
                class="inline-flex items-center gap-2"
              >
                <ArrowDownToLine class="w-5 h-5" />
                Download Registration Form
              </Button>
            </section>
          </div>

          <div class="lg:col-span-1">
            <div class="space-y-6 sticky top-32">
              <div class="rounded-xl border p-6 text-white bg-gradient-to-r from-primary to-green-800">
                <h3 class="text-xl font-semibold mb-4">Register Interest</h3>
                <p class="text-white/90 mb-6 text-sm">
                  Interested in this course? Contact us for upcoming dates and
                  registration details.
                </p>
                <div class="space-y-3">
                  <Button variant="light" class="w-full">Email Enquiry</Button>
                  <Button variant="outline" class="w-full text-white border-white hover:bg-white/10">
                    Call: 020 3137 8632
                  </Button>
                </div>
              </div>

              <div class="bg-white border rounded-xl shadow-sm p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  What Delegates Say
                </h3>
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
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
