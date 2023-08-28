<script setup lang="ts">
const { path } = useRoute();
const articles = await queryContent(path).findOne();

const links = articles.body.toc.links;
</script>

<template>
    <div
        class="sticky hidden p-2 lg:col-span-3 top-28 h-96 lg:block justify-self-end"
    >
        <h1 class="mb-4 text-lg font-bold aText">内容</h1>
        <!-- <NuxtLink
            v-for="link in links"
            :key="link.id"
            :to="`#${link.id}`"
            class="block mb-3 text-md"
        >
            {{ link.text }}
        </NuxtLink> -->

        <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="block mb-3 text-md"
        >
            {{ link.text }}</a
        >
    </div>
</template>
