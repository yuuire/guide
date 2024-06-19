<script setup lang="ts">
import { inspirations } from '../../constants'
</script>

<template>
  <div flex="~ wrap gap-2">
    <ContentExample
      v-for="item of inspirations"
      :key="item.name"
      :item="item"
    />
  </div>
</template>
