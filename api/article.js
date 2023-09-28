import request from '@/utils/request';

/** 首页获取文章列表 */
export const homeGetArticleList = (current, size) => {
	return new Promise((resolve, reject) => {
		request.get(`/article/blogHomeGetArticleList/${current}/${size}`, {}).then((res) => {
			resolve(res);
		});
	});
};
