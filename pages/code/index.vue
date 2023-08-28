<template>
    <div class="grid-container">
        <div class="grid-item" v-for="(tag, index) in tags" :key="index">
            <NuxtLink to="">{{ tag.tag_name }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getTechList } from "../../api/info";
definePageMeta({
    layout: "about",
});
useHead({
    title: "技术",
    meta: [{ name: "description", content: "关于我们页面" }],
});

let tags = ref([] as any[]);

// 获取所有的标签
const getAllTags = async () => {
    let res = await getTechList();
    if (res && res.code == 0) {
        tags.value = res.result;
    }
};

onMounted(async () => {
    await getAllTags();
});
</script>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: 100%;
    .grid-item {
        color: #373e4a;

        padding: 1rem;
        animation: fade;
        -webkit-animation: fade 0.5s;
        border-radius: 6px;
        background: rgba(0.5647, 0.5765, 0.6, 0.08);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        transform: scale(1);
        transition: all 0.3s;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
}
</style>
