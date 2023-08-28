<template>
    <div class="animate">
        <Background />
        <main>
            <div class="container" v-show="!store.backgroundShow">
                <section class="main" v-show="!store.setOpenState">
                    <MainLeft></MainLeft>
                    <MainRight v-show="!store.boxOpenState" />
                </section>
            </div>
        </main>
        <!-- 移动端菜单按钮 -->

        <!-- 底部 -->
        <Footer v-show="!store.backgroundShow && !store.setOpenState" />
    </div>
</template>

<script setup lang="ts">
import { mainStore } from "../stores";
const store = mainStore();
useHead({
    title: "Mr.焦的个人博客-首页",
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
onMounted(() => {});
</script>

<style lang="scss" scoped>
main {
    .container {
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        @media (max-width: 1200px) {
            padding: 0 2vw;
        }
        .main {
            width: 100%;
            height: 100%;
            padding: 0 0.75rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .more {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00000080;
            backdrop-filter: blur(20px);
            z-index: 2;
            animation: fade;
            -webkit-animation: fade 0.5s;
        }
    }
    .menu {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 84%;
        left: calc(50% - 28px);
        width: 56px;
        height: 34px;
        background: rgb(0 0 0 / 20%);
        backdrop-filter: blur(10px);
        border-radius: 6px;
        transition: all 0.3s;
        animation: fade;
        -webkit-animation: fade 0.5s;
        &:active {
            transform: scale(0.95);
        }
        .i-icon {
            transform: translateY(2px);
        }
        @media (min-width: 720px) {
            display: none;
        }
    }
}

// 加载动画层
.animate {
    transform: scale(1);
    transition: all ease 1.25s;
    opacity: 1;
    filter: blur(0);
    width: 100%;
    height: 100%;
}
// .loading {
//     .animate {
//         transform: scale(1.2);
//         transition: all ease 1.25s;
//         opacity: 0;
//         filter: blur(10px);
//     }
// }
</style>
