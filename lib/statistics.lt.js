var id = $('#mid').attr('data-mid');
if (! id) {
	id = $('#mid').attr('data-default');
}
var codeObj = {android:id,  ios:id};
var osType  = phoneSystem();
var client  = fBrowser();

$(function(){
	// 统计点击率
	if(id != "" && id != null){
		$.ajax({  
			dataType:"jsonp",
			jsonp:"jsonpcallback", 
			url: "//tongji.leiting.com/terrace/mobile_common!saveMobileClick.action",
			data:{
				"code" : id,
				"mobileClick.osType":osType,
	            "mobileClick.client":client
			}
		});
	}
});

//判断是ios还是安卓
function phoneSystem(){
	var sUserAgent = navigator.userAgent.toLowerCase();
	if ((sUserAgent.match(/(iphone|ipod|ios|ipad)/i))) {
	  	return "ios";
	}else{
		return "android";
	}
}

//判断是pc还是移动
function fBrowser(){
	var sUserAgent = navigator.userAgent.toLowerCase();
	if ((sUserAgent.match(/(iphone|ipod|android|ios|ipad|backerry|webos|symbian|windows phone|phone|mobile|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire)/i))) {
	       //手机访问
		return "mobile";
	}else{
	       //电脑访问
	   	return "pc";
	}
}

function download(url){
	// 统计下载率
	if(id != "" && id != null){
		$.ajax({  
			dataType:"jsonp",
			jsonp:"jsonpcallback", 
			url: "//tongji.leiting.com/terrace/mobile_common!saveMobileDownload.action",
			data:{
				"code" : id,
				"mobileDownload.osType":osType,
	            "mobileDownload.client":client
			},
		});
	} 
	window.location.href = url;		
}