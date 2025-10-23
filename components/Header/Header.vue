<script setup lang="ts">
interface Props {
  title?: string;
  subTitle?: string;
  size?: "sm" | "md";
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  subTitle: "",
  size: "md",
});

const sizeClasses = {
  sm: {
    container: "py-16 items-start px-24",
    title: "text-5xl font-semibold",
    subtitle: "text-lg",
    gap: "gap-4",
  },
  md: {
    container: "py-36 items-center ",
    title: "text-6xl",
    subtitle: "text-xl w-[800px] text-center",
    gap: "gap-8",
  },
};

const currentSize = sizeClasses[props.size];
</script>

<template>
  <div
    :class="[
      'bg-gradient-to-r from-primary to-[#2d8c60] flex flex-col justify-center w-full',
      currentSize.container,
      currentSize.gap,
    ]"
  >
    <div :class="['text-white', currentSize.title]">
      {{ props.title }}
    </div>
    <div v-if="props.subTitle" :class="['text-white', currentSize.subtitle]">
      {{ props.subTitle }}
    </div>
  </div>
</template>
