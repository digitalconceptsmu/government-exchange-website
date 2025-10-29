<script setup lang="ts">
useHead({
  title: 'Bespoke Training - Government Exchange',
  meta: [
    { name: 'description', content: 'Custom training solutions tailored to your organization\'s specific needs. Available UK-wide and internationally.' }
  ]
})

const title = ref('Bespoke Training');
const subTitle = ref('Our highly popular and successful open courses are ideal for meeting the training and development needs of individuals within the workforce.');
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" background-image="/images/image012.jpg" />
      <Bespoke />
    </main>
    <Footer />
  </div>
</template>
