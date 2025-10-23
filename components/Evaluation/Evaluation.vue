<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next';

const evaluationQuestions = [
  'The trainees learn what was intended to be taught',
  'Did the trainee experience what was intended for them to experience?',
  'What is the extent of advancement or change in the trainees after the training, in the direction or area that was intended?'
]
</script>

<template>
  <section id="evaluation" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <div class="flex items-center justify-center gap-3 mb-6">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
              Evaluation
            </h2>
          </div>

          <div class="space-y-4 text-gray-700">
            <p>
              When you attend one of our training courses we offer you the option to use
              our learning evaluation system. This evaluation process measures the increase
              in knowledge, intellectual capability or skills from before to after the learning
              experience (Kirkpatrick Level 2). This enables the trainee and the organisation
              to answer to a series whether:
            </p>
          </div>
        </div>

        <div class="mb-12">
          <ul class="space-y-3">
            <li
              v-for="(question, index) in evaluationQuestions"
              :key="index"
              class="flex items-start gap-3"
            >
              <CheckCircle class="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span class="text-gray-700">{{ question }}</span>
            </li>
          </ul>
        </div>

        <div class="space-y-6 text-gray-700">
          <p>
            If an attendee chooses to take advantage of our evaluation process, then they
            will be required to either take a short test or submit a short piece of work
            (i.e. a submission or an answer to a PQ) before they attend the training course.
            This enables us to assess the level of knowledge possessed prior to the training
            taking place.
          </p>

          <p>
            Having attended the training course they will then be asked to take another short
            test or submit a piece of work, and this will then be assessed by one of our trainers,
            and feedback will be given on the level of increased knowledge or skills gained as
            a result the training.
          </p>
        </div>

        <div class="mt-12 bg-white rounded-xl p-6 border-l-4 border-primary shadow-sm">
          <p class="text-gray-700">
            <span class="font-bold text-primary">Kirkpatrick Level 2</span> evaluation helps
            measure the effectiveness of our training and ensures continuous improvement in
            our course delivery.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
