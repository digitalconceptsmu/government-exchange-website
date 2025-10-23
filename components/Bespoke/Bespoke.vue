<script setup lang="ts">
import { CheckCircle, Mail } from 'lucide-vue-next';

const benefits = [
  'Flexibility to arrange your training at convenient times for you and your workforce',
  'Cost effective prices, giving you the opportunity to invest in developing your talent',
  'Training delivery at premises that suit you – on site training can reduce time and costs associated with travel'
]

const trainingAreas = [
  'Parliamentary process',
  'Legislation',
  'Government structure',
  'Strategy',
  'Writing Skills',
  'Policy skills',
  'Leadership & management',
  'PPM',
  'Communication'
]
</script>

<template>
  <section id="bespoke" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-12 w-full flex items-center flex-col">
          <h2 class="text-3xl lg:text-5xl text-gray-900 mb-6">
            Bespoke Training Solutions
          </h2>

          <div class="space-y-4 text-gray-700">
            <p>
              Our highly popular and successful open courses are ideal for meeting the
              training and development needs of individuals within the workforce.
            </p>

            <p>
              Bespoke training provides added value where there is an
              <span class="font-bold">organisational need</span> for improved performance
              or greater impact. We design the training with you so that it fits directly
              with your organisations specifications, ensuring that the newly learned skills
              are directly transferable into your work place and that participants are trained
              in your unique rules, policies, systems and procedures so they can have immediate
              impact following their training.
            </p>

            <p>
              Our trainers will work with you to ensure that the training is practical,
              interactive and engaging; fully utilising the Kolb learning cycle.
            </p>

            <p>
              A better skilled and more knowledgeable workforce will increase organisational
              performance, this will be further enhanced by increased team and collaborative
              working which is developed through the shared learning experience which
              organisational based learning brings.
            </p>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="mb-12">
          <h3 class="text-xl font-bold text-gray-900 mb-6">
            You organisation can also benefit from:
          </h3>

          <ul class="space-y-3">
            <li
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex items-start gap-3"
            >
              <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span class="text-gray-700">{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <!-- Training Areas Section -->
        <div class="mb-12">
          <h3 class="text-xl font-bold text-gray-900 mb-6">
            Government Exchange offers high quality bespoke training in:
          </h3>

          <ul class="space-y-2">
            <li
              v-for="(area, index) in trainingAreas"
              :key="index"
              class="flex items-start gap-3"
            >
              <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">{{ area }}</span>
            </li>
          </ul>
        </div>

        <!-- Partnership Section -->
        <div class="mb-12">
          <p class="text-gray-700">
            We can also provide training on any current public policy issue in partnership
            with our sister organisation
            <a
              href="https://publicpolicyexchange.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline font-medium"
            >
              Public Policy Exchange
            </a>.
          </p>
        </div>

        <!-- Accreditation Section -->
        <div class="mb-12">
          <p class="text-gray-700">
            All our bespoke training is
            <a
              href="#"
              class="text-primary hover:underline font-medium"
            >
              CPD accredited
            </a>. The training can either be held at your organisation's premises,
            or at one of our own high quality training venues.
          </p>
        </div>

        <!-- Contact Section -->
        <div class="bg-gray-50 rounded-xl p-8">
          <p class="text-gray-700 mb-4">
            Our training development team possess many years experience of developing tailor
            made courses to the highest possible standard, and would be more than happy to
            discuss any training needs that you have. Please email
            <a
              href="mailto:Enquiry@governmentexchange.co.uk"
              class="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              <Mail class="w-4 h-4" />
              Enquiry@governmentexchange.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
