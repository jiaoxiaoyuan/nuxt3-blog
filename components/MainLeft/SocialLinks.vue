<template>
    <!-- 社交链接 -->
    <div class="social">
        <div class="link">
            <a v-for="item in socialLinksData" :key="item.name" :href="item.url" target="_blank" @mouseenter="socialTip = item.tip" @mouseleave="socialTip = '通过这里联系我吧'">
                <img class="icon" :src="item.icon" height="24" />
            </a>
        </div>
        <span class="tip">{{ socialTip }}</span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { getSocialLinks } from "@/api";
import { Error } from '@icon-park/vue-next'

// 社交链接数据
let socialLinksData = ref([
    {
        name: 'Github',
        icon: '/images/icon/github.png',
        tip: '去 Github 看看',
        url: 'https://github.com/jiaoxiaoyuan'
    },
    {
        name: 'BiliBili',
        icon: '/images/icon/bilibili.png',
        tip: '(゜-゜)つロ 干杯 ~',
        url: 'https://space.bilibili.com/394606003'
    },
    {
        name: 'QQ',
        icon: '/images/icon/qq.png',
        tip: '有什么事吗',
        url: 'https://res.abeim.cn/api/qq/?qq=329492979'
    },
    {
        name: 'Email',
        icon: '/images/icon/email.png',
        tip: '来封 Email ~',
        url: '329492979@qq.com'
    }
])
let socialTip = ref('通过这里联系我吧')
</script>

<style lang="scss" scoped>
.social {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 460px;
    width: 100%;
    height: 42px;
    background-color: transparent;
    border-radius: 6px;
    backdrop-filter: blur(0);
    animation: fade;
    -webkit-animation: fade 0.5s;
    transition: all 0.5s;
    @media (max-width: 840px) {
        max-width: 100%;
        justify-content: center;
        .link {
            justify-content: space-evenly !important;
            width: 90%;
        }
        .tip {
            display: none !important;
        }
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            display: inherit;
            .icon {
                width: 24px;
                height: 24px;
                margin: 0 12px;
                transition: all 0.3s;
                &:active {
                    transform: scale(0.9);
                }
            }
        }
    }
    .tip {
        display: none;
        margin-right: 12px;
        animation: fade;
        -webkit-animation: fade 0.5s;
    }
    @media (min-width: 768px) {
        &:hover {
            background-color: #00000040;
            backdrop-filter: blur(5px);
            .tip {
                display: block;
            }
        }
    }
}
</style>
