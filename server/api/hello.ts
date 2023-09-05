//server/api/hello.ts
//此方法会接受来自/api/hello的所有类型请求，并在方法内进行判断

export default defineEventHandler((event) => {
	if (event.req.method === 'GET') {
		return {
			msg: '我是DELETE请求',
		};
	}
	if (event.req.method === 'POST') {
		return {
			msg: '我是POST请求',
		};
	}
	if (event.req.method === 'PUT') {
		return {
			msg: '我是PUT请求',
		};
	}
	if (event.req.method === 'DELETE') {
		return {
			msg: '我是DELETE请求',
		};
	}
});
