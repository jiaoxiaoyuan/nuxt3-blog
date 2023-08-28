<script setup lang="ts">
import { makeFirstCharUpper } from "@/utils/helper";

const route = useRoute();

const category = computed(() => {
    const name = route.params.life || "";
    let strName = "";

    if (Array.isArray(name)) strName = name.at(0) || "";
    else strName = name;
    return makeFirstCharUpper(strName);
});
</script>

<template>
    <div class="container mx-auto">
        <div class="p-6 mx-3 my-4 bg-gray-200 rounded-md">
            <h1
                class="my-5 text-4xl font-semibold leading-tight text-black md:text-5xl"
            >
                #{{ category }}
            </h1>
        </div>
    </div>
</template>
