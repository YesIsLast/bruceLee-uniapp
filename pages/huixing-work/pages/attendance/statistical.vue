<template>
	<view class="statistical-main lee-page-bgc-gray">
		<!-- 页面需要使用全屏覆盖蒙版所以使用自定义导航，非特殊情况请谨慎使用 -->
		<u-navbar title="考勤统计" title-size="37" title-color="#000000" :background="{background: '#ffffff'}"></u-navbar>
		<view class="lee-padding-30">
			<attenStatis></attenStatis>
		</view>
	</view>
</template>

<!-- 考勤统计 -->
<script>
	import attenStatis from './components/attenStatis.vue'
	export default{
		name:"statistical",
		components:{
			attenStatis, // 考勤统计
		},
		// 原生导航栏返回按钮周期钩子
		onBackPress(options) {
            if (options.from === 'navigateBack') {
                return false;  
            }
			this.$utils.goBack()
            return true;  
        },
		data(){
			return{

			}
		}
	}
</script>

<style scoped lang="scss">
	.statistical-main{
		
		
	}
</style>
