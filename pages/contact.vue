<script setup lang="ts">
useHead({
  title: 'Contact Us - Government Exchange',
  meta: [
    { name: 'description', content: 'Get in touch with Government Exchange. Contact us for enquiries, bookings and training needs.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header title="Contact Us" background-image="/images/eu_events.jpg" />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
