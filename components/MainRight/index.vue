<template>
    <div :class="store.mobileOpenState ? 'right' : 'right'">
        <!-- 移动端 Logo -->
        <div class="logo text-hidden" @click="store.mobileFuncState = !store.mobileFuncState">
            <span class="bg">{{ siteUrl && siteUrl.length > 0 ? siteUrl[0] : null }}</span>
            <span class="sm">.{{ siteUrl && siteUrl.length > 0 ? siteUrl[1] : null }}</span>
        </div>
        <!-- 功能区 -->
        <MainRightFunc />

        <!-- 模块 -->
        <MainRightLinks />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { mainStore } from '@/stores'

const store = mainStore()
console.log('tag', store.mobileOpenState)
// 站点链接
let siteUrl = import.meta.env.VITE_SITE_URL.split('.')
// console.log(siteUrl)
</script>

<style lang="scss" scoped>
.right {
    // flex: 1 0 0%;
    width: 50%;
    margin-left: 0.75rem;
    .logo {
        width: 80%;
        font-family: 'Pacifico-Regular';
        font-size: 1.75rem;
        position: fixed;
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;
        animation: fade;
        -webkit-animation: fade 0.5s;
        &:active {
            transform: scale(0.95);
        }
        @media (min-width: 720px) {
            display: none;
        }
    }
    @media (max-width: 720px) {
        margin-left: 0;
        width: 100%;
        &.hidden {
            display: none;
        }
    }
}
</style>
