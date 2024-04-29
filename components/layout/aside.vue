<template>
	<div class="text-center">
		<div class="rounded-full">
			<img src="http://img.mtsws.cn/LightPicture/2023/08/749568009e7b596f.png" alt="Profile image" />
		</div>
		<div class="font-bold">Mr 焦</div>
	</div>
	<el-menu @open="handleOpen" @close="handleClose" :default-active="activeIndex" background-color="#ffffffa6">
		<el-menu-item index="1">
			<NuxtLink to="/">
				<span>首页</span>
			</NuxtLink>
		</el-menu-item>
		<el-menu-item index="2">
			<NuxtLink to="/code">
				<span>技术</span>
			</NuxtLink>
		</el-menu-item>
		<el-menu-item index="3">
			<NuxtLink to="/life">
				<span>生活</span>
			</NuxtLink>
		</el-menu-item>
		<el-menu-item index="4">
			<NuxtLink to="/tools">
				<span>工具</span>
			</NuxtLink>
		</el-menu-item>

		<el-menu-item index="5">
			<NuxtLink to="/nav">
				<span>导航</span>
			</NuxtLink>
		</el-menu-item>

		<el-menu-item index="6">
			<NuxtLink to="/community">
				<span>交流</span>
			</NuxtLink>
		</el-menu-item>

		<el-menu-item index="7">
			<NuxtLink to="/about">
				<span>关于</span>
			</NuxtLink>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
// const route = useRoute();
const router = useRouter();
const activeIndex = ref<any>(null);
const handleOpen = (key: string, keyPath: string[]) => {
	// console.log("handleOpen", key, keyPath);
	// activeIndex.value = key;
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log('handleClose', key, keyPath);
};

watch(
	() => router.currentRoute.value,
	(newValue: any) => {
		let { path } = newValue;
		if (path === '/') {
			activeIndex.value = '1';
		} else if (path === '/code') {
			activeIndex.value = '2';
		} else if (path === '/life') {
			activeIndex.value = '3';
		} else if (path === '/tools') {
			activeIndex.value = '4';
		} else if (path === '/nav') {
			activeIndex.value = '5';
		} else if (path === '/community') {
			activeIndex.value = '6';
		} else if (path === '/about') {
			activeIndex.value = '7';
		}
	},
	{ immediate: true }
);
</script>

<style scoped lang="scss">
.text-center {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	.rounded-full {
		aspect-ratio: 1/1;
		display: block;
		overflow: hidden;
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			border: 3px solid hsla(0, 0%, 100%, 0.3);
			overflow: hidden;
		}
	}

	.font-bold {
		margin-top: 1rem;
		font-size: 18px;
		line-height: 2rem;
		color: #373e4a;
		font-family: 'Pacifico-Regular';
	}
}
.el-menu {
	border-right: 0;
	a {
		width: 100%;
		text-align: center;

		span {
			font-size: 14px;
			font-weight: 600;
			color: #373e4a;
		}
	}
	.is-active {
		span {
			color: #ffd04b;
		}
	}
}
</style>
