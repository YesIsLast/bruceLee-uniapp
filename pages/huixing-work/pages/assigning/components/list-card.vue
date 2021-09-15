<template>
	<view class="list-card-main">
		<view class="card-title">
			<view class="lee-flex lee-align-items-center">
				<text class="card-round"></text>
				<text class="card-title-green">已发车</text>
			</view>
			<button type="primary" plain >更换车辆</button>
		</view>
		<view class="card-content">
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919</text>
			</view>
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919</text>
			</view>
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919</text>
			</view>
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919</text>
			</view>
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919</text>
			</view>
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919</text>
			</view>
			<view class="content-item">
				<text class="item-title">订单编号:</text>
				<text>WP202012211919订单编号WP202012211919订单编号WP20201</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"list-card",
		
	}
</script>

<style scoped lang="scss">
	// 私有样式
	$assigning-green:#52CCC2;
	.card-title-green{
		color: $assigning-green;
	}
	
	.list-card-main{
		margin: 30rpx;
		background-color: #FFFFFF;
		border-radius: 30rpx;
		
		.card-title{
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 35rpx;
			padding: 30rpx;
			border-bottom: 1rpx solid $lee-border-gray;
			
			.card-round{
				height: 20rpx;
				width: 20rpx;
				background-color: $assigning-green;
				border-radius: 50%;
				margin-right: 10rpx;
			}
			button{
				height: 70rpx;
				border-radius: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0;
			}
		}
		.card-content{
			padding: 30rpx;
			display: flex;
			flex-direction: column;
			
			.content-item{
				display: flex;
				align-items: center;
				justify-content: flex-start;
				flex-wrap: wrap;
				font-size: 35rpx;
				padding: 5rpx 0;
				
				.item-title{
					font-weight: 700;
					padding-right: 20rpx;
				}
			}
		}
	}
</style>
