<template>
    <div class="links">
        <!-- <div class="line">
            <span class="title">网站列表</span>
        </div> -->
        <el-row class="link-all line" :gutter="20">
            <!-- <el-col :span="8" v-for="(item, index) in linksData" :key="item" @click="jumpLink(item.link)"> -->
            <el-col :span="8" v-for="(item, index) in linksData" :key="index">
                <NuxtLink :to="item.link">
                    <div
                        :to="item.link"
                        class="item cards"
                        :style="index < 3 ? 'margin-bottom: 20px' : null"
                    >
                        <span class="name">{{ item.name }}</span>
                    </div>
                </NuxtLink>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
// const router = useRouter();

// 网站链接数据
// 建议不要超出6个，若需要超出请自行调整样式
let linksData = [
    {
        // icon: Blog,
        name: "技术",
        link: "/code",
    },

    {
        // icon: Cloud,
        name: "生活",
        link: "/life",
    },
    {
        // icon: CompactDisc,
        name: "工具",
        link: "/tools",
    },
    {
        // icon: Compass,
        name: "导航",
        link: "/nav",
    },
    {
        // icon: Book,
        name: "交流",
        link: "/community",
    },
    {
        // icon: Flask,
        name: "关于",
        link: "/me",
    },
];

// 链接跳转
const jumpLink = (url) => {
    console.log("tag", url);
    // window.open(url, '_blank')
    // router.push({
    //     path: url
    // })
    // if (url) {
    //     navigateTo({
    //         path: url
    //     })
    // }

    if (url) {
        // 延迟跳转，解决浏览器缓存问题
        setTimeout(() => {
            // router.push(url)
            navigateTo("/code");
        }, 300);
    }
};
</script>

<style lang="scss" scoped>
.links {
    .line {
        margin: 2rem 0.25rem 1rem;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        animation: fade;
        -webkit-animation: fade 0.5s;
        .title {
            margin-left: 8px;
            font-size: 1.15rem;
            text-shadow: 0 0 5px #00000050;
        }
    }
    .link-all {
        .item {
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            animation: fade;
            -webkit-animation: fade 0.5s;

            &:hover {
                transform: scale(1.02);
                background: rgb(0 0 0 / 40%);
                transition: 0.3s;
            }
            .name {
                font-size: 1.1rem;
                margin-left: 8px;
            }
            @media (min-width: 720px) and (max-width: 820px) {
                .name {
                    display: none;
                }
            }
            @media (max-width: 720px) {
                height: 80px;
            }
            @media (max-width: 460px) {
                flex-direction: column;
                .name {
                    font-size: 1rem;
                    margin-left: 0;
                    margin-top: 8px;
                }
            }
        }
    }
}
</style>
