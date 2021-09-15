<template>
	<view class="maintenance-detail-main lee-page-bgc-gray">
		<!-- 页面小标题头 -->
		<workSmallTitle username="孙悟饭的维修" datetime="2020-12-31"></workSmallTitle>
		<view class="maintenance-detail-form">
			<view class="form-list-item">
				<text class="item-title">车牌号</text>
				<text class="item-content lee-color-blue-a">吉A12345</text>
			</view>
			<view class="form-list-item">
				<text class="item-title">驾驶员</text>
				<text class="item-content lee-color-blue-a">孙悟饭</text>
			</view>
			<view class="form-list-item">
				<text class="item-title">规定时间</text>
				<text class="item-content lee-color-blue-a">09-20 12:00之前</text>
			</view>
			<view class="form-list-item">
				<text class="item-title">停车地点</text>
				<text class="item-content lee-color-blue-a">银河系火星469航道</text>
			</view>

			<view class="form-carform-item">
				<text class="item-title">维修需求/故障描述</text>
				<view class="item-content">
					<textarea auto-height placeholder="请输入" v-model="remark"></textarea>
				</view>
			</view>
			<view class="form-carform-item">
				<text class="item-title">维修前(图片/视频)</text>
				<view class="item-content">
					<photoLee disabled :photoList="maintenanceImg" @change="getPhotoList"></photoLee>
				</view>
			</view>
			<view class="form-carform-item">
				<text class="item-title">维修中(图片/视频)</text>
				<view class="item-content">
					<photoLee disabled :photoList="maintenanceImg" @change="getPhotoList"></photoLee>
				</view>
			</view>
			<view class="form-carform-item">
				<text class="item-title">维修后(图片/视频)</text>
				<view class="item-content">
					<photoLee disabled :photoList="maintenanceImg" @change="getPhotoList"></photoLee>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	import photoLee from '@/components/photo-lee/photo-lee.vue'
	export default {
		name: 'maintenance-detail',
		components: {
			photoLee,
			workSmallTitle
		},
		data() {
			return {
				maintenanceImg: [{
					name: "shuijiao",
					path: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",
					locationPath: "",
					fileType: "jpg"
				}],
				remark: "维修详情页面开发完成维修详情页面开发完成维修详情页面开发完成",
			}
		},
		methods: {
			getPhotoList(value) {
				// 对象深度拷贝
				value = JSON.parse(JSON.stringify(value))
				console.log("getPhotoList查看当前图片列表", value)
				this.maintenanceImg = value
				console.log("maintenanceImg查看当前图片列表", this.maintenanceImg)
			}
		}
	}
</script>

<style scoped lang="scss">
	.maintenance-detail-main {
		z-index: 1;
		overflow-y: scroll;
		padding-bottom: 30rpx;

		// 表单添加
		.maintenance-detail-form {
			border-radius: 20rpx;
			background-color: #FFFFFF;
			margin: 30rpx;
			padding: 0 30rpx;

			// 维修车辆参考信息
			.form-list-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid $lee-border-gray;
				padding: 30rpx 0;
				font-size: 35rpx;

				.item-title {
					font-weight: 600;
					padding-bottom: 10rpx;
				}

				.item-content {
					font-weight: 500;
				}
			}

			// 维修车辆表单填写信息
			.form-carform-item {
				border-bottom: 1rpx solid $lee-border-gray;
				padding: 30rpx 0;
				font-size: 35rpx;

				.item-title {
					font-weight: 600;
				}

				.item-content {
					font-weight: 500;
					padding-top: 20rpx;
				}
			}

			.form-carform-item:last-child {
				border-bottom: none;
			}
		}
	}
</style>
