<template>
    <main class="container max-w-5xl mx-auto text-zinc-600">
        <CodeTopic />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <template v-for="post in formatedData" :key="post.title">
                <CodeList
                    :path="post.path"
                    :title="post.title"
                    :date="post.date"
                    :description="post.description"
                    :image="post.image"
                    :alt="post.alt"
                    :og-image="post.ogImage"
                    :tags="post.tags"
                    :published="post.published"
                />
            </template>
            <template v-if="data?.length === 0">
                <Empty />
            </template>
        </div>
    </main>
</template>
<script lang="ts" setup>
const route = useRoute();
const category = computed(() => {
    const name = route.params.code || "";
    let strName = "";

    if (Array.isArray(name)) strName = name.at(0) || "";
    else strName = name;
    return strName;
});

definePageMeta({
    layout: "about",
});
useHead({
    title: category.value || "Mr.焦的个人博客-全栈工程师",
    meta: [
        {
            name: "description",
            content: `${category.value}`,
        },
        {
            name: "keywords",
            content:
                "个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客",
        },
    ],
    titleTemplate: "%s - Mr.焦的个人博客-全栈工程师",
});

const { data } = await useAsyncData("home", () =>
    queryContent("/article")
        .where({ tags: { $contains: category.value } })
        .find()
);

// const { data } = await useAsyncData(`home`, () => {
//     return queryContent("/article/vue")
//         .where({ tags: { $contains: category.value } })
//         .findOne();
// return fetchContentNavigation();
// });

const formatedData = computed(() => {
    return data.value?.map((articles: any) => {
        return {
            path: articles._path,
            title: articles.title || "no-title available",
            description: articles.description || "no-descriptoin available",
            image: articles.image || "/nuxt-blog/no-image_cyyits.png",
            alt: articles.alt || "no alter data available",
            ogImage: articles.ogImage || "/nuxt-blog/no-image_cyyits.png",
            date: articles.date || "not-date-available",
            tags: articles.tags || [],
            published: articles.published || false,
        };
    });
});
</script>
