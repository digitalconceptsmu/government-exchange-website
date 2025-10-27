<script setup lang="ts">
useHead({
  title: 'About Us - Government Exchange',
  meta: [
    { name: 'description', content: 'Learn about Government Exchange, a leading provider of accredited professional training for UK civil servants.' }
  ]
})

const title = ref('About Us');
const subTitle = ref('The training division of the Centre for Parliamentary Studies, providing excellence in public service education')
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" background-image="/images/aboutus.jpg" />
      <About />
    </main>
    <Footer />
  </div>
</template>
