<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// 引入组件库样式css uview
	@import "uview-ui/index.scss";
	// 引入字体图标库 iconfont阿里
	@import "./static/iconfont/iconfont.css";
	// 引入自定义通用全局样式库
	@import "./static/css/lee.css";
	// 引入动画样式组件库 https://animate.style/
	@import "./static/animate/animate.css";
</style>
