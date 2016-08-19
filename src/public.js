$(function(){
	$("#title").hide();
	var title=setTimeout(function(){
		$("#title").addClass("title_move");
		$("#title").show();
	},400);

	var duobeiWrap=setTimeout(function(){
		// $("#duobei_wrap").css({"float":"left"});
	},3400);

	$(".cancle").click(function(){
		window.history.go(-1);
		return false;
	});

})
