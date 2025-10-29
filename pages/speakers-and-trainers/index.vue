<script setup lang="ts">
useHead({
  title: 'Speakers & Trainers - Government Exchange',
  meta: [
    { name: 'description', content: 'Meet our highly experienced trainers and speakers from Parliament, Government, and the Civil Service.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header
        title="Speakers & Trainers"
        background-image="/images/uk_events.jpg"
      />
      <SpeakersAndTrainers />
    </main>
    <Footer />
  </div>
</template>