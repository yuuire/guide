<template>
    <link rel="preload" as="image" href="/assets/wordmark.png" />
    <gradient
        class="h-[60vh] -top-16 pointer-events-none opacity-[.35] dark:opacity-50"
    />
    <header
        class="relative flex flex-col justify-center items-center w-full px-6 pt-6 md:pt-0 mb-16 md:mb-8 overflow-hidden"
        style="min-height: calc(100vh - 64px)"
    >
        <img
            src="/assets/wordmark.png"
            alt="Wordmark"
            class="max-w-[50ch] w-full object-contain object-left md:object-center mr-auto md:mr-0"
            style="aspect-ratio: 1.5 / 0.8"
        />
        <h3
            class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 !leading-normal text-left md:text-center w-full max-w-[50rem]"
        >
            Your guide to
            <span
                class="text-transparent font-semibold bg-clip-text bg-gradient-to-b from-sky-200 to-indigo-300">
                securing your digital life
            </span>
            and
            <span
                class="text-transparent font-semibold bg-clip-text bg-gradient-to-b from-sky-200 to-indigo-300">
                protecting your privacy
            </span>
        </h3>
        <section
            class="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto gap-4 mt-10 mb-12"
        >
            <a
                class="text-white font-medium text-lg bg-blue-500 px-6 py-2.5 rounded-full"
                href="/guides/introduction"
            >
                Get Started
            </a>
            <a
                class="text-black/80 font-medium text-lg dark:text-white bg-blue-200/25 dark:bg-blue-400/20 px-6 py-2.5 rounded-full"
                href="/recommendations/"
            >
                Recommendations
            </a>
            <a
                class="text-black/80 font-medium text-lg dark:text-white bg-blue-200/25 dark:bg-blue-400/20 px-6 py-2.5 rounded-full"
                href="/privacy-settings/"
            >
                Privacy Settings
            </a>
        </section>
    </header>
</template>

<script setup lang="ts">
import gradient from './gradient.vue'
</script>
