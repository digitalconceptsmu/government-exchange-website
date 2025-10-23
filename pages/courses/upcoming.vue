<script setup lang="ts">
useHead({
  title: 'Upcoming Courses - Government Exchange',
  meta: [
    { name: 'description', content: 'View our upcoming professional training courses for civil servants and public sector professionals.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navigation />
    <main>
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">Upcoming Courses</h1>
            <p class="text-lg text-gray-600 mb-12">
              Browse our scheduled training courses and register for upcoming sessions.
            </p>

            <div class="bg-gray-50 rounded-xl p-8 text-center">
              <p class="text-gray-700">
                Course schedule coming soon. Please contact us for information about upcoming training dates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
