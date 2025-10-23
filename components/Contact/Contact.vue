<script setup lang="ts">
import { Mail, Phone, Fax, MapPin, Building } from 'lucide-vue-next'

const contactInfo = {
  enquiries: {
    tel: '020 3137 8632',
    fax: '020 3137 1459',
    email: 'enquiry@governmentexchange.co.uk'
  },
  address: {
    name: 'Government Exchange',
    street: '253 Grays Inn Road',
    city: 'London',
    postcode: 'WC1X 8QT'
  },
  company: {
    name: 'International Centre for Parliamentary Studies',
    companyNo: '7379667',
    registeredOffice: '253 Grays Inn Road, London, WC1X 8QT',
    registeredIn: 'England and Wales'
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="space-y-8">
            <!-- Enquiries Section -->
            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-bold text-primary mb-6">
                Enquiries
              </h3>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <Phone class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900">Tel:</p>
                    <a
                      :href="`tel:${contactInfo.enquiries.tel.replace(/\s/g, '')}`"
                      class="text-gray-700 hover:text-primary transition-colors"
                    >
                      {{ contactInfo.enquiries.tel }}
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <Fax class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900">Fax:</p>
                    <p class="text-gray-700">{{ contactInfo.enquiries.fax }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <Mail class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900">Email:</p>
                    <a
                      :href="`mailto:${contactInfo.enquiries.email}`"
                      class="text-primary hover:underline break-all"
                    >
                      {{ contactInfo.enquiries.email }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Address Section -->
            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="text-xl font-bold text-primary mb-6">
                Address
              </h3>

              <div class="flex items-start gap-3">
                <MapPin class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div class="text-gray-700">
                  <p class="font-semibold text-gray-900">{{ contactInfo.address.name }}</p>
                  <p>{{ contactInfo.address.street }}</p>
                  <p>{{ contactInfo.address.city }}</p>
                  <p>{{ contactInfo.address.postcode }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <!-- Company Details Section -->
            <div class="bg-white rounded-xl p-8 shadow-sm h-full">
              <h3 class="text-xl font-bold text-primary mb-6">
                Company Details
              </h3>

              <div class="flex items-start gap-3 mb-6">
                <Building class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div class="text-gray-700">
                  <p class="font-semibold text-gray-900 mb-4">
                    {{ contactInfo.company.name }}
                  </p>

                  <div class="space-y-2">
                    <div>
                      <span class="font-semibold text-gray-900">Company No:</span>
                      <span class="ml-2">{{ contactInfo.company.companyNo }}</span>
                    </div>

                    <div>
                      <span class="font-semibold text-gray-900">Registered Office:</span>
                      <span class="ml-2">{{ contactInfo.company.registeredOffice }}</span>
                    </div>

                    <div>
                      <span class="font-semibold text-gray-900">Registered in:</span>
                      <span class="ml-2">{{ contactInfo.company.registeredIn }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map or Additional Info Section (Optional) -->
        <div class="mt-8 bg-primary/5 rounded-xl p-6 text-center">
          <p class="text-gray-700">
            For general enquiries and bookings, please contact us using the information above.
            Our team is ready to assist you with your training needs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
