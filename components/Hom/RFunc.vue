<template>
	<div :class="store.mobileFuncState ? 'function mobile' : 'function'">
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="left">
					<HomHitokoto />
					<!-- <Music /> -->
				</div>
			</el-col>
			<el-col :span="12">
				<div class="right cards">
					<div class="time">
						<div class="date">
							<span>{{ currentTime.year }}&nbsp;年&nbsp;</span>
							<span>{{ currentTime.month }}&nbsp;月&nbsp;</span>
							<span>{{ currentTime.day }}&nbsp;日&nbsp;</span>
							<span class="sm-hidden">{{ currentTime.weekday }}</span>
						</div>
						<div class="text">
							<span> {{ currentTime.hour }}:{{ currentTime.minute }}:{{ currentTime.second }}</span>
						</div>
					</div>
					<HomWeather />
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getCurrentTime } from '@/utils/getTime';
import { mainStore } from '@/stores';

const store = mainStore();

// 当前时间
const currentTime = ref<any>({});
let timeInterval: NodeJS.Timeout | null = null;
// let timeInterval: NodeJS.Timer | null = null;

onMounted(() => {
	timeInterval = setInterval(() => {
		currentTime.value = getCurrentTime();
	}, 1000);
});
onBeforeUnmount(() => {
	if (timeInterval) {
		clearInterval(timeInterval);
		timeInterval = null;
	}
});
</script>

<style lang="scss" scoped>
.function {
	height: 165px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	&.mobile {
		.el-row {
			.el-col {
				&:nth-of-type(1) {
					display: contents;
				}
				&:nth-of-type(2) {
					display: none;
				}
			}
		}
	}
	.el-row {
		height: 100%;
		width: 100%;
		margin: 0 !important;
		.el-col {
			&:nth-of-type(1) {
				padding-left: 0 !important;
			}
			&:nth-of-type(2) {
				padding-right: 0 !important;
			}
			@media (max-width: 910px) {
				&:nth-of-type(1) {
					display: none;
				}
				&:nth-of-type(2) {
					padding: 0 !important;
					flex: none;
					max-width: none;
					width: 100%;
				}
			}
		}
		.left,
		.right {
			width: 100%;
			height: 100%;
		}
		.right {
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			animation: fade;
			-webkit-animation: fade 0.5s;
			.time {
				font-size: 1.1rem;
				text-align: center;
				.date {
					text-overflow: ellipsis;
					overflow-x: hidden;
					white-space: nowrap;
				}
				.text {
					margin-top: 10px;
					font-size: 3.25rem;
					letter-spacing: 2px;
					font-family: 'UnidreamLED';
				}
			}
			.weather {
				text-align: center;
				width: 100%;
				text-overflow: ellipsis;
				overflow-x: hidden;
				white-space: nowrap;
			}
		}
	}
}
</style>
