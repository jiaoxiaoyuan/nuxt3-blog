<script lang="ts" setup>
onMounted(async () => {
    // console.log('加载完成')
    document.body.classList.remove("loading");
    // 去除加载标记
    // 给加载动画添加结束标记
    let loadingBox = await document.getElementById("loading-box");
    loadingBox?.classList.add("loaded");
});
</script>

<template>
    <div class="page-layout">
        <slot />
    </div>
</template>

<style>
.page-layout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
}
</style>
