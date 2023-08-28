<template>
    <div :class="store.mobileOpenState ? 'left hidden' : 'left'">
        <MainLeft-Message></MainLeft-Message>
        <MainLeftSocialLinks></MainLeftSocialLinks>
    </div>
</template>

<script setup lang="ts">
import { mainStore } from '@/stores'
const store = mainStore()
</script>

<style lang="scss" scoped>
.left {
    // flex: 1 0 0%;
    width: 50%;
    margin-right: 10px;
    transform: translateY(20px);
    &.hidden {
        display: none;
    }
    @media (max-width: 720px) {
        margin-right: 0;
        width: 100%;
    }
}
</style>
