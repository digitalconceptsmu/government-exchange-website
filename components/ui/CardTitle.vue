<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '~/lib/utils'

interface CardTitleProps extends HTMLAttributes {
  class?: string
}

const props = defineProps<CardTitleProps>()

const titleClass = computed(() =>
  cn('font-semibold leading-none tracking-tight', props.class)
)
</script>

<template>
  <h3 :class="titleClass">
    <slot />
  </h3>
</template>
