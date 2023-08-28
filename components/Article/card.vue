<script lang="ts" setup>
interface Props {
    path: string;
    title: string;
    date: string;
    description: string;
    image: string;
    alt: string;
    ogImage: string;
    tags: Array<string>;
    published: boolean;
}

withDefaults(defineProps<Props>(), {
    path: "/",
    title: "no-title",
    date: "no-date",
    description: "no-description",
    image: "/nuxt-blog/no-image_cyyits.png",
    alt: "no-alt",
    ogImage: "/nuxt-blog/no-image_cyyits.png",
    tags: () => [],
    published: false,
});
</script>

<template>
    <article
        class="m-2 overflow-hidden border shadow-sm group rounded-2xl text-zinc-700"
    >
        <NuxtLink :to="path">
            <img
                class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
                :src="image"
                :alt="alt"
            />
            <div class="px-3 pb-4">
                <div class="pt-3 pb-2 text-black">
                    <div class="flex items-center">
                        <LogoDate />
                        {{ date }}
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <LogoTag />
                        <template v-for="tag in tags" :key="tag">
                            <span>{{ tag }}</span>
                        </template>
                    </div>
                </div>
                <h2
                    class="pb-1 text-xl font-semibold text-black group-hover:text-sky-700"
                >
                    {{ title }}
                </h2>
                <p class="text-base text-ellipsis line-clamp-2">
                    {{ description }}
                </p>
                <div
                    class="flex items-center py-2 group-hover:underline text-sky-700"
                >
                    <p>Read More</p>
                    <LogoArrow />
                </div>
            </div>
        </NuxtLink>
    </article>
</template>
