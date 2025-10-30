<script setup lang="ts">
useHead({
  title: 'Bespoke Training - Government Exchange',
  meta: [
    { name: 'description', content: 'Custom training solutions tailored to your organization\'s specific needs. Available UK-wide and internationally.' }
  ]
})

const title = ref('Bespoke Training');
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" background-image="/images/image012.jpg" />
      <Bespoke />
    </main>
    <Footer />
  </div>
</template>
