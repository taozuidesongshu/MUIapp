//自提，或者快递页面的价格计算
//商品数量改变事件
mui(".mui-numbox").on('change', ".mui-input-numbox", function() {

	cal() //计算价格

})

function cal() { //计算价格
	var listBox = document.getElementsByClassName('mui-input-numbox')[0].value; //获取改变的数量
	//console.log(listBox)
	var qua = document.getElementById('qua'); //获取单价后的展示数量
	//console.log(qua)
	qua.innerHTML = listBox //动态改变商品展示数量
	var price = document.getElementsByClassName('money')[0].innerHTML;
	//console.log(price)
	var p = listBox //数量
	var n = price //单价

	var m = Math.formatFloat(p * n, 2); //价格计算保留2为小数

	//console.log(m)
	var z = document.getElementById('total');
	//console.log(z)
	//计总值后，赋给合计费用
	z.innerHTML = m

}

Math.formatFloat = function(f, digit) {
	//价格计算保留2为小数
	var m = Math.pow(10, digit);
	return parseInt(f * m, 10) / m;
}