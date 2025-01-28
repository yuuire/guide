<script setup lang="ts">
import { otherContributors } from "../../contributors";
import { meta } from "../../constants";
</script>

<template>
  <!-- <h3 class="text-center">Contributors</h3>
  <hr />
  <div class="flex flex-wrap gap-6 pt-2">
    <div v-for="(c) in otherContributors.base" class="flex flex-col gap-2 items-center">
      <img :src="c.avatar" class="w-16 h-16 rounded-lg" />
      <a class="break-words text-center" v-if="c.website" :href="c.website" v-html="c.name"></a>
      <span v-else v-html="c.name"></span>
    </div>
  </div> -->
  
  <h3 class="text-center">Inspirations</h3>
  <hr />
  <div class="flex flex-wrap gap-6 pt-2">
    <div v-for="(c) in otherContributors.specialthanks" class="flex flex-col gap-2 items-center">
      <img :src="c.avatar" class="w-16 h-16 rounded-lg" />
      <a class="break-words text-center" v-if="c.website" :href="c.website" v-html="c.name"></a>
      <span v-else v-html="c.name"></span>
    </div>
  </div>
</template>
