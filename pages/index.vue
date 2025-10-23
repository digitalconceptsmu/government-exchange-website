<script setup lang="ts">
useHead({
  title: 'Government Exchange - Centre for Parliamentary Studies',
  meta: [
    { name: 'description', content: 'Leading provider of accredited professional training for UK civil servants and public sector professionals.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Hero />
      <About />
      <TrainingCategories />
      <Testimonials />
    </main>
    <Footer />
  </div>
</template>
