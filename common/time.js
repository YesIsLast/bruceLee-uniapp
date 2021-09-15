export default{
	// 计算当前日期星座
	getHoroscope(date) {
	  let c = ['摩羯','水瓶','双鱼','白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','摩羯']
	  date=new Date(date);
	  let month = date.getMonth() + 1;
	  let day = date.getDate();
	  let startMonth = month - (day - 14 < '865778999988'.charAt(month));
	  return c[startMonth]+'座';
	},
	// 计算指定时间与当前的时间差
	sumAge(data){
		let dateBegin = new Date(data.replace(/-/g, "/"));
		let dateEnd = new Date();//获取当前时间
		let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
		let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
		let leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
		let hours=Math.floor(leave1/(3600*1000))//计算出小时数
		//计算相差分钟数
		let leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
		let minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
		//计算相差秒数
		let leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
		let seconds=Math.round(leave3/1000)
		return dayDiff+"天 "+hours+"小时 ";
		// return dayDiff * 24 + hours + '|' + minutes + '|' + seconds;
	},
	// 计算指定时间与当前的时间相差秒数
	sumSeconds(data){
		let dateBegin = new Date(data.replace(/-/g, "/"));
		let dateEnd = new Date();//获取当前时间
		let dateDiff = dateBegin.getTime() - dateEnd.getTime();//时间差的毫秒数
		
		return dateDiff;
		// return dayDiff * 24 + hours + '|' + minutes + '|' + seconds;
	},
	// 人性化时间格式
	getDate(shorttime){
		shorttime=shorttime.toString().length<13 ? shorttime*1000 : shorttime;
		let now = (new Date()).getTime();
		let cha = (now-parseInt(shorttime))/1000;
		
		return this.dateFormat(new Date(shorttime),"{Y}-{MM}-{DD}");
	},
	
	parseNumber(num) {
		return num < 10 ? "0" + num : num;
	},
	 
	dateFormat(date, formatStr) {
		let dateObj = {},
			rStr = /\{([^}]+)\}/,
			mons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
		 
		dateObj["Y"] = date.getFullYear();
		dateObj["M"] = date.getMonth() + 1;
		dateObj["MM"] = this.parseNumber(dateObj["M"]);
		dateObj["Mon"] = mons[dateObj['M'] - 1];
		dateObj["D"] = date.getDate();
		dateObj["DD"] = this.parseNumber(dateObj["D"]);
		dateObj["h"] = date.getHours();
		dateObj["hh"] = this.parseNumber(dateObj["h"]);
		// dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
		dateObj["t"] = dateObj["h"]
		dateObj["tt"] = this.parseNumber(dateObj["t"]);
		// dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
		dateObj["i"] = date.getMinutes();
		dateObj["ii"] = this.parseNumber(dateObj["i"]);
		dateObj["s"] = date.getSeconds();
		dateObj["ss"] = this.parseNumber(dateObj["s"]);
	 
		while(rStr.test(formatStr)) {
			formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
		}
		return formatStr;
	}
}