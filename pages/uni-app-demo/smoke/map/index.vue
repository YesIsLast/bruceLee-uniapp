<template>
	<view class="">
		<map latitude="43.798917" longitude="125.309814" scale="13"></map>
	</view>
</template>

<script>
	const subNVue_mapPopup = uni.getSubNVueById('mapPopup')
	const subNVue_mapRoad_info = uni.getSubNVueById('mapRoad_info')

	export default {
		name: "",
		data() {
			return {

			}
		},
		onShow() {
			this.openRoadTip()
			this.openTaskPopup()
			// 关闭 nvue 子窗体  
			// subNVue.hide('fade-out', 300)
		},
		methods: {
			// 打开道路导航提示
			openRoadTip() {
				// 通过 id 获取 nvue 子窗体  
				// 打开 nvue 子窗体  
				subNVue_mapRoad_info.show('slide-in-right', 300, function() {
					// 打开后进行一些操作...  
					subNVue_mapRoad_info.setStyle({
						position: 'absolute',
						top: '50px',
						background: "transparent",
						left: '15px',
						right: '15px',
						height: '100px',
					})
				});
			},
			// 打开任务操作弹出框
			openTaskPopup() {
				// 通过 id 获取 nvue 子窗体  
				// 打开 nvue 子窗体  
				subNVue_mapPopup.show('slide-in-bottom', 300, function() {
					// 打开后进行一些操作...  
					subNVue_mapPopup.setStyle({
						position: 'absolute',
						bottom: '0px',
						background: "transparent",
						// backgroundColor: "#ffffff",
						left: '15px',
						right: '15px',
						height: '130px',
					})
				});
			}
		}
	}
</script>

<style>
	map {
		width: 100vw;
		height: 100vh;
	}
</style>
