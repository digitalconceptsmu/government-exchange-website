<script setup lang="ts">
useHead({
  title: 'Upcoming Open Courses - Government Exchange',
  meta: [
    { name: 'description', content: 'View our upcoming professional training courses for civil servants and public sector professionals.' }
  ]
})

const title = ref('Upcoming Open Courses');
const subTitle = ref('Browse our scheduled training courses and register');
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" size="sm" background-image="/images/banner/in_hourse_training.jpg" />
      <Upcoming />
    </main>
    <Footer />
  </div>
</template>
