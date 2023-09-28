import axios from 'axios';

/**
 * 音乐播放器
 */

// 获取音乐播放列表
export const getPlayerList = async (server, type, id) => {
	const res = await fetch(`${import.meta.env.VITE_SONG_API}?server=${server}&type=${type}&id=${id}`);
	return await res.json();
};

/**
 * 一言
 */

// 获取一言数据
export const getHitokoto = async () => {
	const res = await fetch('https://v1.hitokoto.cn');
	return await res.json();
};

/**
 * 天气
 */

// 获取高德地理位置信息
export const getAdcode = async () => {
	// const res = await fetch(`https://restapi.amap.com/v3/ip?key=${key}`)
	const res = await fetch(`https://www.mxnzp.com/api/ip/self?app_id=2k0czxrlvdyronmd&app_secret=emFjbkhYd2RvWnBISlowand3SElVUT09`);
	return await res.json();
};

// 获取高德地理天气信息
export const getWeather = async (key, city) => {
	const res = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=e69302e37f8d7e0b968e030dd2ee3fd3&city=${city}`);
	return await res.json();
};

/**
 *  每日一句
 * https://www.mxnzp.com/api/daily_word/recommend
 * @returns
 */

export async function getDailyWord() {
	const res = await fetch('https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json');
	return await res.json();
}

// 获取社交链接
export const getSocialLinks = async () => {
	const res = await fetch('/socialLinks.json');
	return await res.json();
};
