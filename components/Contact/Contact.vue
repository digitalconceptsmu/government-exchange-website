<script setup lang="ts">
import { Mail, MapPin, Phone, Printer } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const contactInfo = {
  address: {
    name: "Government Exchange",
    street: "253 Grays Inn Road",
    city: "London",
    postcode: "WC1X 8QT",
    country: "United Kingdom",
  },
  phone: "+44 (0) 20 3137 8632",
  fax: "+44 (0) 20 3137 1459",
  email: "enquiry@governmentexchange.org",
};

const formData = ref({
  name: "",
  phone: "",
  email: "",
  organisation: "",
  message: "",
});

const handleSubmit = () => {
  // TODO : logic to submit contact form
};
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <div class="mb-8">
              <h2 class="text-3xl font-semibold text-gray-900 mb-3">
                Information
              </h2>
              <div class="w-12 h-1 bg-primary"></div>
            </div>

            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <MapPin class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div class="text-gray-700 leading-relaxed">
                  <p>{{ contactInfo.address.name }}</p>
                  <p>{{ contactInfo.address.street }},</p>
                  <p>{{ contactInfo.address.city }},</p>
                  <p>{{ contactInfo.address.postcode }},</p>
                  <p>{{ contactInfo.address.country }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Phone class="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <a
                    :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`"
                    class="text-gray-700 hover:text-primary transition-colors"
                  >
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Printer class="w-6 h-6 text-primary flex-shrink-0" />
                <div class="text-gray-700">
                  {{ contactInfo.fax }}
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Mail class="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <a
                    :href="`mailto:${contactInfo.email}`"
                    class="text-gray-700 hover:text-primary transition-colors break-all"
                  >
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="mb-8">
              <h2 class="text-3xl font-semibold text-gray-900 mb-3">
                Contact Us
              </h2>
              <div class="w-12 h-1 bg-primary"></div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <Input
                  v-model="formData.name"
                  type="text"
                  placeholder="Name*"
                  required
                  class="w-full"
                />
              </div>

              <div>
                <Input
                  v-model="formData.phone"
                  type="tel"
                  placeholder="Phone*"
                  required
                  class="w-full"
                />
              </div>

              <div>
                <Input
                  v-model="formData.email"
                  type="email"
                  placeholder="Email*"
                  required
                  class="w-full"
                />
              </div>

              <div>
                <Input
                  v-model="formData.organisation"
                  type="text"
                  placeholder="Organisation*"
                  required
                  class="w-full"
                />
              </div>

              <div>
                <textarea
                  v-model="formData.message"
                  placeholder="Message*"
                  required
                  rows="5"
                  class="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  class="bg-primary hover:bg-primary/90 text-white px-8 uppercase"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
