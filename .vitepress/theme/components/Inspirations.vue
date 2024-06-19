<script setup lang="ts">
import { inspirations } from '../../constants'
import LinkGrid from './LinkGrid.vue'
</script>

<template>
  <LinkGrid :items="inspirations" />
</template>
