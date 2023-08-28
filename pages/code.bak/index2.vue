<template>
    <div class="grid-container">
        <div class="grid-item">
            <NuxtLink to="">CSS</NuxtLink>
        </div>
        <div class="grid-item">
            <NuxtLink to="">HTML</NuxtLink>
        </div>
        <div class="grid-item">
            <NuxtLink to="">Canvas</NuxtLink>
        </div>
        <div class="grid-item">
            <NuxtLink to="">SVG</NuxtLink>
        </div>
        <div class="grid-item">ECharts/Antv</div>
        <div class="grid-item">JavaScript</div>
        <div class="grid-item">TypeScript</div>
        a
        <div class="grid-item">Node</div>
        <div class="grid-item">Vue</div>
        <div class="grid-item">React</div>
        <div class="grid-item">WebComponents</div>
        <div class="grid-item">WebGL</div>
        <div class="grid-item">WebGPU</div>
        <div class="grid-item">webRTC</div>
        <div class="grid-item">Electron</div>
        <div class="grid-item">Hybrid</div>
        <div class="grid-item">ReactNative</div>
        <div class="grid-item">Flutter</div>
        <div class="grid-item">weex</div>
        <div class="grid-item">小程序</div>
        <div class="grid-item">Android</div>
        <div class="grid-item">IOS</div>
        <div class="grid-item">SQL</div>
        <div class="grid-item">Linux</div>
        <div class="grid-item">Docker</div>
        <div class="grid-item">Python</div>
        <div class="grid-item">Go</div>
        <div class="grid-item">JAVA</div>
        <div class="grid-item">php</div>
        <div class="grid-item">Rust</div>
        <div class="grid-item">Git</div>
        <div class="grid-item">Markdown</div>
        <div class="grid-item">数据结构</div>
        <div class="grid-item">算法</div>
        <div class="grid-item">计算机网络</div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "about",
});
useHead({
    title: "技术",
    meta: [{ name: "description", content: "关于我们页面" }],
});

console.log("tag", "about");
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
