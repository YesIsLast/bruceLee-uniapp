<template>
	<view class="accessories-add-main lee-page-bgc-gray">
		<!-- 页面小标题头 -->
		<workSmallTitle username="孙悟饭的维修" datetime="2020-12-31"></workSmallTitle>

		<!-- 页面内容 -->
		<view class="accessories-add-content">
			<view class="content-list-item">
				<text class="item-title">车牌号</text>
				<text class="item-content lee-color-blue-a">吉A12345</text>
			</view>
			<view class="content-form-item">
				<text class="item-title">维修需求/故障描述</text>
				<view class="item-content">
					<textarea placeholder="请输入"></textarea>
				</view>
			</view>
			<view class="content-form-item">
				<text class="item-title">旧件(图片/视频)</text>
				<view class="item-content">
					<photoLee></photoLee>
				</view>
			</view>
			<view class="content-list-item">
				<text class="item-title">配件名称</text>
				<text class="item-content lee-color-blue-a">如意金箍棒</text>
			</view>
			<view class="content-list-item">
				<text class="item-title">配件规格</text>
				<text class="item-content lee-color-blue-a">一万三千五百斤</text>
			</view>
			<view class="content-list-item">
				<text class="item-title">配件数量</text>
				<text class="item-content lee-color-blue-a">一根</text>
			</view>
		</view>

		<view class="accessories-add-footer">
			<button type="primary" plain="true" @click="$utils.goPage('/pages/huixing-work/pages/maintenance/accessories/detail')">配件查看</button>
			<button type="primary">确认申请</button>
		</view>
	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	import photoLee from '@/components/photo-lee/photo-lee.vue'
	export default {
		name: "accessories-add",
		components: {
			workSmallTitle,
			photoLee
		}
	}
</script>

<style scoped lang="scss">
	.accessories-add-main {
		z-index: 1;
		overflow-y: scroll;

		.accessories-add-content {
			margin: 30rpx;
			padding: 0 30rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			display: flex;
			flex-direction: column;

			.content-list-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
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

			.content-form-item {
				@extend .content-list-item;
				display: block;

				.item-content {
					padding-top: 30rpx;
				}
			}
		}

		.accessories-add-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 70rpx 0;

			button {
				width: 45%;
			}
		}
	}
</style>
