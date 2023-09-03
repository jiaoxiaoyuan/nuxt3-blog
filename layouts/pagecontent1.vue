<template>
	<div class="page-layout">
		<el-container>
			<el-aside width="120px">
				<!-- <LayoutAside></LayoutAside> -->
			</el-aside>
			<el-container class="page-main">
				<el-header>
					<!-- <LayoutHeader></LayoutHeader> -->
				</el-header>
				<el-main>
					<slot />
				</el-main>
				<el-footer>
					<!-- <Footer /> -->
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script lang="ts" setup>
onMounted(async () => {
	// console.log('加载完成')

	document.body.classList.remove('loading');
	// 去除加载标记
	// 给加载动画添加结束标记
	let loadingBox = await document.getElementById('loading-box');
	loadingBox?.classList.add('loaded');
});
</script>
<style lang="scss" scoped>
.page-layout {
	width: 100%;
	height: 100% !important;
	.el-container {
		background-color: #f2f2f2 !important;
		background-image: url(http://img.mtswk.cn/LightPicture/2023/08/f49734998dab001a.jpg);
		background-attachment: fixed;
		transition: 0.3s;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		.el-aside {
			background-color: #ffffffa6;
			z-index: 10000;
		}
		.page-main {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 10000;
		}
		.el-header {
			background-color: rgba(255, 255, 255, 0.5);
		}
	}
}
</style>
