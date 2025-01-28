<!-- THIS IS NOT MINE -->
<!-- CREDITS TO https://wotaku.wiki/ -->
<!-- https://github.com/wotakumoe/wotaku -->
<!-- أرجوك لا تقاضيني -->

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useElementSize } from '@vueuse/core'

const el = ref<HTMLElement>()
const { height } = useElementSize(el)

watchEffect(() => {
  if (height.value) {
    document.documentElement.style.setProperty(
      '--vp-layout-top-height',
      `${height.value + 16}px`
    )
  }
})

const dismiss = () => {
  localStorage.setItem('ackDomainChange', 'true')
  document.documentElement.classList.add('banner-dismissed')
}
</script>

<template>
  <div rel="el" class="banner">
    <div class="text">
      ⚠️ guide.<bold class="font-bold">yuuire.com</bold> is temporarily moving to
      <a class="underline" href="https://klearprivacy.vercel.app/">klearprivacy.vercel.app</a>. Bookmark & share!!! ⚠️
    </div>
  </div>
</template>

<style>

html {
  --vp-layout-top-height: 88px;
}

@media (min-width: 375px) {
  html {
    --vp-layout-top-height: 40px;
  }
}

@media (min-width: 768px) {
  html {
    --vp-layout-top-height: 40px;
  }
}
</style>

<style scoped>
.banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);

  padding: 8px;
  text-align: center;

  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);

  display: flex;
  justify-content: space-between;
}

.text {
  flex: 1;
}

svg {
  width: 20px;
  height: 20px;
  margin-left: 8px;
}
</style>