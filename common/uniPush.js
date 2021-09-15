// 主要处理推送消息业务逻辑，所使用的函数
import permision from '../permission/permission.js'
const msgTypeList = ["WP"] // 消息通知类型
// WP_01、新任务派发
// WP_02、外派调整
// WP_03、外派取消
// WP_04、报销查看详情
// WP_05、报销编辑
const msgChildTypeList = ["WP_01", "WP_02", "WP_03", "WP_04", "WP_05"] // 子消息通知类型 
const msgChildTypePath = ["WP_01", "WP_02", "WP_03", "/pages/account/detail", "/pages/account/add"] // 子消息通知类型 

function pushMessage(message) {
	message = pushParams(message)
	console.log("查看当前推送消息数据", message)
	// 检查当前是否为推送消息
	let msg = {
		title: "", // 通知标题
		content: "", // 通知内容
		receiptTime: "", // 通知时间（北京时间）
		status: false, // 是否为有效通知消息
		type: "", // 通知消息类型 	WP、外派消息
		typeChild: "", // 子消息类型
		transParams: {}, // 通知消息数据源
	}
	// 重组消息数据
	msg.status = message.transParams ? true : false
	msg.transParams = message.transParams || undefined
	msg.title = message.transParams.title || message.title
	msg.type = message.transParams._BUSINESS_MODULE
	msg.typeChild = message.transParams._BUSINESS_MODULE_CHILD
	console.log("查看当前重组消息数据", msg)

	

	return
}

// 推送消息参数解析
function pushParams(message) {
	let result = message
	try {
		result = JSON.parse(message.content)
	} catch (err) {
		console.log(err)
	}
	return result
}

// 获取当前用户通知消息列表与角标数量
function getMsgList(param) {
	let msgNum = 0
	let msgList = []
	// utils.getRequest('url', {
	// 	id: 0
	// }).then(res => {
	// 	console.log("当前用户消息列表", res)
	// 	msgNum = res.list.length
	// 	msgList = res.list
	// })
	plus.runtime.setBadgeNumber(msgNum); // 设置app角标数值
}

// 检查当前通知权限
function offlinePush() {
	var main = plus.android.runtimeMainActivity();
	var pkName = main.getPackageName();
	var uid = main.getApplicationInfo().plusGetAttribute("uid");
	var NotificationManagerCompat = plus.android.importClass("android.support.v4.app.NotificationManagerCompat");
	var areNotificationsEnabled = NotificationManagerCompat.from(main).areNotificationsEnabled();
	// 未开通‘允许通知’权限，则弹窗提醒开通，并点击确认后，跳转到系统设置页面进行设置  
	if (!areNotificationsEnabled) {
		uni.showModal({
			title: '提示',
			content: '您还没有开启通知权限，请前往设置',
			showCancel: false,
			success: function(res) {
				if (res.confirm) {
					var Intent = plus.android.importClass('android.content.Intent');
					var Build = plus.android.importClass("android.os.Build");
					//android 8.0引导  
					if (Build.VERSION.SDK_INT >= 26) {
						var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
						intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
					} else if (Build.VERSION.SDK_INT >= 21) { //android 5.0-7.0  
						var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
						intent.putExtra("app_package", pkName);
						intent.putExtra("app_uid", uid);
					} else { //(<21)其他--跳转到该应用管理的详情页
						var Settings = plus.android.importClass("android.provider.Settings");
						var Uri = plus.android.importClass("android.net.Uri");
						var intent = new Intent();
						intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
						var uri = Uri.fromParts("package", main.getPackageName(), null);
						intent.setData(uri);
					}
					// 跳转到该应用的系统通知设置页  
					permision.gotoAppSetting()
				}
			}
		});
	}
}

export default {
	pushMessage,
	offlinePush
}
