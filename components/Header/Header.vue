<script setup lang="ts">
interface Props {
  title?: string
  subTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subTitle: ''
})
</script>

<template>
  <div class="bg-gradient-to-r from-primary to-[#2d8c60] py-36 flex flex-col items-center justify-center w-full gap-8">
    <div class="text-white text-6xl">
      {{ props.title }}
    </div>
    <div class="text-white text-xl w-[800px] text-center">
      {{ props.subTitle }}
    </div>
  </div>
</template>