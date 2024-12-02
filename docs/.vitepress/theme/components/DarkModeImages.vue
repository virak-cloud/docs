<template>
  <div>
    <div v-if="isDark">
      <img width="100%" height="auto" data-zoomable :src="darkSrc" :alt="alt" />
    </div>
    <div v-else>
      <img data-zoomable :src="lightSrc" :alt="alt" />
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

defineProps({
  darkSrc: String,
  lightSrc: String,
  alt: String
})
</script>

<style>
:root {
  --image-border-color: #eee;
}

.dark {
    --image-border-color: #444!important;
}

[data-zoomable] {
  border-radius: 0.5rem;
  border: 1px solid var(--image-border-color);
}
</style>
