<template>
	<view class="photo-lee-main">
		<view class="photo-once-list" v-if="mode == 'once'">
			<view class="once-item" v-if="photoList && photoList.length != 0">
				<view class="once-photo-del" v-show="!disabled" @click="deleteImage(0)">
					<text class="iconfont iconclose"></text>
				</view>
				<image class="once-photo-image" :src="photoList[0].locationPath?photoList[0].locationPath:photoList[0].path" mode=""
				 @click="preToViewImage(photoList,0)"></image>
			</view>
			<view class="once-add" v-else  v-show="!disabled" @click="getCamera()">
				<text class="iconfont iconimage"></text>
			</view>
		</view>

		<view class="photo-twice-list" v-else>
			<view class="photo-list-item" v-for="(item,index) in photoList" :key="index">
				<view class="photo-del" v-show="!disabled" @click="deleteImage(index)">
					<text class="iconfont iconclose"></text>
				</view>
				<image class="photo-image" :src="item.locationPath?item.locationPath:item.path" @click="preToViewImage(photoList,index)"></image>
			</view>

			<!-- 添加图片 -->
			<view class="photo-add" v-show="!disabled" @click="getCamera()">
				<text class="iconfont iconadd"></text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "photo-lee",
		props: {
			// 拍照模式  默认多张图片twice、单张图片once
			mode: {
				type: String,
				default: "twice"
			},
			// true 禁用（只能查看） false 不禁用（可以添加修改删除）
			disabled: {
				type: Boolean,
				default: false
			},
			// 图片列表
			photoList: {
				type: Array,
				default: function() {
					return [{
						name: "shuijiao",
						path: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",
						locationPath: "",
						fileType: "jpg"
					}]
				}
			},
			// 图片存放文件夹
			folder: {
				type: String,
				default: "tmpImg"
			}
		},
		methods: {
			// 删除图片
			deleteImage(index) {
				console.log(index)
				// 确认是否删除图片
				this.photoList.splice(index, 1)
				this.$emit("change", this.photoList)
			},
			// 查看图片
			preToViewImage(list, index) {
				// 图片查看数组格式整理
				let previewImageArr = list.map(item => {
					return item.path ? item.path : item.locationPath
				})
				uni.previewImage({
					current: index,
					urls: previewImageArr,
					indicator: "number",
					loop: true,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							// 保存图片到本地
							uni.saveImageToPhotosAlbum({
								filePath: previewImageArr[data.index],
								success: function() {
									uni.showToast({
										title: "图片保存成功，请进入相册查看",
										icon: "none",
										duration: 2000
									})
								}
							});
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},

			// 获取摄像头
			getCamera() {
				// 指定要获取摄像头的索引值，1表示主摄像头，2表示辅摄像头。如果没有设置则使用系统默认主摄像头。
				var cmr = plus.camera.getCamera(); // 创建摄像头对象
				var res = cmr.supportedImageResolutions[0]; // 配置成图的分辨率
				var fmt = cmr.supportedImageFormats[0]; // 配置生成的图片文件格式
				/**
				 * 	successCB: ( CameraSuccessCallback ) 必选 摄像操作成功的回调函数
				 *	errorCB: ( CameraErrorCallback ) 可选 拍摄像操作失败的回调函数
				 *	option: ( CameraOptions ) 必选 摄像头拍照参数
				 */
				cmr.captureImage((success) => {
						console.log("拍照成功", success)
						// 整合图片数据
						let imageData = {
							name: success.substring(success.indexOf('/') + 1, success.indexOf('.')), // 图片名称截取
							path: "", // 图片网络地址
							locationPath: success, // 图片设备本地地址
							fileType: "jpg", // 图片文件类型
							folder: this.folder, // 保存到文件夹
						}

						this.photoList.push(imageData)
						// 组件暴漏方法
						this.$emit("change", this.photoList)
					},
					(error) => {
						console.log("拍照失败", error)
					}, {
						resolution: res,
						format: fmt
					}
				)
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式
	.photo-size {
		width: 190rpx;
		height: 190rpx;
		border-radius: 20rpx;
		margin: 10rpx;
	}

	.photo-one-size {
		width: 100%;
		height: 30vh;
		border-radius: 20rpx;
		margin: 10rpx;
	}

	// 私有样式
	.photo-lee-main {

		// 单图片样式
		.photo-once-list {
			position: relative;
			margin: 15rpx 0;

			.once-item {
				position: relative;

				.once-photo-del {
					background-color: red;
					color: #FFFFFF;
					width: 50rpx;
					height: 50rpx;
					border-radius: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					z-index: 9;
					right: -20rpx;
					top: -10rpx;

					.iconfont {
						font-size: 25rpx;
					}
				}

				.once-photo-image {
					box-shadow: 0 0 10rpx 3rpx #999999;
					z-index: 8;
					@extend .photo-one-size;
				}
			}

			.once-add {
				border: 1rpx solid #BFBFBF;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #BFBFBF;
				@extend .photo-one-size;

				.iconfont {
					font-size: 100rpx;
				}
			}
		}

		// 多图片模式列表
		.photo-twice-list {
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-wrap: wrap;

			.photo-list-item {
				position: relative;

				.photo-image {
					@extend .photo-size;
					box-shadow: 0 0 10rpx 3rpx #999999;
					z-index: 8;
				}

				.photo-del {
					background-color: red;
					color: #FFFFFF;
					width: 50rpx;
					height: 50rpx;
					border-radius: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					z-index: 9;
					right: -8rpx;
					top: -8rpx;

					.iconfont {
						font-size: 25rpx;
					}
				}
			}



			// 新增照片按钮
			.photo-add {
				border: 1rpx solid #CCCCCC;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #CCCCCC;
				@extend .photo-size;

				.iconfont {
					font-size: 30px;
				}
			}
		}
	}
</style>
