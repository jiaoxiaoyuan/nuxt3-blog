<template>
    <div id="loading-box">
        <div class="loading-left-bg"></div>
        <div class="loading-right-bg"></div>
        <div class="spinner-box">
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>

            <div class="loading-word">
                <p class="loading-title" id="loading-title">Mr.焦</p>
                <span id="loading-text">加载中</span>
            </div>
        </div>
    </div>
    <NuxtLayout id="app">
        <NuxtLoadingIndicator />
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
<script lang="ts" setup>
import cursorInit from "./utils/cursor.js";
import { helloInit, checkDays } from "./utils/getTime.js";
import { ID_INJECTION_KEY } from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { mainStore } from "./stores";

const store = mainStore();
provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
});

onMounted(() => {
    // 自定义鼠标
    cursorInit();
    // 欢迎提示
    helloInit();
    // 默哀模式
    checkDays();
    // 监听当前页面宽度
    getWidth();
});

// 页面宽度
const getWidth = () => {
    store.setInnerWidth(window.innerWidth);
};

// 监听宽度变化
watch(
    () => store.innerWidth,
    (value) => {
        if (value && value < 990) {
            store.boxOpenState = false;
        }
    }
);

onBeforeUnmount(() => {
    window.removeEventListener("resize", getWidth);
});

// const layout = 'main-content'
const nuxtApp = useNuxtApp();
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
}
</script>
