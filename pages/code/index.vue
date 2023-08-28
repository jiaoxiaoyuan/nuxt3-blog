<template>
    <main>
        <section
            class="lg:px-[10%] px-[5%] lg:pt-20 pt-2 mb-6 overflow-x-hidden"
        >
            <!-- <h1
                class="my-12 text-4xl font-bold leading-normal text-center lg:text-6xl rainbow-text"
            >
                Learn. Share. Grow.
            </h1> -->
            <h2 class="h2title"></h2>
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <!-- <ContentDoc /> -->
                <div
                    v-if="blogNav?.length"
                    class="py-5 border-2 rounded-lg px-7 listBox"
                    v-for="(b, i) in blogNav[0]?.children"
                    :key="`blogNavItem-${b._path}-${i}`"
                >
                    <h2 class="text-lg font-semibold rainbow-text">
                        {{ b.title }}
                    </h2>
                    <ul
                        v-if="b?.children"
                        class="pl-2 mt-4 space-y-3 list-disc list-inside"
                    >
                        <li
                            v-for="(child, k) in b.children"
                            :key="`childNav-${child._path}-${k}-${i}`"
                            class="listItem"
                        >
                            <NuxtLink :to="`/code${child._path}`">
                                {{ child.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "about",
});
const { data: blogNav } = await useAsyncData("navigation", () => {
    return fetchContentNavigation(queryContent("blog"));
});
</script>

<style scoped>
.listBox {
    border-color: var(--border-color);
}

.listItem {
    color: var(--mode-text-colo);
}
.listItem:hover {
    color: var(--mode-text-colo);
}
.h2title {
    align-items: center;
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    /* justify-content: start; */
    line-height: 1.75rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    text-align: center;
    width: 100%;
    color: rgba(0, 0, 0, 0.8);
}

@media screen and (min-width: 480px) {
    /* width */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 100vh;
        background: #edf2f7;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #cbd5e0;
        border-radius: 100vh;
        border: 1px solid #edf2f7;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #a0aec0;
    }
}
</style>
