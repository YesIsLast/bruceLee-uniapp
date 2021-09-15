<template>
	<view class="empty-lee-main" :style="backgroundColor">
		<text class="iconfont iconempty"></text>
		<view>{{title}}</view>
	</view>
</template>

<script>
	export default{
		name:"empty-lee",
		props:{
			title:"",
			icon:"",
			backgroundColor:{
				type:Object,
				default:function(){
					return {"background-color": "#FFFFFF"}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.empty-lee-main{
		padding: 30rpx;
		color: $lee-fontColor-gray;
		margin: 30rpx 30rpx 100rpx 30rpx;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		
		.iconfont{
			font-size: 40px;
		}
	}
</style>
