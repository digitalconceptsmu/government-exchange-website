<script setup lang="ts">
import { CheckCircle, Lightbulb, Quote, Target, Users } from "lucide-vue-next";
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
      "I am walking away with a rich set of tools and methods.",
    author: "Ofgem",
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
</script>

<template>
  <div id="about">
    <section class="py-16 lg:px-14 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-36 items-start">
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
              src="../../public/images/about_us1.png"
              alt="Government Exchange Brochure"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-5xl text-gray-900 mb-4">Our Values</h2>
          <p class="text-lg text-gray-600">
            We are at the forefront of thinking in Government and skills
            development
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
          <h2 class="text-5xl text-gray-900 mb-4">What You Say About Us</h2>
          <p class="text-lg text-gray-600">
            Feedback from civil servants and public sector professionals
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-4 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="mb-6 flex items-start">
              <p class="text-primary italic">"{{ testimonial.quote }}"</p>
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
      </div>
    </section>

    <section>
      <div
        class="bg-primary py-28 px-6 flex flex-col gap-6 items-center justify-center"
      >
        <h2 class="text-white text-4xl">Ready to Advance Your Career?</h2>
        <p class="text-white text-lg">
          Join thousands of civil servants who have enhanced their skills
          through our training programs
        </p>
        <div class="flex items-center gap-4">
          <Button variant="light" size="xl">View Course list</Button>
          <Button variant="outline" size="xl">Contact us</Button>
        </div>
      </div>
    </section>
  </div>
</template>
