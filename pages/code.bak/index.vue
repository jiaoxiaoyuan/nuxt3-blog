<template>
    <main class="container max-w-5xl mx-auto text-zinc-600">
        <CodeHero />
        <div class="flex flex-wrap gap-3 px-6 mt-12">
            <template v-for="topic in topics" :key="topic">
                <CodeCard :title="makeFirstCharUpper(topic)" />
            </template>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { makeFirstCharUpper } from "@/utils/helper";
definePageMeta({
    layout: "about",
});
useHead({
    title: "技术 | Mr.焦的个人博客-全栈工程师",
    meta: [
        {
            name: "description",
            content: `此个人博客是一个专注于IT技术学习交流的个人技术博客网站,包括敏捷开发、自动化测试、网站开发、服务器运维等领域，创建该个人博客也是为了方便与志同道合的朋友一起互相学习交流，分享经验，感谢大家的支持。`,
        },
        {
            name: "keywords",
            content:
                "个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客",
        },
        { name: "theme-color", content: "#424242" },
        { name: "author", content: "Mr.焦" },
    ],
});
const topics = [
    "javascript",
    "typescript",
    "git",
    "docker",
    "kubernetes",
    "vue",
    "nuxt",
    "pinia",
    "vuex",
    "firebase",
    "supabse",
    "cypress",
    "vercel",
    "namecheap",
];
</script>
<style lang="scss" scoped>
//
</style>
