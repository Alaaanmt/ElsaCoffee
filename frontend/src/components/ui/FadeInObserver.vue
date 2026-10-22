<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Verificación inicial por si el elemento ya está visible al cargar la página
  if (elementRef.value) {
    const rect = elementRef.value.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      isVisible.value = true
      return
    }
  }

  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      isVisible.value = true
      if (elementRef.value) observer?.unobserve(elementRef.value)
    }
  }, { threshold: 0.15 })

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="elementRef"
    class="transition-all duration-700 ease-out"
    :class="[
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-6'
    ]"
  >
    <slot />
  </div>
</template>