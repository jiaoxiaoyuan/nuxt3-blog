<script setup lang="ts">
interface Props {
    title: string;
    image: string;
    alt: string;
    description: string;
    date: string;
    tags: Array<string>;
}

withDefaults(defineProps<Props>(), {
    title: "no-title",
    image: "#",
    alt: "no-img",
    description: "no description",
    date: "no-date",
    tags: () => [],
});
</script>

<template>
    <header>
        <h1
            class="text-xl font-bold text-center md:text-3xl lg:text-4xl m-7 aText"
        >
            {{ title || "" }}
        </h1>
        <img
            :src="image || ''"
            :alt="alt || ''"
            class="content-center object-cover w-4/6 h-32 m-auto shadow-lg rounded-2xl md:h-72 md:w-4/5"
        />
        <p
            class="max-w-xl mx-auto my-3 text-xs text-center sm:text-sm text-zinc-600"
        >
            {{ description }}
        </p>
        <div class="flex justify-center w-full my-8 text-xs md:text-base">
            <div
                class="content-center gap-8 text-xs text-black md:flex sm:text-sm"
            >
                <div class="flex items-center font-semibold">
                    <LogoDate />
                    <p>{{ date || "" }}</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 my-5">
                    <LogoTag />
                    <template v-for="tag in tags" :key="tag">
                        <span
                            class="px-2 py-1 font-semibold bg-gray-200 rounded-md aText"
                            >{{ tag }}</span
                        >
                    </template>
                </div>
            </div>
        </div>
    </header>
</template>
s
