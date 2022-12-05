//封装请求,将来在仓库发请求->仓库当中->页面找仓库要数据
export const request = (url, data = {}, method = "get") => {
	return new Promise((resolve, reject) => {
		//uniapp框架的request发请求
		uni.request({
			url: 'http://127.0.0.1:3001' + url, //请求地址
			data, //携带参数
			method, //请求方式
			success(res) { //请求成功的回调
				resolve(res.data);
			},
			fail(error) { //请求失败的回调
				reject(error);
			}

		})
	})
}
