<template>
	<div class="py-5">
		<div class="container max-w-5xl grid-cols-8 gap-5 px-6 py-5 mx-auto sm:grid sm:py-9">
			<div class="max-w-md col-span-5">
				<div class="flex justify-between">
					<div>
						<h1 class="pb-2 text-xl font-bold sm:text-4xl aText">Al Asad Nur Riyad</h1>
						<div class="pb-10 my-3 space-x-3">
							<NuxtLink to="https://github.com/nurRiyad" target="_blank" class="p-2 bg-gray-300 rounded-md" aria-label="Github">
								<Icon name="fa:github" size="1em" />
							</NuxtLink>
							<NuxtLink
								to="https://www.linkedin.com/in/nur-riyad/"
								target="_blank"
								class="p-2 bg-gray-300 rounded-md"
								aria-label="LinkedIn"
							>
								<Icon name="fa:linkedin-square" size="1em" />
							</NuxtLink>
							<NuxtLink to="https://twitter.com/qdnvubp" target="_blank" class="p-2 bg-gray-300 rounded-md" aria-label="Twitter">
								<Icon name="fa:twitter-square" size="1em" />
							</NuxtLink>
							<NuxtLink
								to="https://stackoverflow.com/users/16781395/nur-riyad"
								target="_blank"
								class="p-2 bg-gray-300 rounded-md"
								aria-label="StackOverflow"
							>
								<Icon name="fa:stack-overflow" size="1em" />
							</NuxtLink>
						</div>
					</div>
					<div class="block col-span-3 pb-5 sm:hidden">
						<img
							src="https://img.mtswk.cn/LightPicture/2023/08/33402c50eb1248a3.jpg"
							width="125"
							height="115"
							quality="50"
							class="rounded-md"
						/>
					</div>
				</div>
				<h3 class="text-base font-semibold sm:text-3xl pb-7 sm:pb-12 aText">Software Engineer, Problem Solver, Web Enthusiast.</h3>
				<p class="aText">
					Hello, fellow human! I'm a software wizard who spends most of his day crafting code spells at @AppsCode in the Bytebuilders team.
					When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love
					spells, my magic only works on machines!
				</p>
			</div>

			<div class="hidden col-span-3 sm:block">
				<img src="https://img.mtswk.cn/LightPicture/2023/08/33402c50eb1248a3.jpg" width="450" height="500" quality="50" class="rounded-md" />
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'pagecontent',
});
useHead({
	title: '关于 | Mr.焦的个人博客-全栈工程师',
	meta: [
		{
			name: 'description',
			content:
				'此个人博客是一个专注于IT技术学习交流的个人技术博客网站,包括敏捷开发、自动化测试、网站开发、服务器运维等领域，创建该个人博客也是为了方便与志同道合的朋友一起互相学习交流，分享经验，感谢大家的支持。',
		},
		{
			name: 'keywords',
			content: '个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客,全栈工程师',
		},
	],
});
</script>

<style lang="scss" scoped></style>
