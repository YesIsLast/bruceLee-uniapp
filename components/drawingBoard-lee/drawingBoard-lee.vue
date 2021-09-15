<template>
	<view class="">
		<canvas style="width: 100%; height: 50vh;background-color: #e8e8e8;" canvas-id="firstCanvas" id="firstCanvas"
		 @touchmove="touchmove" @touchstart="touchstart" @touchend='touchend' :disable-scroll="true"></canvas>
		<view class="" style="display: flex;">
			<u-button @tap="saveJpg" type="primary">点击生成图片</u-button>
			<u-button @tap="clearCanvas" type="error">清除画布</u-button>
		</view>
	</view>
</template>
<script>
	var content = null;
	var touchs = [];
	var canvasw = 0;
	var canvash = 0;
	//获取系统信息
	uni.getSystemInfo({
		success: function(res) {
			canvasw = res.windowWidth;
			canvash = canvasw * 9 / 16;
		},
	})
	export default {
		name: "canvas_board",
		created() {
			//获得Canvas的上下文
			content = uni.createCanvasContext("firstCanvas", this)
			//设置线的颜色
			content.setStrokeStyle("#000")
			//设置线的宽度
			content.setLineWidth(5)
			//设置线两端端点样式更加圆润
			content.setLineCap('round')
			//设置两条线连接处更加圆润
			content.setLineJoin('round')
		},
		methods: {
			// 手指移动
			touchmove(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				touchs.push(point)
				if (touchs.length >= 2) {
					this.draw(touchs)
				}
			},
			// 画布的触摸移动开始手势响应
			touchstart(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y,
				}
				touchs.push(point);
				this.hasDh = true
			},
			// 手指离开
			touchend(e) {
				//清空轨迹数组
				for (let i = 0; i < touchs.length; i++) {
					touchs.pop()
				}
			},
			// 清除画布
			clearCanvas() {
				//清除画布
				content.clearRect(0, 0, canvasw, canvash)
				content.draw()
			},
			// 保存图片
			saveJpg() {
				uni.showModal({
				    title: '提示',
				    content: '是否确定保存当前会话内容为图片',
				    success: function (res) {
				        if (res.confirm) {
							uni.canvasToTempFilePath({
								fileType: "jpg",
								canvasId: 'firstCanvas',
								success: function(res) {
									// 在H5平台下，tempFilePath 为 base64
									console.log(res.tempFilePath)
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: function() {
											uni.showToast({
											    title: '图片保存成功',
											    duration: 2000
											});
										}
									});
								}
							})
				        }
				    }
				});
				
			},
			//绘制
			draw: function(touchs) {
				let point1 = touchs[0]
				let point2 = touchs[1]
				// console.log(JSON.stringify(touchs))
				content.moveTo(point1.x, point1.y)
				content.lineTo(point2.x, point2.y)
				content.stroke()
				content.draw(true);
				touchs.shift()
			}
		}
	}
</script>
<style>
</style>
