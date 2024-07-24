<template>
	<a role="article" :href="props.href"
		class="flex flex-col gap-1 !text-gray-600 text-sm px-4 py-3 rounded-lg border border-2 dark:bg-slate-800 dark:border-gray-800 dark:!text-gray-300 hover:shadow-lg !transition-all focus:shadow-lg dark:shadow-[#1e293b] hover:-translate-y-1 focus:-translate-y-1 !font-normal !no-underline">
		<h3 class="!text-black dark:!text-white !font-medium text-sm !my-0">{{ props.title }}</h3>
	</a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	title: string
	href: string
}>()
</script>
