<template>
    <div class="BackgroundCover">
        <img class="bg" :src="bgUrl" alt="cover" />
        <div :class="store.backgroundShow ? 'gray sm' : 'gray'" />
        <transition name="el-fade-in-linear">
            <a
                class="down"
                :href="bgUrl"
                target="_blank"
                v-show="store.backgroundShow && store.coverType != '3'"
                >下载壁纸</a
            >
        </transition>
    </div>
</template>

<script setup lang="ts">
import { SuccessPicture } from "@icon-park/vue-next";
import { mainStore } from "@/stores";
const store = mainStore();

let bgUrl = ref<any>(null); // 壁纸链接

const changeBg = (type: any) => {
    if (type == 0) {
        bgUrl.value = `/images/background${Math.floor(
            Math.random() * 10 + 1
        )}.webp`;
    } else if (type == 1) {
        bgUrl.value = "https://api.dujin.org/bing/1920.php";
    } else if (type == 2) {
        bgUrl.value = "https://api.ixiaowai.cn/gqapi/gqapi.php";
    } else if (type == 3) {
        bgUrl.value = "https://api.ixiaowai.cn/api/api.php";
    }
};

onMounted(() => {
    // 加载壁纸
    changeBg(store.coverType);
});

// 监听壁纸种类变化
watch(
    () => store.coverType,
    (value) => {
        changeBg(value);
        ElMessage({
            message: "壁纸设置成功",
            icon: h(SuccessPicture, {
                theme: "filled",
                fill: "#efefef",
            }),
        });
    }
);
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
}
</style>
