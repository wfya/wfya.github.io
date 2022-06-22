jQuery(function ($) {
	var $btnGroup = $('.btn-group'),
		$cube = $('.cube'),
		$dice = $('.dice');
	// $btnGroup.on('click',onclick_btn);
	$cube.on('transitionend', onAniEnd);
	$cube.on('click', onclick_btn);

	// function onclick_btn(e){
	// 	console.log(e);
	// 	var point,
	// 			$btn;
	// 	if(!$dice.hasClass('ani') && e.target.tagName =="BUTTON"){
	// 		$btn = $(e.target); //获取对应的button Dom节点
	// 		point = parseInt($btn.attr('point')); // 获取对应节点point属性的值
	// 		if(setPoint(point)){
	// 			$dice.addClass('ani');
	// 		}
	// 	}
	// }
	function onclick_btn(e) {
		console.log(e);
		// 随机生成1-6个数
		var x = 6;
		var y = 1;
		// 随机生成的点数
		var point = parseInt(Math.random() * (x - y + 1) + y);
		if (!$dice.hasClass('ani')) {
			if (setPoint(point)) {
				$dice.addClass('ani');
			}
		}
	}

	function setPoint(point) {
		var prePoint,
			pointStr,
			num;
		// 获取point的属性值利用正则提取点数
		pointStr = $cube.attr('point').match(/\d/);
		// match检测结果是个数组，需要判断是否为空
		num = pointStr && pointStr.length > 0 && pointStr[0];
		// 将字符串转为数值类型
		prePoint = parseInt(num);
		// 判断是否与之前点数相同设置新的点数属性
		if (prePoint != point) {
			$cube.attr("point", "p" + point);
			return true;
		} else {
			return false;
		}
	}

	function onAniEnd(e) {
		$dice.removeClass('ani');
	}

});