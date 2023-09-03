<template>
	<div class="animate">
		<HomBackground></HomBackground>
		<!-- 主界面 -->
		<Transition name="fade" mode="out-in">
			<main id="main">
				<div class="Mcontainer" v-show="!store.backgroundShow">
					<section class="main" v-show="!store.setOpenState">
						<HomMainLeft></HomMainLeft>
						<HomMainRight v-show="!store.boxOpenState" />
					</section>
				</div>
			</main>
		</Transition>
		<!-- 页脚 -->
		<Transition name="fade" mode="out-in">
			<Footer />
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { mainStore } from '../stores';
const store = mainStore();
useHead({
	title: 'Mr.焦的个人博客-首页',
	meta: [
		{
			name: 'description',
			content: `此个人博客是一个专注于IT技术学习交流的个人技术博客网站,包括敏捷开发、自动化测试、网站开发、服务器运维等领域，创建该个人博客也是为了方便与志同道合的朋友一起互相学习交流，分享经验，感谢大家的支持。`,
		},
		{
			name: 'keywords',
			content: '个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客',
		},
		{ name: 'theme-color', content: '#424242' },
		{ name: 'author', content: 'Mr.焦' },
	],
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
//
</style>
