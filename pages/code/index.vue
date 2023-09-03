<template>
	<div class="md:container md:mx-auto container-wap">
		<el-row>
			<el-col :xs="24" :sm="18">
				<div class="mb-2 mr-4 rounded-md bg-zinc-100 backdrop-opacity-10 backdrop-saturate-50">
					<el-card class="mobile-top-card mobile-card info-card animate__animated animate__fadeIn" shadow="hover">
						<el-skeleton :loading="rightSizeLoading" animated>
							<template #default>
								<div class="article-box">
									<div class="article-cover">
										<div class="flex items-center scale">
											<div class="relative w-64 h-64">
												<img
													src="http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1"
													alt="Your Image"
													class="object-cover w-full h-full transition-transform transform hover:scale-110"
												/>
											</div>
										</div>
									</div>
								</div>
							</template>
						</el-skeleton>
					</el-card>
				</div>

				<div class="mb-2 mr-4 rounded-md bg-zinc-100 backdrop-opacity-1 backdrop-saturate-50">
					<el-card class="mobile-top-card mobile-card info-card animate__animated animate__fadeIn" shadow="hover">
						<el-skeleton :loading="rightSizeLoading" animated>
							<template #default>
								<div class="article-box">
									<div class="article-cover">
										<div class="flex items-center scale">
											<div class="relative w-64 h-64">
												<img
													src="http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1"
													alt="Your Image"
													class="object-cover w-full h-full transition-transform transform hover:scale-110"
												/>
											</div>
										</div>
									</div>
								</div>
							</template>
						</el-skeleton>
					</el-card>
				</div>
			</el-col>
			<el-col :xs="0" :sm="6"> 信息</el-col>
		</el-row>
	</div>
</template>

<script setup leng="ts">
definePageMeta({
	layout: 'pagecontent',
});
useHead({
	title: '技术 | Mr.焦的个人博客-全栈工程师',
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

const rightSizeLoading = ref(true);

onMounted(async () => {
	await init();
});

const init = async () => {
	rightSizeLoading.value = false;
};
</script>

<style lang="scss" scoped>
//
</style>
