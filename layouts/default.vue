<template>
    <div class="page-layout">
        <!-- <Navbar></Navbar> -->
        <slot />
    </div>
</template>
<script lang="ts" setup>
onMounted(async () => {
    // console.log('加载完成')
    document.body.classList.remove('loading')
    // 去除加载标记
    // 给加载动画添加结束标记
    let loadingBox = await document.getElementById('loading-box')
    loadingBox?.classList.add('loaded')
})
</script>
<style lang="scss" scoped>
.page-layout {
    width: 100%;
}
</style>
