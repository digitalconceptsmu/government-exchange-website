<script setup lang="ts">
import { Mail, MapPin, Phone } from "lucide-vue-next";

const companyInfo = {
  name: "Government Exchange t/a International Centre for Parliamentary Studies",
  companyNo: "7279667",
  address: "253 Grays Inn Road, London, WC1X 8QT",
  vatNo: "VAT No. 997902894",
  registeredIn: "Registered in England and Wales",
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About Us", href: "/about" },
  { name: "Bespoke Training", href: "/bespoke" },
  { name: "Contact", href: "/contact" },
];

const policies = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms & Conditions", href: "#terms" },
];
</script>

<template>
  <footer id="contact" class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="lg:col-span-2">
          <h3 class="text-2xl mb-4">Government Exchange</h3>
          <p class="text-sm text-gray-400 mb-6">
            Centre for Parliamentary Studies
          </p>
          <p class="text-gray-300 mb-6">
            Leading provider of accredited professional training for UK civil
            servants and public sector professionals.
          </p>
          <div class="space-y-3">
            <a
              href="tel:02031378632"
              class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Phone class="w-5 h-5" />
              <span>020 3137 8632</span>
            </a>
            <a
              href="mailto:enquiry@governmentexchange.org"
              class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Mail class="w-5 h-5" />
              <span>enquiry@governmentexchange.org</span>
            </a>
            <div class="flex items-start gap-3 text-gray-300">
              <MapPin class="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{{ companyInfo.address }}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-6">Legal</h4>
          <ul class="space-y-3">
            <li v-for="policy in policies" :key="policy.name">
              <a
                :href="policy.href"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ policy.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div
          class="flex flex-col lg:flex-row justify-between gap-4 text-sm text-gray-400"
        >
          <div>
            <p>© 2020 {{ companyInfo.name }}</p>
            <p class="mt-1">
              Company no: {{ companyInfo.companyNo }} | {{ companyInfo.vatNo }}
            </p>
            <p class="mt-1">{{ companyInfo.registeredIn }}</p>
          </div>
          <div class="flex items-center gap-2">
            <span>Registered Office: {{ companyInfo.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
