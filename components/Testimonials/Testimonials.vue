<script setup lang="ts">
import { Quote } from 'lucide-vue-next';

const testimonials = [
  {
    quote: "The course met all of my objectives. The section on Policy design was very interesting and informative.",
    author: "Charlotte Dann",
    role: "BEIS",
  },
  {
    quote: "A great mix of practical advice and background information. Thank you!",
    author: "Proskills UK",
    role: "",
  },
  {
    quote: "really like this content as well - very complete and touches all aspect of the policy development - again, thanks for sharing this information",
    author: "Office of the Chief Information Officer Canada",
    role: "",
  },
  {
    quote: "This was by far the best virtual training session I have completed, the trainer was interesting and made the information easy to understand. The course started on time and finished accordingly.",
    author: "HMPPS",
    role: "",
  },
  {
    quote: "This is probably the best course I have ever attended. Delivered at exactly the right pace, excellent content, excellent facilitator. Even though I am not a civil servants this was delivered in a way that I could find application to my work",
    author: "Great Ormond Street Hospital NHS Foundation Trust",
    role: "",
  },
  {
    quote: "As a new person to policy, I wanted to gain a better understand of how it works, the tools to use and the wide range of factors that need to be considered when developing policy options. I thought todays session really helped with that.",
    author: "DWP",
    role: "",
  },
  {
    quote: "Very valuable insight, thank you!! You've equipped us with a toolkit to keep in mind whilst also being mindful to the challenges faced when applying theory.",
    author: "Agenzija Sapport",
    role: "",
  },
  {
    quote: "There were a great deal of good examples and illustrations that helped embed learning of what could otherwise have been a very technical material.",
    author: "UKCISA",
    role: "",
  },
  {
    quote: "The course met my objectives fully and exceeded my expectations. The trainer was excellent and managed the day expertly. I would recommend Government Exchange to colleagues.",
    author: "Ministry of Justice",
    role: "",
  },
  {
    quote: "I thought that the training course was extremely informative and exceeded my expectations. The Trainer was extremely knowledgeable and ensured that everyone's questions were addressed and answered throughout the day. The course was delivered to a high standard in a virtual format with plenty of breaks throughout the day to ensure time away from the screen. I would highly recommend this course to others.",
    author: "UKRI",
    role: "",
  },
  {
    quote: "Whole day was very informative. Definitely increased my knowledge and increased confidence to share information with colleagues.",
    author: "HMPPS",
    role: "",
  },
  {
    quote: "I enjoyed the programme. The trainer had a really nice style, managed the online delivery aspects really well, gave a really good overview of the steps to developing a strategy, tools that help and key issues and challenges. It worked really well. I felt inspired to move ahead and pick up some of the ideas for my own strategy work.",
    author: "University of Surrey",
    role: "",
  },
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
          Feedback from Participants
        </h2>
        <p class="text-lg text-gray-600">
          Hear from participants who have benefited from our training programs
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
        >
          <div class="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Quote class="w-6 h-6 text-primary" />
          </div>
          <blockquote class="text-base mr-8 text-gray-900 mb-6 italic relative z-10">
            "{{ testimonial.quote }}"
          </blockquote>
          <div class="border-t border-gray-200 pt-4">
            <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
            <p v-if="testimonial.role" class="text-sm text-gray-600">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
