<template>
	<view class="assigning-list-main lee-page-bgc-gray">
		<view class="assigning-list-search" :style="searchMoreStatus?{'height':'230rpx'}:{'height':'120rpx'}">
			<view class="searchDate">
				<picker mode="date" :value="searchForm.searchDate" @change="searchDateChange">
					<view class="uni-input">{{searchForm.searchDate}}</view>
				</picker>
				<text class="iconfont iconfangdajing"></text>
			</view>
			<view class="searchDate">
				<input type="text" value="" placeholder="请输入搜索条件" />
				<text class="iconfont iconfangdajing"></text>
			</view>
			<view class="searchMore" @click="searchMoreStatus = !searchMoreStatus">
				<text class="iconfont" :class="searchMoreStatus?'iconshangsanjiaoxing':'iconxiasanjiaoxing'"></text>
			</view>
			
			<view class="searchDate">
				<input type="text" value="" placeholder="请输入搜索条件" />
				<text class="iconfont iconfangdajing"></text>
			</view>
			<view class="searchDate">
				<input type="text" value="" placeholder="请输入搜索条件" />
				<text class="iconfont iconfangdajing"></text>
			</view>
			
		</view>

		<view class="assigning-list-content">
			<listCard></listCard>
			<listCard></listCard>
			<listCard></listCard>
		</view>

	</view>
</template>

<script>
	import listCard from "./components/list-card.vue"
	export default {
		name: "assigning-list",
		components: {
			listCard
		},
		data() {
			return {
				searchMoreStatus:false,
				searchForm: {
					searchDate: "2021-01-01",
				}
			}
		},
		methods: {
			searchDateChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.assigning-list-main {
		z-index: 0;
		overflow-y: scroll;
		margin-top: 100rpx;

		.assigning-list-search {
			z-index: 1;
			padding: 30rpx;
			background-color: #FFFFFF;
			display: flex;
			flex-wrap: wrap;
			position: absolute;
			top: 0;
			box-shadow: 0 5rpx 10rpx 0 #9f9f9f;
			transition: all .3s ease;
			overflow: hidden;

			.searchDate {
				border: 1rpx solid #c6c6c6;
				width: 45%;
				height: 80rpx;
				color: #000000;
				padding: 15rpx 20rpx;
				display: flex;
				align-items: center;
				margin-right: 15rpx;
				margin-bottom: 20rpx;
				justify-content: space-between;
				.iconfont{
					font-weight: 700;
				}
			}
			.searchMore{
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $lee-color-primary;
			}

		}
		.assigning-list-content{
			margin-top: 170rpx;
			margin-bottom: 200rpx;
		}
	}
</style>
