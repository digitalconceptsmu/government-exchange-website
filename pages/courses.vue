<script setup lang="ts">
useHead({
  title: "Training Courses - Government Exchange",
  meta: [
    {
      name: "description",
      content:
        "Explore our comprehensive range of professional development courses for civil servants and public sector professionals.",
    },
  ],
});

const title = ref("Our Courses");
const subTitle = ref(
  "Professional development courses designed for civil servants and public sector professionals"
);
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" size="sm" />
      <Courses />
    </main>
    <Footer />
  </div>
</template>
