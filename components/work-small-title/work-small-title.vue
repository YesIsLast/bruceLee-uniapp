<template>
	<view class="work-small-title">
		<view class="head-title">
			<image v-show="userHead" class="lee-image-radius-md lee-box-shadow-gray-10" :src="userHead" mode=""></image>
			<text v-show="username">{{username}}</text>
		</view>
		<text v-show="datetime" class="lee-color-gray lee-font-size-25">{{datetime}}</text>
	</view>
</template>

<script>
	export default{
		name:"work-small-title", // 页面小标题头
		props:{
			userHead:{
				type:String,
				default:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607501880459&di=48df259a50a752f7c79f25d97df42f98&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2FLr%3DSC5VXK9tfjPZWM1soPF%3DxgEYRTBwlBNAZqqh5VR4fJ1547730466135compressflag.jpg"
			},
			username:{
				type:String,
				default:"卡卡罗特"
			},
			datetime:{
				type:String,
				default:""
			}
		}
	}
</script>

<style scoped lang="scss">
	.work-small-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid $lee-border-gray;
		padding: 30rpx;
		font-size: 30rpx;
		
		.head-title{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			
			text{
				margin-left: 20rpx;
				font-weight: 700;
			}
		}
	}
</style>
