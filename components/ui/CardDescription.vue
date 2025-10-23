<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '~/lib/utils'

interface CardDescriptionProps extends HTMLAttributes {
  class?: string
}

const props = defineProps<CardDescriptionProps>()

const descriptionClass = computed(() =>
  cn('text-sm text-muted-foreground', props.class)
)
</script>

<template>
  <p :class="descriptionClass">
    <slot />
  </p>
</template>
