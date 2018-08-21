//主要为了页面跳转模块
//页面跳转
			mui('body').on("tap", ".a", function(e) {
			var title=this.getAttribute("title");		//获取需要的传值
			var htmlName=this.getAttribute("htmlName")	//获取点击事件需要跳转的网址
			
			mui.openWindow({
				url:htmlName, //需要打开页面的url地址 
				id :htmlName, //需要打开页面的url页面id
				styles: {
					top: '0px', //新页面顶部位置 
					bottom: '0px', //新页面底部位置 
					//width: newpage - width, //新页面宽度，默认为100% 
					//height: newpage - height, //新页面高度，默认为100% ...... 
				},
				extras: {
						title:title,
						htmlName:htmlName,
					 //自定义扩展参数，可以用来处理页面间传值 
				},
				show: { //控制打开页面的类型
					autoShow: true,
					//页面loaded事件发生后自动显示，默认为true 
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
					duration: '100' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
				},
				waiting: { // 控制 弹出转圈框的信息
					autoShow: true, //自动显示等待框，默认为true 
					title: '加载中', //等待对话框上显示的提示内容 
					options: {
						width: '300px', //等待框背景区域宽度，默认根据内容自动计算合适宽度 
						height: '100px', //等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
					}
				}
			});
		})