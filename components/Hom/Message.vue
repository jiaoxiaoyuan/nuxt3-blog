<template>
	<!-- 基本信息 -->
	<div class="message">
		<!-- Logo -->
		<div class="logo">
			<img class="logo-img" :src="siteLogo" alt="logo" />
			<div class="name text-hidden">
				<span class="bg">{{ siteUrl[0] ?? '' }}</span>
				<span class="sm">{{ siteUrl[1] ?? '' }}</span>
			</div>
		</div>
		<!-- 简介 -->
		<div class="description cards" @click="changeBox">
			<div class="content">
				<!-- <Icon size="16">
                        <QuoteLeft />
                    </Icon> -->

				<div class="text">
					<p>{{ descriptionText.hello }}</p>
					<p>{{ descriptionText.text }}</p>
				</div>

				<!-- <Icon size="16">
                    <QuoteRight />
                </Icon> -->
			</div>
		</div>
	</div>
	<!-- 社交链接 -->
	<div class="social">
		<div class="link">
			<a
				v-for="item in socialLinksData"
				:key="item.name"
				:href="item.url"
				target="_blank"
				@mouseenter="socialTip = item.tip"
				@mouseleave="socialTip = '通过这里联系我吧'"
			>
				<img class="icon" :src="item.icon" height="24" />
			</a>
		</div>
		<span class="tip">{{ socialTip }}</span>
	</div>
</template>

<script setup leng="ts">
import { mainStore } from '@/stores';
const store = mainStore();

// 主页站点logo
let siteLogo = import.meta.env.VITE_SITE_LOGO;
// 站点链接
let siteUrl = import.meta.env.VITE_SITE_URL.split('.');

// 简介区域文字
let descriptionText = reactive({
	hello: import.meta.env.VITE_DESC_HELLO,
	text: import.meta.env.VITE_DESC_TEXT,
});

// 切换右侧功能区
const changeBox = () => {
	if (store.getInnerWidth >= 990) {
		store.boxOpenState = !store.boxOpenState;
	} else {
		ElMessage({
			message: '当前页面宽度不足以开启盒子',
			grouping: true,
			icon: h(Error, {
				theme: 'filled',
				fill: '#efefef',
			}),
		});
	}
};

// 监听状态变化
watch(
	() => store.boxOpenState,
	(value) => {
		if (value) {
			descriptionText.hello = import.meta.env.VITE_DESC_HELLO_OTHER;
			descriptionText.text = import.meta.env.VITE_DESC_TEXT_OTHER;
		} else {
			descriptionText.hello = import.meta.env.VITE_DESC_HELLO;
			descriptionText.text = import.meta.env.VITE_DESC_TEXT;
		}
	}
);

//
let socialTip = ref('通过这里联系我吧');

// 社交链接数据
let socialLinksData = ref([
	{
		name: 'Github',
		icon: '/images/icon/github.png',
		tip: '去 Github 看看',
		url: 'https://github.com/jiaoxiaoyuan',
	},
	{
		name: 'BiliBili',
		icon: '/images/icon/bilibili.png',
		tip: '(゜-゜)つロ 干杯 ~',
		url: 'https://space.bilibili.com/394606003',
	},
	{
		name: 'QQ',
		icon: '/images/icon/qq.png',
		tip: '有什么事吗',
		url: 'https://res.abeim.cn/api/qq/?qq=329492979',
	},
	{
		name: 'Email',
		icon: '/images/icon/email.png',
		tip: '来封 Email ~',
		url: '329492979@qq.com',
	},
]);
</script>

<style lang="scss" scoped>
.message {
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		animation: fade;
		-webkit-animation: fade 0.5s;
		.logo-img {
			border-radius: 50%;
			width: 120px;
			filter: grayscale(100%) brightness(200%);
		}
		.name {
			width: 100%;
			height: 142px;
			margin-left: 12px;
			transform: translateY(-8px);
			font-family: 'Pacifico-Regular';
			display: flex;
			align-items: center;
			.bg {
				font-size: 2rem;
			}

			.sm {
				margin-left: 6px;
				font-size: 2rem;
				@media (min-width: 720px) and (max-width: 789px) {
					display: none;
				}
			}
		}
		@media (max-width: 768px) {
			.logo-img {
				width: 100px;
			}
			.name {
				height: 128px;
				.bg {
					font-size: 4.5rem;
				}
			}
		}
	}

	.description {
		padding: 1rem;
		// margin-top: 3.5rem;
		max-width: 460px;
		animation: fade;
		-webkit-animation: fade 0.5s;

		.content {
			display: flex;
			justify-content: space-between;

			.text {
				margin: 0.75rem 1rem;
				line-height: 2rem;
				margin-right: auto;

				p {
					&:nth-of-type(1) {
						font-family: 'Pacifico-Regular';
					}
				}
			}

			.xicon:nth-of-type(2) {
				align-self: flex-end;
			}
		}
		@media (max-width: 720px) {
			max-width: 100%;
			pointer-events: none;
		}
	}
	@media (max-width: 390px) {
		.logo {
			flex-direction: column;
			.logo-img {
				display: none;
			}
			.name {
				margin-left: 0;
				height: auto;
				transform: none;
				text-align: center;
				.bg {
					font-size: 3.5rem;
				}
				.sm {
					font-size: 1.4rem;
				}
			}
		}
		.description {
			margin-top: 2.5rem;
		}
	}
}

.social {
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 460px;
	width: 100%;
	height: 42px;
	background-color: transparent;
	border-radius: 6px;
	backdrop-filter: blur(0);
	animation: fade;
	-webkit-animation: fade 0.5s;
	transition: all 0.5s;
	@media (max-width: 840px) {
		max-width: 100%;
		justify-content: center;
		.link {
			justify-content: space-evenly !important;
			width: 90%;
		}
		.tip {
			display: none !important;
		}
	}

	.link {
		display: flex;
		align-items: center;
		justify-content: center;
		a {
			display: inherit;
			.icon {
				width: 24px;
				height: 24px;
				margin: 0 12px;
				transition: all 0.3s;
				&:active {
					transform: scale(0.9);
				}
			}
		}
	}
	.tip {
		display: none;
		margin-right: 12px;
		animation: fade;
		-webkit-animation: fade 0.5s;
	}
	@media (min-width: 768px) {
		&:hover {
			background-color: #00000040;
			backdrop-filter: blur(5px);
			.tip {
				display: block;
			}
		}
	}
}
</style>
