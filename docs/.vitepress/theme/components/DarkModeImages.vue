<template>
  <div v-if="mounted">
    <img width="100%" height="auto" data-zoomable :src="isDarkMode ? darkSrc : lightSrc" :alt="alt" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'
const { isDark } = useData()

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const isDarkMode = computed(() => {
  return isDark.value
})

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
  --image-border-color: #444 !important;
}

[data-zoomable] {
  border-radius: 0.5rem;
  border: 1px solid var(--image-border-color);
}
</style>
