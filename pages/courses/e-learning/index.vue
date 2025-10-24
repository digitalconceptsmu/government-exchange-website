<script setup lang="ts">
useHead({
  title: 'E-learning - Government Exchange',
  meta: [
    { name: 'description', content: 'Access our online learning platform with flexible professional development courses.' }
  ]
})

const title = ref('E-learning');
const subTitle = ref('Flexible online learning solutions designed for busy professionals');
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" size="sm" />
      <Elearning />
      <ElearningCTA />
    </main>
    <Footer />
  </div>
</template>
