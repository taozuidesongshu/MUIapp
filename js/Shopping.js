(function() {
	//删除单个商品时间触发
	mui('.shop_li').on('click', '.shop_li_delete', function() {
		console.log('触发删除')
		console.log(this)
		var thih = this

		mui.confirm('你确定要删除', function(e) {
			console.log(e.index) //1为确定，0为取消
			if(e.index == 1) { //确定
				console.log(this)
				$(thih).parent().remove(); //如果确定，那么删除当前按钮的父元素
				//商品总值计算
				jsTotal()
			}
		})

	})
	//全部删除商品事件触发
	mui('.mui-bar-nav').on('click', '#deletes', function() {
		console.log('触发删除')
		mui.confirm('你确定要删除', function(e) {
			console.log(e.index) //1为确定，0为取消
			if(e.index == 1) { //确定
				//如果确定，那么删除购物车里的所有商品
				$('.mui-table-view').children().remove()
				//并且让统计金额改为0
				$("#total").text("0");

			}
		})

	})

	//全选按钮改变事件
	document.getElementById('checkAll').addEventListener('change', function(e) {
		var listBox = $("input[name='checkbox']");
		console.log(e.target.checked)
		if(e.target.checked) { //如果全选按钮为true，则选择所有商品
			listBox.each(function() {
				var ele = this;
				ele.checked = true
			})
			jsTotal(); //计算总额
			//显示全部删除按钮
			$('#deletes').show();

		} else { //为flase，取消所有商品选择
			listBox.each(function() {
				var ele = this;
				ele.checked = false
				//ele.removeAttribute('checked');
			})
			//并且让总金额改为0
			$("#total").text("0");
			//隐藏全部删除按钮
			$('#deletes').hide();
		}
	})

	//商品数量改变事件
	mui(".mui-table-view").on('change', ".mui-input-numbox", function() {
		jsTotal(); //算出总额
	})

	//多选框的改变事件
	mui('.mui-table-view').on('change', 'input[name=checkbox]', function() {
		jsTotal(); //算出总额
	});

	//商品总值计算
	function jsTotal() {
		var listBox = $("[name='checkbox']:checked");
		var total = 0;
		if(listBox.length == 0) {
			$("#total").text(total);
		}
		for(var i = 0; i < listBox.length; i++) {
			//获取当前选择商品的价格
			var p = listBox.eq(i).parent().nextAll('.shop_li_right').children('.shop_li_right_div').children('span').text(); //单价
			//获取当前选择商品的数量
			var n = listBox.eq(i).parent().nextAll('.shop_li_right').children('.shop_li_right_div').children(".mui-numbox").children('.mui-input-numbox').val(); //数量
			var m = Math.formatFloat(p * n, 2);
			total = Math.formatFloat(total + m, 2);
		}
		//console.log(total);
		//总额输出到页面
		$("#total").text(total);
	}
	//
	Math.formatFloat = function(f, digit) {
		var m = Math.pow(10, digit);
		return parseInt(f * m, 10) / m;
	}

	//
})()