<script setup lang="ts">
import { nextTick, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

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

const route = useRoute();

function scrollToId(id: string) {
  if (!id) return;
  nextTick(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 130;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
}

onMounted(() => {
  if (route.hash) {
    const hash = route.hash.startsWith("#") ? route.hash.slice(1) : route.hash;
    setTimeout(() => scrollToId(hash), 300);
  }
});

watch(
  () => route.hash,
  (newHash) => {
    if (!newHash) return;
    const hash = newHash.startsWith("#") ? newHash.slice(1) : newHash;
    scrollToId(hash);
  }
);
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <Header :title="title" :sub-title="subTitle" size="sm" background-image="/images/banner/uk_training.jpg" />
      <Courses />
    </main>
    <Footer />
  </div>
</template>
