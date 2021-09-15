<template>
	<view class="borrowing-add-main lee-page-bgc-gray">
		<!-- 页面小标题头 -->
		<workSmallTitle username="贝吉塔的借款"></workSmallTitle>

		<view class="borrow-money">
			<text class="iconfont iconrenminbi"></text>
			<input type="digit" value="" placeholder="请输入借款金额" />
		</view>

		<view class="borrow-form">
			<view class="form-item">
				<text class="item-title">借款说明</text>
				<textarea class="lee-padding-top-10" value="" placeholder="请输入借款说明" ></textarea>
			</view>
			<view class="form-item">
				<text class="item-title">借款说明</text>
				<view class="lee-padding-top-10">
					<photoLee></photoLee>
				</view>
			</view>
		</view>
		
		<view class="borrow-footer">
			<button type="primary">确定</button>
		</view>

	</view>
</template>

<script>
	import workSmallTitle from '@/components/work-small-title/work-small-title.vue'
	import photoLee from '@/components/photo-lee/photo-lee.vue'
	export default {
		name: "borrowing-add",
		components: {
			workSmallTitle,
			photoLee
		},
		onNavigationBarButtonTap(e) {
			this.$utils.goPage('/pages/huixing-work/pages/borrowing/borrowing-list')
		}
	}
</script>

<style scoped lang="scss">
	.borrowing-add-main {
		z-index: 1;
		overflow-y: scroll;
		.borrow-money {
			background-color: #FFFFFF;
			border-radius: 30rpx;
			padding: 30rpx;
			margin: 30rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;

			.iconfont {
				color: #092757;
				margin-right: 20rpx;
				font-size: 50rpx;
			}
			input{
				font-size: 35rpx;
			}
		}

		.borrow-form {
			background-color: #FFFFFF;
			border-radius: 30rpx;
			margin: 50rpx 30rpx 30rpx 30rpx;
			
			.form-item{
				padding: 30rpx;
				border-bottom: 1rpx solid $lee-border-gray;
				
				.item-title{
					font-size: 35rpx;
					font-weight: 700;
				}
			}
		}
		.borrow-footer{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 80rpx;
			button{
				width: 50%;
			}
		}
	}
</style>
