<script setup lang="ts">
const route = useRoute();
const speakerId = route.params.id as string;

useHead({
  title: 'Speaker Details - Government Exchange',
  meta: [
    { name: 'description', content: 'Learn more about our experienced trainers and speakers.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header
        title="Speaker Details"
        background-image="/images/banner/eu_events.jpg"
        size="sm"
      />
      <SpeakerDetail :speaker-id="speakerId" />
    </main>
    <Footer />
  </div>
</template>
