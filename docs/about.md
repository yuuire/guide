---
editLink: false
outline: false
lastUpdated: false
---

# Meet the Author

<VPTeamMembers :members="contributors" size="small"/>

## Huge thanks

Without you, this website would never have been created and my privacy journey would never have begun.

<div class="flex justify-center flex-col gap-2 items-center">
    <div class="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-blue-100 dark:bg-blue-400/30 overflow-hidden mask mask-hexagon mb-2 text-blue-500">
        <span class="icon-[hugeicons--share-knowledge] w-9 h-9"></span>
    </div>
    <span class="text-center"><a :href="meta.repo">Become a contributor and <br>spread privacy knowledge</a></span>
</div>

<Credits />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { contributors } from './.vitepress/contributors'
import { meta } from './.vitepress/constants'
import Credits from './.vitepress/theme/components/Contributors.vue'
</script>