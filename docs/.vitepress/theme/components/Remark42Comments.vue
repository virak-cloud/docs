<script setup>
import { nextTick, computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useData } from "vitepress";

const remark42 = ref(null);
const remark42Instance = ref(null);
const isScriptLoaded = ref(false); // Track if the script is already loaded
const isEventListenerAdded = ref(false); // Track if event listener is added
const route = useRoute();
const { isDark, lang } = useData();

const fullPath = computed(() => {
  return window.location.origin + route.path;
});

function initRemark42() {
  if (!window.REMARK42 || import.meta.env.SSR) return;

  console.log("Initializing Remark42...");

  if (remark42Instance.value) {
    remark42Instance.value.destroy();
  }

  remark42Instance.value = window.REMARK42.createInstance({
    node: remark42.value,
    url: fullPath.value,
    ...window.remark_config,
  });
}

function loadRemarkScript() {
  if (isScriptLoaded.value) {
    console.log("Remark42 script already loaded");
    return;
  }

  const existingScript = document.querySelector("script[src*='embed.js']");
  if (existingScript) {
    console.log("Removing old Remark42 script");
    existingScript.remove();
  }

  const scriptTag = document.createElement("script");
  scriptTag.src = window.remark_config.host + "/web/embed.js";
  scriptTag.defer = true;

  scriptTag.onload = () => {
    isScriptLoaded.value = true;
    if (!isEventListenerAdded.value) {
      window.addEventListener("REMARK42::ready", initRemark42);
      isEventListenerAdded.value = true;
    }
  };

  document.body.appendChild(scriptTag);
}

onMounted(async () => {
  await nextTick(); // Ensure layout is rendered before initializing

  window.remark_config = {
    host: import.meta.env.VITE_COMMENT_URL,
    site_id: "remark",
    theme: isDark.value ? "dark" : "light",
    no_footer: true,
    locale: lang.value,
  };

  if (window.REMARK42) {
    initRemark42();
  } else {
    loadRemarkScript();
  }
});

onUnmounted(() => {
  console.log("Cleaning up Remark42...");

  if (remark42Instance.value) {
    remark42Instance.value.destroy();
    remark42Instance.value = null;
  }

  if (isEventListenerAdded.value) {
    window.removeEventListener("REMARK42::ready", initRemark42);
    isEventListenerAdded.value = false;
  }
});

// Watch for route and language changes
watch(
  [() => route.path, () => lang.value],
  ([newRoute, newLang], [oldRoute, oldLang]) => {
    let shouldReloadScript = false;

    if (newRoute !== oldRoute) {
      window.remark_config.url = fullPath.value;
      shouldReloadScript = true;
    }

    if (newLang !== oldLang) {
      window.remark_config.locale = newLang;
      shouldReloadScript = true;
    }

    if (shouldReloadScript) {
      if (remark42Instance.value) {
        remark42Instance.value.destroy();
      }
      loadRemarkScript();
    }
  }
);

// Watch for theme changes
watch(isDark, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    window.REMARK42.changeTheme(newVal ? "dark" : "light");
  }
});

</script>
<template>
  <div id="remark42" ref="remark42"></div>
</template>
