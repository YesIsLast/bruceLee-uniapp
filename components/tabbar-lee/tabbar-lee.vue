<template>
	<view class="tabbar-main" :style="'backgroundColor:'+ backgroundColor +''">
		<view class="tabbar-content">
			<view class="tabbar-item color-CCCCCC" :class="tabbarCurrent == 1?'color-4285F4':''" @click="jumpMenu(1,'index')">
				<text class="iconfont iconhome menuIcon"></text>
				<text>首页</text>
			</view>
			<view class="tabbar-item color-CCCCCC" :class="tabbarCurrent == 2?'color-4285F4':''" @click="jumpMenu(2,'workbench')">
				<text class="iconfont iconqizi menuIcon"></text>
				<text>工作台</text>
			</view>
			<view class="tabbar-item color-CCCCCC" :class="tabbarCurrent == 3?'color-4285F4':''" @click="jumpMenu(3,'mine')">
				<text class="iconfont iconwode menuIcon"></text>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"tabbar-lee",
		props:{
			// tabbar背景颜色
			backgroundColor:{
				type:String,
				default:""
			},
			current:{
				type:Number,
				default:1
			}
		},
		data(){
			return{
				tabbarCurrent:1
			}
		},
		mounted() {
			this.tabbarCurrent = this.current
		},
		methods:{
			jumpMenu(current,path){
				this.tabbarCurrent = current
				// console.log(this.tabbarCurrent,path)
				uni.redirectTo({
					url:'/pages/huixing-work/pages/'+ path +'/' + path
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.flex-center-row{
		display: flex;
		justify-content: center;
	}
	.flex-center-column{
		display: flex;
		align-items: center;
	}
	.flex-center{
		display: flex;
		align-items: center;
	}
	.flex-space-between{
		display: flex;
		justify-content: space-between;
	}
	.flex-column{
		display: flex;
		flex-direction: column;
	}
	.color-CCCCCC{
		color: #CCCCCC;
	}
	.color-4285F4{
		color: #4285F4;
	}
	
	.tabbar-main{
		width: 100vw;
		height: 180upx;
		position: fixed;
		bottom: 0;
		padding: 30upx 0;
		@extend .flex-center-row;
		.tabbar-content{
			background-color: #fff;
			border-radius: 80upx;
			height: 100%;
			width: 90vw;
			@extend .flex-space-between;
			@extend .flex-center-column;
			box-shadow: 0 0 10rpx 5rpx #f7f7f7;
			.tabbar-item{
				width: 100%;
				text-align: center;
				@extend .flex-column;
				.menuIcon{
					font-size: 50upx;
				}
			}
		}
	}
</style>
