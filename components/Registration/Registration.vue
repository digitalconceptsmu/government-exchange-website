<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  course: "",
  message: "",
});

const handleSubmit = () => {
  // TODO : Add your form submission logic
};
</script>

<template>
  <section id="registrations" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-5xl text-gray-900 mb-6">Registration</h2>
          <p class="text-lg text-gray-600">Registration By Email / Fax</p>
          <p class="text-gray-400 mt-20">
            Registration forms are available for download in either Microsoft
            Word or Adobe Portable Document Format. The Word version is
            recommended as it can be filled in using a computer and returned by
            email. Alternatively, the PDF version can be printed and returned by
            fax.
          </p>
        </div>

        <div class="mt-8 text-center text-gray-600">
          <p>
            Questions? Call us at
            <a href="tel:02031378632" class="text-primary hover:underline">020 3137 8632</a>
          </p>
          <p>
            or email
            <a
              href="mailto:enquiry@governmentexchange.org"
              class="text-primary hover:underline"
            >
              enquiry@governmentexchange.org
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
