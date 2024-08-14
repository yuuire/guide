<script setup lang="ts">
import { otherContributors } from "../../contributors";
import { meta } from "../../constants";
</script>

<template>
  <h3 class="text-center">Contributors</h3>
  <hr />
  <!-- IGNORE: justify -->
  <div class="flex justify-center flex-wrap gap-6 pt-2">
    <!-- <div v-for="(c) in otherContributors.base" class="flex flex-col gap-2 items-center">
      <img :src="c.avatar" class="w-16 h-16 rounded-lg" />
      <a class="break-words text-center" v-if="c.website" :href="c.website" v-html="c.name"></a>
      <span v-else v-html="c.name"></span>
    </div> -->
    <div v-for="(c) in otherContributors.base" class="flex flex-col gap-2 items-center">
      <div class="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-blue-100 dark:bg-blue-400/30 overflow-hidden mask mask-hexagon mb-2 text-blue-500">
        <span class="icon-[hugeicons--share-knowledge] w-9 h-9"></span>
      </div>
      <span class="text-center"><b>You!</b><br><a :href="meta.repo">Become a contributor and <br>spread privacy knowledge</a></span>
    </div>
  </div>
  
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
