/**
 * OSS上传文件底层函数JS uploadOSS
 * 
 * */
import {
	Base64
} from './base64.js'
import crypto from '../node_modules/crypto-js/crypto-js.js'

// 公共项目请勿使用真实域名与key，会导致OSS配置泄露，千万注意！！！千万注意！！！千万注意！！！
const host = '你的访问域名' // 存储空间的访问域名
const accessKeySecret = '你的accessKeySecret'
const accessKeyId = '你的accessKeyId'
/**
 * 上传文件到OSS
 * @param {Object} ossFolder 远程文件夹名称
 * @param {Object} localFilePath 本地文件路径地址
 */
function uploadOSS(ossFolder, localFilePath) {
	let policy = getPolicyBase64() // 请求的base64签名
	let signature = getSignature(policy, accessKeySecret)
	let result = {
		path: "", // oss远程路径
		statusCode: 500, // 上传返回状态码（200、成功  500、失败）
		message: "上传失败" // 返回消息
	}
	return new Promise((resolve, reject) => {
		let osskey = ossFolder + '/' + new Date().getTime() + checkFileType(localFilePath) // 设置文件路径名称
		uni.uploadFile({
			url: host, //输入你的 bucketname.endpoint
			filePath: localFilePath,
			name: 'file',
			formData: {
				key: osskey,
				policy: policy, // 输入你获取的policy签名
				OSSAccessKeyId: accessKeyId, // 输入你的AccessKeyId
				success_action_status: '200', // 设置上传成功，默认会返回204
				signature: signature // 输入你获取的signature签名
			},
			success: ossres => {
				if (ossres.statusCode == '200') {
					uni.hideLoading()
					result.path = host + osskey
					result.statusCode = 200
					result.message = '文件上传成功'
					resolve(result)
				} else {
					console.error(ossres)
					uni.hideLoading()
					result.path = ""
					result.statusCode = 500
					result.message = '文件上传失败'
					reject(result)
				}
			},
			fail: (err) => {
				uni.hideLoading()
				result.path = ""
				result.statusCode = 400
				result.message = err
				console.error(err)
				reject(result)
			}
		});
	})
}
// 检查并返回文件类型
function checkFileType(filePath) {
	return /\.jpg$|\.mp3$|\.jpeg$|\.gif$|\.png$|\.ico$|\.svg$/i.exec(filePath)[0]
}
setTimeout(function(){
	
})
function getPolicyBase64() {
	let date = new Date();
	let maxSize = 50 // 限制上传文件大小(M)。
	let timeOut = 1 // 参数的生效时间
	// 设置policy过期时间。
	date.setHours(date.getHours() + timeOut);
	let srcT = date.toISOString();
	const policyText = {
		expiration: srcT,
		conditions: [
			["content-length-range", 0, maxSize * 1024 * 1024],
		],
	};
	return Base64.encode(JSON.stringify(policyText));
}

function getSignature(policy, accessKeySecret) {
	return crypto.enc.Base64.stringify(
		crypto.HmacSHA1(policy, accessKeySecret)
	);
}

export default {
	uploadOSS
}
