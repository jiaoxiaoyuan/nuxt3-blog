<template>
    <!-- <div>
        {{ error.statusCode == 404 ? 404 : 500 }}
    </div> -->

    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-7xl font-bold">
                    {{ error.statusCode }}
                </h1>
                <!-- <p class="py-6">
                    {{ error.statusCode == 404 ? 404 : 500 }}
                </p> -->
                <!-- Display full message if it's dev mode -->
                <DevOnly>
                    <p class="py-6">
                        {{ error.message }}
                    </p>
                </DevOnly>
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="handleError"
                >
                    返回
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    error: any;
}
const props = defineProps<Props>();

const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="less"></style>
