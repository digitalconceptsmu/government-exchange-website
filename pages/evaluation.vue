<script setup lang="ts">
useHead({
  title: 'Evaluation - Government Exchange',
  meta: [
    { name: 'description', content: 'Our learning evaluation system measures the increase in knowledge and skills using Kirkpatrick Level 2 methodology.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Evaluation />
    </main>
    <Footer />
  </div>
</template>
