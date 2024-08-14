<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import gradient from './components/gradient.vue'

import { useData } from 'vitepress'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]
  // @ts-ignore
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
    <link rel="preload" as="image" href="/assets/wordmark.png" fetchpriority="high">
    <DefaultTheme.Layout>
        <template #doc-top>
            <gradient
                class="h-[220px] top-0 left-0 opacity-25 dark:opacity-[.55] pointer-events-none"
                static
            />
        </template>
    </DefaultTheme.Layout>
</template>

<style>
:root {
    --switch-duration: 1.75s;
}

.-animated {
    --switch-duration: 1s;
}

@keyframes scale {
    0% {
        mask-size: 0;
    }
    10% {
        mask-size: 50vmax;
    }
    90% {
        mask-size: 50vmax;
    }
    100% {
        mask-size: 2000vmax;
    }
}

.VPSwitchAppearance {
    width: 22px !important;
}

.VPSwitchAppearance .check {
    background-color: transparent;
    transform: none !important;
}

html.dark {
    @apply bg-slate-900;
}
</style>
