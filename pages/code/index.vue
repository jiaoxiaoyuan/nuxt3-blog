<template>
    <div class="grid-container">
        <h1>2455</h1>
        <!-- <div class="grid-item" v-for="(tag, index) in tags" :key="index">
            <NuxtLink to="/code/list">{{ tag.tag_name }}</NuxtLink>
        </div> -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "about",
});
useHead({
    title: "技术",
    meta: [{ name: "description", content: "关于我们页面" }],
});
</script>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: calc(100vh - 60px - 60px - 20px);
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
.listItem {
    width: 100%;
    height: 100vh;
}
</style>
