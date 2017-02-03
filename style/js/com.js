$(document).ready(function() {
	com.start();
})
var com = {
	start: function() {
		this.resize();
		this.slide();
		this.ani();
		this.btn();
	},
	resize: function() {
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var docWidth = winWidth > 720 ? 720 : winWidth;
		var mainbody = $("div").is(".mainbody");
		var heightbody = $("div").is(".heightbody");
		$(".mainbody").css({
			"width": docWidth,
			"height": "auto"
		});
	},
	slide: function() {
		var title = $(".title");
		title.click(function() {
			var i = $(this).find("i");
			(i.html() == "∧")?i.html("∨"):i.html("∧");
			$(this).siblings('.text').slideToggle(800, "linear");
			$(this).parent().siblings().find("i").html("∧");
			$(this).parent().siblings().find(".text").slideUp(800, "linear");
		});
	},
	ani: function() {
		var message = $(".message"),
			back = $(".back"),
			aWrap = $(".aWrap"),
			bWrap = $(".bWrap");
		message.click(function() {
			setTimeout(function() {
				aWrap.fadeOut();
			}, 1);
			setTimeout(function() {
				bWrap.fadeIn();
			}, 400);
		})
		back.click(function() {
			setTimeout(function() {
				bWrap.fadeOut();
			}, 1);
			setTimeout(function() {
				aWrap.fadeIn()
			}, 400);
		})
	},
	btn: function() {
		var right = $(".right"),
			btn = $(".btn");
		right.click(function() {
			$(this).find("input[type=text]").focus();
		});
		btn.click(function() {
			//名字
			var name = $("#name").val();
			//电话
			var tel = $("#tel").val();
			//性别
			var sex_boj = $("input[name='sex']"),
				sex = '';
			sex_boj.each(function() {
				if ($(this).is(':checked')) {
					sex = $(this).val();
				}
			});
			//贷款金额
			var money = $("#money").val();
			//贷款用途
			var use = $("#use option:selected").text();
			//职业情况
			var zhiye_boj = $("input[name='occupation']"),
				zhiye = '';
			zhiye_boj.each(function() {
				if ($(this).is(':checked')) {
					zhiye = $(this).val();
				}
			});
			//资产情况
			var asset_boj = $("input[name='asset']"),
				asset = '';
			asset_boj.each(function() {
				if ($(this).is(':checked')) {
					asset = $(this).val();
				}
			});
			//是否办理
			var handle_boj = $("input[name='handle']"),
				handle = '';
			handle_boj.each(function() {
				if ($(this).is(':checked')) {
					handle = $(this).val();
				}
			});
			//选择网点
			var lianA =  $("#a option:selected").text()+$("#b option:selected").text();
			if (name == "") {
				alert("姓名不能为空");
				return false;
			} else if (tel == "") {
				alert("电话不能为空");
				return false;
			} else if (sex == "") {
				alert("请选择性别");
				return false;
			} else if (money == "") {
				alert("请填写贷款金额");
				return false;
			} else if (use == "请选择") {
				alert("请选择贷款用途");
				return false;
			} else if (zhiye == "") {
				alert("请选择你的职业");
				return false;
			} else if (asset == "") {
				alert("请选择资产情况");
				return false;
			} else if (handle == "") {
				alert("是否办理");
				return false;
			} else if (lianA == '区域选择网点') {
				alert("请选择网点");
				return false;
			}
		/*	alert("OK");*/
			var param =  {"name":name,"tel":tel,"sex":sex,"money":money,"use":use,"zhiye":zhiye,"asset":asset,"handle":handle,"lianA":lianA}
			console.log(param);
			$.post('bin/save.php',param, function(data, textStatus, xhr) {
				if(data.hycode == 0){
					alert("提交成功！");
				}else{
					alert(data.msg);
				}
			},"json");
		});
	}
}