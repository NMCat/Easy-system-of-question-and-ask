
// 返回上一页
$("#goBack").click(function(){
	history.go(-1);
});

// 回到首页
$("#home").click(function(){
	location.href = "index.html";
});

// 提交
$("form").submit(function(event){
	// 阻止默认事件
	event.preventDefault();
	
	// 判断密码和确认密码是否一致
	var pswInputs = $("input[type=password]");
	// pswInputs[i] 是获取 jquery 对象里面的原生标签对象
	if (pswInputs[0].value != pswInputs[1].value) {
		// 修改 modal-body 内容
		$(".modal-body").text("两次密码输入不一致");
		// 弹出模态框给用户提示
		$("#myModal").modal("show");
		return;
	}
	
	// 发送注册请求
	// var data = new FormData(this); // 用 formdata 获取表单数据
	// 将表单数据编译成字符串（username=xxx&password=xxx&）
	var data = $(this).serialize();
	$.post('/user/register',data,function(resData){
		$(".modal-body").text(resData.msg);
		$("#myModal").modal("show").on("hide.bs.modal",function(){
			// 注册成功之后跳转到登录页面否则还留在本页面继续注册
			if (resData.code == 1) {
				location.href = "/login.html";
			}
		});
	});
});
