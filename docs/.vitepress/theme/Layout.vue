<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import {computed} from "vue"
import NotFound from "./components/404.vue"
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { ref, nextTick, provide, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom';


const { isDark } = useData()
const contentLoaded = ref(false);
const route = useRoute()
const weAreInHome = computed(()=>{
  return ['/fa/guides/' , '/en/guides/'].includes(route.path)
})
const applyZoom = () => {
  mediumZoom('[data-zoomable]', {
    background: 'rgba(0,0,0, 0.8)',
    margin: 20
  });
};

onMounted(async () => {
  applyZoom();
  await nextTick();
  contentLoaded.value = true;
});

watch([() => isDark.value, () => route.path], () => {
  nextTick(() => {
    applyZoom();
  })
});

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

</script>

<template>
  <DefaultTheme.Layout>
    <template #not-found>
       <not-found/>
    </template>
  </DefaultTheme.Layout>
  <Teleport v-if="contentLoaded && !weAreInHome" to="#VPContent .content-container" defer>
    <CommentBox />
  </Teleport>
</template>

<style>
#remark42 {
  margin-top: 30px;
}

.root__copyright {
  display: none;
}

/* ============= Transition dark/light Mode ============= */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

:where([dir="ltr"]) {
  .VPSwitchAppearance {
    margin-left: 0.5rem;
  }
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
