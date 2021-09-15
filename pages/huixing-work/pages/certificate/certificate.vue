<template>
	<view class="certificate-main lee-page-bgc-gray lee-padding-30">
		<block v-for="(item,index) in certificateList" :key="index">
			<view class="certificate-content">
				<view class="content-item lee-align-items-center lee-justify-content-between">
					<text class="item-title">证件名称</text>
					<text class="lee-color-blue-a">{{item.name}}</text>
				</view>
				<view class="content-item lee-align-items-center lee-justify-content-between">
					<text class="item-title">证件状态</text>
					<text class="lee-color-blue-a">{{item.cardStatus?"正常":"异常"}}</text>
				</view>
				<view class="content-item lee-align-items-center lee-justify-content-between">
					<text class="item-title">到期时间</text>
					<text class="lee-color-blue-a">{{item.outTime}}</text>
				</view>
				<view class="content-item lee-flex-column">
					<text class="item-title">证件照片</text>
					<photo-lee mode="once" :photoList="item.cardImage"></photo-lee>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import photoLee from '@/components/photo-lee/photo-lee.vue'
	export default {
		name: "certificate", // 证件信息
		components:{
			photoLee
		},
		data() {
			return {
				certificateList: [{
					name: "驾驶证",
					cardStatus: true, // true、正常  false、异常
					outTime: "2021-05-12",
					cardImage: []
				}, {
					name: "从业资格证",
					cardStatus: false, // true、正常  false、异常
					outTime: "2021-05-12",
					cardImage: []
				}]
			}
		}
	}
</script>

<style scoped lang="scss">
	// 公用样式

	// 私有样式
	.certificate-main {
		z-index: 1;
		overflow-y: scroll;

		// margin-top: var(--status-bar-height);
		.certificate-content {
			padding: 0 30rpx;
			background-color: $lee-color-white;
			margin-bottom: 30rpx;
			border-radius: 20rpx;

			.content-item {
				display: flex;
				padding: 30rpx 0;
				border-bottom: solid 1rpx $lee-border-gray;
				flex-wrap: wrap;
				font-size: 35rpx;

				// 标题
				.item-title {
					width: 30vw;
				}

				// 证件照片样式
				image {
					border-radius: 10rpx;
					box-shadow: 0 0 10rpx 5rpx #d5d3d6;
					margin: 20rpx 0;
				}
			}

			.content-item:last-child {
				border-bottom: none;
			}
		}
	}
</style>
