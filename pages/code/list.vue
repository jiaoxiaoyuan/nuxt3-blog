<template>
    <div>信息列表</div>
</template>

<script setup lang="ts">
import { getRecommendAll } from "../../api/info";
import { useRouter } from "vue-router";
const router = useRouter();
definePageMeta({
    layout: "about",
});

const loading = ref(true);
const recommend = ref<any>([]);

// 提示一：延迟 1 秒替换骨架屏，目的是模拟掘金首页文章初次渲染的效果
setTimeout(() => {
    loading.value = false;
}, 1000);

const { data }: any = await getRecommendAll();
recommend.value = data.filter((v: { item_type: number }) => v.item_type === 2);

onMounted(() => {
    // 提示二：延迟 1.5 秒原因是 loadingDiv 元素在 "提示一" 中需要延迟 1 秒后才渲染出来，
    // 需要设置大于"提示一" 中的时间，不然拿不到元素
    const loadingDiv = document.querySelector("#bottom-loading");

    setTimeout(() => {
        const loadingDiv = document.querySelector("#bottom-loading");
        const observerFn = (entries: any) => {
            entries.forEach(async (item: any) => {
                // 一旦元素可见，调用函数
                if (item.isIntersecting) {
                    // const { data }: any = await getRecommendAll();
                    // 过滤一下，把不是文章类型的去掉
                    // const list = data.filter(
                    //     (v: { item_type: number }) => v.item_type === 2
                    // );
                    // recommend.value = [...recommend.value, ...list];
                }
            });
        };
        const observer = new IntersectionObserver(observerFn);
        observer.observe(loadingDiv!);
    }, 1500);
});
</script>

<style scoped lang="scss"></style>
