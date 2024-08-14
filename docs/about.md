---
editLink: false
outline: false
lastUpdated: false
---

# Meet the Author

<VPTeamMembers :members="contributors" size="small"/>


## Huge thanks

Without you, this website would never have been created and my privacy journey would never have begun.

<Credits />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { contributors } from './.vitepress/contributors'
import { meta } from './.vitepress/constants'
import Credits from './.vitepress/theme/components/Contributors.vue'
</script>