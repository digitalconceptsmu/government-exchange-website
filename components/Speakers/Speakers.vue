<script setup lang="ts">
import { Users } from 'lucide-vue-next'

interface Speaker {
  id: number
  name: string
  title: string
  description: string
  image: string
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Lord Peter Lilley',
    title: 'Member of the House of Lords & former Shadow Chancellor of the Exchequer',
    description: 'Expert in parliamentary procedures and legislative processes',
    image: ''
  },
  {
    id: 2,
    name: 'Mike Freer',
    title: 'Former Justice Minister & Government Whip',
    description: 'Specialist in government operations and justice policy',
    image: ''
  },
  {
    id: 3,
    name: 'David Davies',
    title: 'Former Secretary State for Wales',
    description: 'Leadership and strategic government planning expert',
    image: ''
  },
  {
    id: 4,
    name: 'John Bercow MP',
    title: 'Speaker of the House of Commons',
    description: 'Parliamentary authority and constitutional expert',
    image: ''
  },
  {
    id: 5,
    name: 'Rt Hon Sir Menzies Campbell CBE QC',
    title: 'Former Leader of the Liberal Democrats',
    description: 'Political leadership and strategic policy development',
    image: ''
  },
  {
    id: 6,
    name: 'Michael Portillo',
    title: 'Broadcaster and former Secretary of State',
    description: 'Communication skills and public service excellence',
    image: ''
  }
]
</script>

<template>
  <section id="speakers" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users class="w-6 h-6 text-primary" />
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
              Speakers & Trainers
            </h2>
          </div>

          <div class="text-gray-700 space-y-4">
            <p>
              All our courses are led by highly experienced trainers that have a track record
              of delivering training to the very highest standard. Each trainer that works with us
              also has personal experience of working at the highest level of either Parliament,
              Government or the Civil Service, enabling them to give a genuine insight into the
              course subject matter. As well as our trainers, we have a wide range of other speakers
              that include senior Parliamentarians, Parliamentary Clerks, Civil Servants and Academics.
            </p>
          </div>
        </div>

        <!-- Speakers Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="speaker in speakers"
            :key="speaker.id"
            class="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <!-- Speaker Image -->
            <div class="aspect-square bg-gray-200 overflow-hidden">
              <img
                :src="speaker.image"
                :alt="speaker.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Speaker Info -->
            <div class="p-6">
              <h3 class="text-lg font-bold text-primary mb-2 hover:underline cursor-pointer">
                {{ speaker.name }}
              </h3>
              <p class="text-sm text-gray-900 font-medium mb-3">
                {{ speaker.title }}
              </p>
              <p class="text-sm text-gray-600">
                {{ speaker.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <p class="text-gray-700">
            Our diverse team of trainers and speakers brings together decades of experience
            from the highest levels of government, parliament, and public service.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
