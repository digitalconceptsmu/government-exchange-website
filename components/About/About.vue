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
      "Well run course and very informative. I would definitely recommend this course to others.",
    author: "S. Gordon",
    organization: "BERR",
  },
  {
    quote: "Probably one of the best courses I have ever attended. Spot on!",
    author: "J. Davies",
    organization: "MOD",
  },
  {
    quote:
      "Overall, the day was extremely worthwhile and I will recommend it to fellow civil servants.",
    author: "M. Riddell",
    organization: "Communities and Local Government",
  },
  {
    quote:
      "Found the course very informative, interesting, and well presented, with deep and broad insight into the subtleties of government and politics.",
    author: "A. Driver",
    organization: "Environmental Agency",
  },
  {
    quote:
      "I have been to three Westminster Explained courses, however this Government Exchange course was more enjoyable",
    author: "R. Corben",
    organization: "Her Majesty's Court Service",
  },
];
</script>

<template>
  <div id="about">
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-36 items-start">
          <div class="space-y-6">
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
              src="../../public/images/westminster1.jpg"
              alt="Government Exchange Brochure"
              class="w-96 rounded-lg shadow-lg"
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
            class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto"
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
            class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
        class="bg-primary py-28 flex flex-col gap-6 items-center justify-center"
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
