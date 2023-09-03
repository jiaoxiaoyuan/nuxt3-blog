<template>
	<div class="menu-list">
		<message-unread theme="outline" size="14" fill="#333" />
		{{ TextInfo }}
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, h } from 'vue';
import { MessageUnread } from '@icon-park/vue-next';
import { getDailyWord } from '@/api';
const TextInfo = ref<string>('');
onMounted(() => {
	getDailyWord().then((res) => {
		console.log(res);
		TextInfo.value = res.text;
	});
});
</script>

<style scoped lang="scss">
.menu-list {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 3.75rem;
	z-index: 1;
	font-size: 14px;
	color: #373e4a;
	padding-right: 15px;
	font-family: yiqistar;
}
</style>
