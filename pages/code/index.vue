<template>
	<div class="md:container md:mx-auto container-wap">
		<el-row>
			<el-col :xs="24" :sm="18">
				<template v-for="(item, index) in articleList" :key="index">
					<div class="mb-2 mr-4 rounded-md bg-zinc-100 backdrop-opacity-5 backdrop-saturate-50">
						<el-card
							class="mobile-top-card mobile-card info-card animate__animated animate__fadeIn"
							shadow="hover"
							@click="toArticleDetail(item)"
						>
							<el-skeleton :loading="rightSizeLoading" animated>
								<template #default>
									<div class="article-box">
										<div class="article-cover relative flex items-center scale">
											<el-image
												:src="item.article_cover"
												:alt="item.article_title"
												class="object-cover w-full h-full transition-transform transform hover:scale-110"
											/>
										</div>
										<div class="article-info">
											<span class="text-xl antialiased text_overflow">{{ item.article_title }}</span>
											<p class="line-clamp-3">
												{{ item.article_description }}
											</p>
										</div>
									</div>
								</template>
							</el-skeleton>
						</el-card>
					</div>
				</template>
			</el-col>
			<el-col :xs="0" :sm="6">
				<div class="fixed">
					<div class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl">
						<div class="shrink-0">
							<img class="w-12 h-12" src="@/assets/icons/test.svg" alt="ChitChat Logo" />
						</div>
						<div>
							<div class="text-xl font-medium text-black">ChitChat</div>
							<p class="text-slate-500">You have a new message!</p>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { homeGetArticleList } from '@/api/article';
import { useRouter } from 'vue-router';
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

const router = useRouter();
/** 文章 */
const param = reactive({
	current: 1, // 当前页
	size: 10, // 每页条目数
	loading: true, // 加载
});

const articleList = ref<any>([]);
const articleTotal = ref<number>();

const rightSizeLoading = ref<boolean>(true);

onMounted(async () => {
	await init();
});

const init = async () => {
	rightSizeLoading.value = false;

	await getlist('init');
};

const getlist = async (type: any) => {
	type == 'init' ? '' : (param.loading = true);
	let res = await homeGetArticleList(param.current, param.size);
	if (res.code == 0) {
		type == 'init' ? '' : (param.loading = false);
		const { list, total } = res.result;

		articleList.value = list;
		articleTotal.value = total;
	}
};

const toArticleDetail = (item: any) => {
	const id = item?.id;
	const { href } = router.resolve({
		path: `/code/${id}`,
	});
	window.open(href);
};
</script>

<style lang="scss" scoped>
//
</style>
