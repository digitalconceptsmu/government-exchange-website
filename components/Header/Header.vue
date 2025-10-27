<script setup lang="ts">
interface Props {
  title?: string;
  subTitle?: string;
  size?: "sm" | "md";
  backgroundImage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  subTitle: "",
  size: "md",
  backgroundImage: "",
});

const sizeClasses = {
  sm: {
    container: "py-16 items-start px-4 lg:px-24",
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
      'relative flex flex-col justify-center w-full overflow-hidden',
      currentSize.container,
      currentSize.gap,
    ]"
  >
    <div
      v-if="props.backgroundImage"
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${props.backgroundImage})` }"
    ></div>

    <div
      :class="[
        'absolute inset-0',
        props.backgroundImage
          ? 'bg-primary/90'
          : 'bg-gradient-to-r from-primary to-[#2d8c60]',
      ]"
    ></div>

    <!-- Content -->
    <div :class="['text-white relative z-10', currentSize.title]">
      {{ props.title }}
    </div>
    <div
      v-if="props.subTitle"
      :class="['text-white relative z-10', currentSize.subtitle]"
    >
      {{ props.subTitle }}
    </div>
  </div>
</template>
