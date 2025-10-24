<script setup lang="ts">
import {
  BookOpen,
  Building,
  CheckCircle,
  Target
} from "lucide-vue-next";

const benefits = [
  "Flexibility to arrange your training at convenient times for you and your workforce",
  "Cost effective prices, giving you the opportunity to invest in developing your talent",
  "Training delivery at premises that suit you – on site training can reduce time and costs associated with travel",
];

const trainingAreas = [
  { column1: "Parliamentary process", column2: "Legislation" },
  { column1: "Government structure", column2: "Strategy" },
  { column1: "Writing Skills", column2: "Policy skills" },
  { column1: "Leadership & management", column2: "PPM" },
  { column1: "Communication", column2: "" },
];

const clients = [
  "BTEC",
  "DfE",
  "IPO",
  "ECC",
  "MAG",
  "Ofgem",
  "Home Office",
  "MoJ",
  "DoH",
  "DCSF",
  "Defra",
  "SCC",
  "BBSRC",
  "WBC",
  "CA HPW",
  "Ofcom",
  "Herbert Smith",
];
</script>

<template>
  <section id="bespoke" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        <div class="lg:col-span-8">
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Bespoke training provides added value where there is an
              organisational need for improved performance or greater impact. We
              design the training with you so that it fits entirely around your
              organisations specifications, ensuring that the newly learned
              skills are directly transferable into your work place and that
              participants are familiar with your internal, policies, systems
              and procedures so they can have immediate impact following their
              training.
            </p>

            <p>
              Our trainers will work with you to ensure that the training is
              practical, interactive and engaging; fully utilising the Kolb
              learning cycle.
            </p>

            <p>
              A better skilled and more knowledgeable workforce will increase
              organisational performance; this will be further enhanced by
              increased team and collaborative working which is developed
              through the shared learning experience which organisation based
              learning brings.
            </p>
          </div>

          <div
            class="mt-12 bg-white shadow-sm border-gray-100 border-2 rounded-xl p-8"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Target class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-2xl text-gray-900 mt-2">
                Your organisation can also benefit from:
              </h3>
            </div>

            <ul class="space-y-3">
              <li
                v-for="(benefit, index) in benefits"
                :key="index"
                class="flex items-start gap-3"
              >
                <CheckCircle
                  class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                />
                <span class="text-gray-700">{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-12 p-8 bg-white shadow-sm border-gray-100 border-2 rounded-xl">
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <BookOpen class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-2xl text-gray-900 mt-2">
                Government Exchange offers high quality bespoke training in:
              </h3>
            </div>

            <div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <template v-for="(area, index) in trainingAreas" :key="index">
                <div
                  class="flex items-center gap-2 rounded-xl p-4 bg-gray-50"
                >
                  <CheckCircle
                    class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  />
                  <span class="text-gray-700">{{ area.column1 }}</span>
                </div>
                <div
                  v-if="area.column2"
                  class="flex items-center gap-2 rounded-xl p-4 bg-gray-50"
                >
                  <CheckCircle
                    class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  />
                  <span class="text-gray-700">{{ area.column2 }}</span>
                </div>
              </template>
            </div>
          </div>

          <div class="mt-12 border-2 border-primary rounded-lg p-8 space-y-6">
            <p class="text-gray-700">
              We can also provide training on any current public policy issue in
              partnership with our sister organisation
              <a
                href="https://publicpolicyexchange.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline font-medium"
                >Public Policy Exchange</a
              >.
            </p>

            <p class="text-gray-700">
              All our bespoke training is CPD accredited. The training can
              either be held at your organisation's premises, or at one of our
              own high quality training centres.
            </p>

            <p class="text-gray-700">
              Our training development team possess many years experience of
              developing tailor made courses to the highest possible standard,
              and would be more than happy to discuss any training needs that
              you have. Please email
              <a
                href="mailto:enquiry@governmentexchange.org"
                class="text-primary hover:underline font-medium"
                >enquiry@governmentexchange.org</a
              >
            </p>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div class="bg-white border-2 rounded-xl p-8 sticky top-32">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
              >
                <Building class="w-5 h-5 text-primary" />
              </div>
              <h3 class="text-xl text-gray-900">Who We've Worked With</h3>
            </div>

            <p class="text-gray-600 mb-6">
              Some of the organisations we have recently provided bespoke
              training for are:
            </p>

            <div class="space-y-3">
              <div
                v-for="(client, index) in clients"
                :key="index"
                class="bg-gray-50 rounded-lg px-4 py-4 text-center text-gray-700 font-medium hover:bg-gray-100 hover:shadow-sm transition-all"
              >
                {{ client }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
