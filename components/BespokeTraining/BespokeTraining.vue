<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="bg-primary rounded-2xl overflow-hidden max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div class="p-8 lg:p-12">
            <h2 class="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Need Bespoke Training?
            </h2>
            <p class="text-white/90 mb-8">
              We offer customized training solutions tailored to your organization's specific needs. Available UK-wide and internationally.
            </p>
            <Button
              size="lg"
              class="bg-white text-primary hover:bg-gray-100 flex items-center"
            >
              Request Bespoke Training
              <ArrowRight class="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div class="p-8 lg:p-12 space-y-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 class="text-white font-semibold mb-2">Flexible Delivery</h4>
              <p class="text-sm text-white/80">
                In-person, virtual, or hybrid training options
              </p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 class="text-white font-semibold mb-2">Expert Facilitation</h4>
              <p class="text-sm text-white/80">
                Delivered by experienced sector specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
