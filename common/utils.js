let utils = {
	// 跳转到tabbar页面，进行跳转
	goTabbarPage(path){
		uni.reLaunch({
			url:path
		})
	},
	// 关闭当前页面进行跳转
	goPage(path){
		uni.redirectTo({
			url:path
		})
	},
	// 不关闭当前页面，进行跳转
	goCachePage(path){
		uni.navigateTo({
			url:path
		})
	},
	// 返回上一级页面
	goBack(){
		uni.navigateBack({
		    delta: 1
		});
	},
	// 监听设备网络状态
	listenterNetwork(){
		// plus.globalEvent.addEventListener('netchange', function(){});
	}
}
export default utils