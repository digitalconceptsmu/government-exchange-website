<script setup lang="ts">
useHead({
  title: 'Course Registration - Government Exchange',
  meta: [
    { name: 'description', content: 'Register your interest in our professional training courses for civil servants and public sector professionals.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Registration />
    </main>
    <Footer />
  </div>
</template>
