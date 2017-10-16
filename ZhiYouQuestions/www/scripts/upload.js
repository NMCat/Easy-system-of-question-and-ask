
// 返回上一页
$("#goBack").click(function(){
	history.go(-1);
});

// 回到首页
$("#home").click(function(){
	location.href = "index.html";
});

// 上传头像
$("form").submit(function(event){
	event.preventDefault();
	
	// 获取表单数据，以 formdata 格式上传图片
	var data = new FormData(this);
	$.post({
		url: "/user/upload",
		data: data,
		contentType: false,
		processData: false,
		success: function(resData){
			$(".modal-body").text(resData.msg);
			$("#myModal").modal("show");
		}
	});
});
