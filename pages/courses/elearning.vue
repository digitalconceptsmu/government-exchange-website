<script setup lang="ts">
useHead({
  title: 'E-learning - Government Exchange',
  meta: [
    { name: 'description', content: 'Access our online learning platform with flexible professional development courses.' }
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
            <h1 class="text-4xl font-bold text-gray-900 mb-6">E-learning</h1>
            <p class="text-lg text-gray-600 mb-12">
              Flexible online learning solutions designed for busy professionals.
            </p>

            <div class="space-y-8">
              <div class="bg-gray-50 rounded-xl p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Online Training Platform</h2>
                <p class="text-gray-700 mb-4">
                  Access our comprehensive e-learning courses anytime, anywhere. Our platform offers:
                </p>
                <ul class="space-y-2 text-gray-700 ml-6">
                  <li>• Self-paced learning modules</li>
                  <li>• Interactive content and assessments</li>
                  <li>• CPD accredited certificates</li>
                  <li>• Expert support and guidance</li>
                </ul>
              </div>

              <div class="bg-primary/5 rounded-xl p-8 text-center">
                <p class="text-gray-700">
                  E-learning platform launching soon. Contact us to express your interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
