<script setup lang="ts">
useHead({
  title: 'Upcoming Courses - Government Exchange',
  meta: [
    { name: 'description', content: 'View our upcoming professional training courses for civil servants and public sector professionals.' }
  ]
})

const title = ref('Upcoming Courses');
const subTitle = ref('Browse our scheduled training courses and register for upcoming sessions');
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" size="sm" background-image="/images/in_hourse_training.jpg" />
      <Upcoming />
    </main>
    <Footer />
  </div>
</template>
