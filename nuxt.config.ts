import { resolve } from 'pathe';
import { loadEnv } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
	app: {
		head: {
			charset: 'UTF-8',
			viewport: 'width=device-width, initial-scale=1.0',
			title: 'Mr.焦的个人博客 | 90后程序猿,爱研究瞎折腾,爱文学烂笔头',
			meta: [
				{
					name: 'description',
					content: `此个人博客是一个专注于IT技术学习交流的个人技术博客网站,包括敏捷开发、自动化测试、网站开发、服务器运维等领域，创建该个人博客也是为了方便与志同道合的朋友一起互相学习交流，分享经验，感谢大家的支持。`,
				},
				{
					name: 'keywords',
					content: '个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客',
				},
				{ name: 'author', content: 'Mr.焦' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'shortcut icon',
					href: '/images/icon/apple-touch-icon.png',
				},
				{
					rel: 'apple-touch-icon',
					href: '/images/icon/apple-touch-icon.png',
				},
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: '/loading/loading.min.css',
				},
			],
			script: ['/script.js'],

			bodyAttrs: {
				class: 'loading',
			},
		},
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},
	devtools: { enabled: process.env.DEV_TOOLS || false },
	devServer: {
		port: 3005,
	},

	// css单独文件引用，不使用内联
	experimental: {
		inlineSSRStyles: false,
	},
	modules: ['@pinia/nuxt', 'nuxt-icon'],
	buildModules: ['@nuxtjs/tailwindcss'],
	css: ['~/assets/css/tailwind.css', 'element-plus/dist/index.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	headlessui: {
		prefix: 'Headless',
	},
	alias: {
		'@': resolve(__dirname, './'),
	},
	imports: {
		dirs: [
			// 扫描顶层目录中模块
			'composables',
			// 扫描内嵌一层深度的模块，指定特定文件名和后缀名
			'composables/*/index.{ts,js,mjs,mts}',
			// 扫描给定目录中所有模块
			'composables/**',
		],
	},
	vite: {
		logLevel: 'info',
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/css/global.scss" as *;',
				},
			},
		},
		plugins: [
			AutoImport({
				resolvers: [
					ElementPlusResolver({
						importStyle: false,
					}),
				],
			}),
		],
	},
});
