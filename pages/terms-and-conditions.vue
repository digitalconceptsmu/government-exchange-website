<script setup lang="ts">
useHead({
  title: "Terms & Conditions - Government Exchange",
  meta: [
    {
      name: "description",
      content: "Terms and Conditions for Government Exchange training courses and events.",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navigation />
    <main>
      <Header title="Terms & Conditions" background-image="/images/terms_and_conditions.jpg" />

      <div class="container mx-auto px-4 max-w-4xl py-12">
        <div class="bg-white rounded-xl shadow-sm p-8 lg:p-12">
          <div class="prose prose-gray max-w-none">
            <ul class="space-y-6 text-gray-700 leading-relaxed">
              <li>
                When completing this booking form, which constitutes a legally binding contract, the purchaser is liable for full payment of the delegate fees.
              </li>

              <li>
                Invoices are dispatched immediately upon receipt of the registration form, and payment must be made immediately upon receipt of the invoice.
              </li>

              <li>
                All amendments and cancellations to bookings must be made in writing.
              </li>

              <li>
                If notification of cancellation is received no later than 7 days from the date of the invoice, purchaser will be subject to an administrative fee equal to 25% of the applicable per-delegate rate and charged per cancelled delegate place.
              </li>

              <li>
                If notification of cancellation is received after 7 days from the date of the invoice, the purchaser will be subject to the full delegate fee.
              </li>

              <li>
                If a delegate does not attend the event the full course fee will be charged.
              </li>

              <li>
                If for any exceptional reason a course is cancelled by us, the full registration fee will be given a full credit to the value of the fee paid and can attend any future Government Exchange course.
              </li>

              <li>
                Government Exchange reserves the right to change the venue, timing, content, or course leader of any course. However, Government Exchange does not accept any additional liability.
              </li>

              <li>
                Government Exchange is not responsible for the behaviour of the delegates while at the courses / events, and is also not accountable for any costs, damages and/or expenses connected with the delegate's transportation to/from the course venue or anything relating to accommodations third party services in connection with the course.
              </li>

              <li>
                Government Exchange reserves the right to remove, cancel or postpone any delegate attendance during the event.
              </li>

              <li>
                Government Exchange does not accept any additional liability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 1rem;
}
</style>
