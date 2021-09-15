var baseUrl = "http://115.159.37.125:8080/jeecg-boot" // 服务器接口地址
const timeout = 60000 // 超时时间 单位ms

const codeArray = [200, 404, 405, 500]
const codeTextArray = ['操作成功', '请求资源不存在', '请求方法错误', '服务器错误']

function getRequest(url, param = {}) {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...',
			mask: true
		});
		uni.request({
			method: 'GET',
			url: baseUrl + url,
			timeout: timeout,
			data: param,
			header: {
				'X-Access-Token': uni.getStorageSync('token')
			},
			success: (res) => {
				uni.hideLoading();
				if (res.data.code == 200) {
					res.data.result == null ? resolve(res.data.message) : resolve(res.data.result)
				} else {
					uni.showToast({
						title: res.data.message ? res.data.message : codeTextArray[codeArray.indexOf(res.data.code)],
						icon: "none",
						mask: true
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				uni.hideLoading();
				uni.stopPullDownRefresh()
				uni.showToast({
					title: '服务器异常',
					icon: "none",
					mask: true
				})
			}
		})
	})
}

function postRequest(url, param = {}) {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...',
			mask: true
		});
		uni.request({
			method: 'POST',
			url: baseUrl + url,
			timeout: timeout,
			data: param,
			header: {
				'X-Access-Token': uni.getStorageSync('token')
			},
			success: (res) => {
				uni.hideLoading();
				if (res.data.code == 200) {
					res.data.result == null ? resolve(res.data.message) : resolve(res.data.result)
				} else {
					uni.showToast({
						title: res.data.message ? res.data.message : codeTextArray[codeArray.indexOf(res.data.code)],
						icon: "none",
						mask: true
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				uni.stopPullDownRefresh()
				uni.showToast({
					title: '服务器异常',
					icon: "none",
					mask: true
				})
			}
		})
	})

}

export default {
	getRequest,
	postRequest,
	baseUrl
}
