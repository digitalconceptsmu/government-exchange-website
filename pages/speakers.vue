<script setup lang="ts">
useHead({
  title: 'Speakers & Trainers - Government Exchange',
  meta: [
    { name: 'description', content: 'Meet our highly experienced trainers and speakers with extensive experience in Parliament, Government and public service.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Speakers />
    </main>
    <Footer />
  </div>
</template>
