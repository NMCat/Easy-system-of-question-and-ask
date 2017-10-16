
// 返回上一页
$("#goBack").click(function(){
	history.go(-1);
});

// 回到首页
$("#home").click(function(){
	location.href = "index.html";
});

// 发送提问请求
$("form").submit(function(event){
	event.preventDefault();
	var data = $(this).serialize();
	$.post("/question/ask",data,function(resData){
		$(".modal-body").text(resData.msg);
		$("#myModal").modal("show");
	});
});
