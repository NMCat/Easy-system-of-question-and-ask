
// 返回上一页
$("#goBack").click(function(){
	history.go(-1);
});

// 回到首页
$("#home").click(function(){
	location.href = "index.html";
});

// 发送回答问题的请求
$("form").submit(function(event){
	event.preventDefault();
	
	// 不仅需要把答案传递到后台，还需要把回答的这个问题的 question.time 
	// 也传递到后台（要不找不到这个答案对应的问题）
	// 现在不用了，因为我们点击问题时存到 cookie
	
	// 获取表单数据字符串（key=value&key=value的形式）
	var data = $(this).serialize();
	$.post("/question/answer",data,function(resData){
		$(".modal-body").text(resData.msg);
		$("#myModal").modal("show").on("hide.bs.modal",function(){
			if (resData.code == 1) {
				location.href = "/";
			}
		});
	});
});



