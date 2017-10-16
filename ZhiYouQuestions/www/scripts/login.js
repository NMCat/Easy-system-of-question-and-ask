
// 返回上一页
$("#goBack").click(function(){
	history.go(-1);
});

// 去注册页面
$("#register").click(function(){
	location.href = "register.html";
});

// 发送登录请求
$("form").submit(function(event){
	// 阻止默认事件
	event.preventDefault();
	
	// 获取表单数据，拼接成字符串（不是 formdata 格式）
	var data = $(this).serialize();
	
	// 发送网络请求
	$.post("/user/login",data,function(resData){
		$(".modal-body").text(resData.msg);
		$("#myModal").modal("show").on("hide.bs.modal",function(){
			// 登录成功之后跳转到首页页面否则还留在本页面继续登录
			if (resData.code == 1) {
				location.href = "/index.html";
			}
		});
	});
});




