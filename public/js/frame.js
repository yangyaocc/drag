$(".bg_color_img a").on("click",function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".bg_style").eq($(this).index()).show().siblings(".bg_style").hide();
	gdt("#a1","#b1","#c1","#d1");
});
$("input[name='bj_img_posi']").on("click",function(){
	if($(this).is(":checked"))
	{
		$(this).parent().addClass("on").siblings().removeClass("on");
	}
});


$(".repeat ul li a").on("click",function(){
	var thisText = $(this).text();
	$(this).parents("ul").siblings("span").children("em").text(thisText);
	$(this).parents("ul").siblings("input[type='hidden']").val(thisText);
	$(this).parents("ul").slideUp(function(){gdt("#a1","#b1","#c1","#d1");});
});

$(".repeat span").on("click",function(){
	$(this).siblings("ul").slideToggle(function(){
		gdt("#a1","#b1","#c1","#d1");
	});
});

$(".line_num a").on("click",function(){
	$(this).addClass("on").siblings().removeClass("on");
	var tab = $(this).attr("tab");
	if(tab == "0")
	{
		$(this).parent().siblings(".line_con").animate({
			"left":"0"
		});
	}
	else if (tab == "1")
	{
		$(this).parent().siblings(".line_con").animate({
			"left":"-214px"
		});
	}
});

// 颜色 推荐
$(".main_vice ul li label input").on("click",function(){
	var thisChecked = $(this).is(":checked");
	if(thisChecked)
	{
		$(this).parent().addClass("on");
		$(this).parents("li").siblings().children("label").removeClass("on");
		$(this).parents("li").siblings().find(".color_checked em").remove();
		if($(this).siblings(".color_checked").children("em").length == "0")
		{
			$(this).siblings(".color_checked").append("<em>使用中</em>");
		}
		// 推荐颜色
		var frontview = $(this).parent().attr("frontview");
		var backgroundcolor = $(this).parent().attr("backgroundcolor");
		$(".main_color,.nav_bg_color").css("background-color",frontview);
		$(".text_color").css("color",frontview);
		$(".bot_main_color").css("border-bottom-color",frontview);

		$(".deputy_bg_color").css("background-color",backgroundcolor);
		
	};
});


$(document).on("click",function(){
	$(".all_layout").animate({
			"left":"-220px"
	},500);
	$(".right_alert").animate({
			"right":"-220px"
	},500,function(){
		$(".right_alert .operation_panel").hide();
	});
	$(".sel ul,.chenga_name,.select ol,.select_down ol").slideUp();
	$(".bg-1").remove();
	$(".top_show").removeClass("zIndex14");
	$(".addLm").removeClass("addLm");
});





// 拖拽首页
$(function(){
	$(".sel").on("click","p",function(event){
		$(this).siblings("ul").slideToggle();
		$(this).parent().siblings(".sel").children("ul").slideUp();
		event.stopPropagation();
	});
	$(document).on("click",".mod_edi_but ol li .on",function(){
		$(this).siblings("p").slideToggle();
	});
	$(".content").on("mouseenter mouseleave",".field .edi",function(e){
		if(e.type == "mouseleave")
		{
			$(this).find(".chenga_name_sel").hide();
		}
	});


	$(document).on("click",".chenga_name_sel span",function(e){
		navIndex = $(this).index();
		var thisT = $(this).text();
		$(this).parents("ol").siblings(".chenga_name").slideDown(function(){$(this).children("input").focus();});
		$(this).parent().hide();
		$(this).parents("ol").siblings(".chenga_name").children("input").val(thisT);
		e.stopPropagation();
	});
	$(document).on("click",".chenga_name",function(e){e.stopPropagation();});

	$(".content").on("mouseenter mouseleave",".field",function(e){
		if(e.type == "mouseenter")
		{
			$(this).find("input[type='radio']").attr("name","height");
		}
		else
		{
			$(this).find("input[type='radio']").removeAttr("name");
		}

	});
});


$(".content").on("click",".layout .copy_layout",function(){
	$(this).parents(".edi_line").find("input[type='radio']").attr("name","");
	var lab_html = $(this).parents(".field").html();
	$(this).parents(".wra_width980").after("<div class='wra_width980 field_wra' type='field'><div class='field'>"+lab_html+"</div></div>");
	var nextObj = $(this).parents(".wra_width980").next().find(".L_2");
	picimg(nextObj);

});

function picimg(obj){
	obj.slide({
	    titCell: ".hd ul",
	    mainCell: ".bd ul",
	    effect: "left",
	    autoPlay: true,
	    autoPage: true,
	    trigger: "click",
	    startFun: function(i) {
	        var curLi = obj.find(".bd li").eq(i);

	        if ( !! curLi.attr("_src")) {
	            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src");
	        };
	        if ( !! curLi.attr("_title")) {
	        	obj.find(".tit").text(curLi.attr("_title"));
	        };
	    }
	});
};



$(".content").on("click",".new_layout",function(){
	var new_field = "";
	new_field+='<div class="wra_width980 field_wra" type="field">';
	new_field+='<div class="field">';
	new_field+='<div class="wid240">';
	new_field+='<div class="line_1 edi addMod top_show">';
	new_field+='<div class="modular_set pub_mask newHtml" style="width:100%;height:100%;position:relative;z-index:12;">';
	new_field+='<div class="addModT_sty">';
	new_field+='<i></i>';
	new_field+='<p>添加栏目</p>';
	new_field+='</div></div></div></div>';
	new_field+='<div class="wid480">';
	new_field+='<div class="line_1 edi addMod top_show">';
	new_field+='<div class="modular_set pub_mask newHtml" style="width:100%;height:100%;position:relative;z-index:12;">';
	new_field+='<div class="addModT_sty">';
	new_field+='<i></i>';
	new_field+='<p>添加栏目</p>';
	new_field+='</div></div></div></div>';
	new_field+='<div class="wid240">';
	new_field+='<div class="line_1 edi addMod top_show">';
	new_field+='<div class="modular_set pub_mask newHtml" style="width:100%;height:100%;position:relative;z-index:12;">';
	new_field+='<div class="addModT_sty">';
	new_field+='<i></i>';
	new_field+='<p>添加栏目</p>';
	new_field+='</div></div></div></div>';

	new_field+='<div class="edi_line">';
	new_field+='<div class="layout_set">';
	new_field+='<div class="layout"><p class="new_layout"><i class="fa fa-plus"></i>新增布局</p><p class="copy_layout"><i class="fa fa-files-o"></i>复制布局</p></div>';
	new_field+='<div class="up_down"><p><i class="fa fa-arrow-up"></i></p><p><i class="fa fa-arrow-down"></i></p></div>';
	new_field+='</div>';
	new_field+='<div class="lay_hei">';
	new_field+='<div class="hei_set">';
	new_field+='<span>高度:</span>';
	new_field+='<label><input type="radio" name="" checked><i></i>默认</label>';
	new_field+='<label><input type="radio" name=""><i></i>加高</label>';
	new_field+='</div>';
	new_field+='<div class="lay_but"><p>换布局</p><p>删除</p></div>';
	new_field+='</div></div></div></div>';

	$(this).parents(".field_wra").after(new_field);
});
// 下移
$(".content").on("click",".down",function(){
	var parHtml = $(this).parents(".field_wra");
	var parIndex = parHtml.index();
	var childLength = $(this).parents(".content").children("[type='field']").length;
	var nextObj = parHtml.next().html();
	var thisObj = parHtml.html();
	
	if(parIndex != childLength-1)
	{
		parHtml.html(nextObj);
		parHtml.next().html(thisObj);

		// 重置轮播图js
		var nextL_2 = $("[type='field']").eq(parIndex+1).find(".L_2");
		var thisL_2 = $("[type='field']").eq(parIndex).find(".L_2");
		if(nextL_2.length == 1)
		{
			picimg(nextL_2);
		}
		if(thisL_2.length == 1)
		{
			picimg(thisL_2);
		}
	};
	$("input[type='radio']").removeAttr("name");
});
// 上移
$(".content").on("click",".up",function(){
	var parHtml = $(this).parents(".field_wra");
	var parIndex = parHtml.index();
	var prevObj = parHtml.prev().html();
	var thisObj = parHtml.html();
	if(parIndex != 0)
	{
		parHtml.html(prevObj);
		parHtml.prev().html(thisObj);

		// 重置轮播图js
		var prevL_2 = $("[type='field']").eq(parIndex-1).find(".L_2");
		var thisL_2 = $("[type='field']").eq(parIndex).find(".L_2");
		if(prevL_2.length == 1)
		{
			picimg(prevL_2);
		}
		if(thisL_2.length == 1)
		{
			picimg(thisL_2);
		}
	};
	$("input[type='radio']").removeAttr("name");
});

$(function() {
	
	$( ".alert_set" ).draggable({ handle: ".alert_tit",containment: ".bg-0", scroll: false });
    $( ".sec_all" ).sortable({items:".sec_level:not(.state-disabled)"});
    $( ".sec_all" ).disableSelection();
	$(".bg-0").height($(window).height()-110+"px");
	alert_size();
	$(window).resize(function(){
		alert_size();
	});
	$(document).on("click",".select p",function(e){
		$(this).siblings("ol").slideToggle();
		e.stopPropagation();
	});

	$(document).on("click",".select dl dt,.select dl dd",function(e){
		var thisTe = $(this).text();
		$(this).parents(".select").children("p").html(thisTe+"<i class='fa fa-caret-down'></i>");
	});
	$(document).on("click",".choice>a",function(){
		var checked = $(this).children("input").is(":checked");
		if($(this).children("input").length>0)
		{
			if(checked)
			{
				// $(this).removeClass("bg_283c50").addClass("bg_999");
				$(this).find("em").text("显示");
			}
			else
			{
				// $(this).removeClass("bg_999").addClass("bg_283c50");
				$(this).find("em").text("隐藏");
			}
		}
		gdt("#a4","#b4","#c4","#d4");
	});
	// 添加栏目
	$(document).on("click",".add_column a",function(){
		var columnHtml = "";
		columnHtml += '<div class="nav_mod">';
		columnHtml += '<div class="first_level bg_e3fbe3">';
		columnHtml += '<div class="ico_nav"><a class="up_line"><i class="fa fa-arrow-up"></i></a><a class="down_line"><i class="fa fa-arrow-down"></i></a></div>';
		columnHtml += '<div class="choice">';
		columnHtml += '<div class="select wid110">';
		columnHtml += '<p>一级栏目<i class="fa fa-caret-down"></i></p>';
		columnHtml += '</div>';
		columnHtml += '<input type="text" placeholder="别名" class="alias_name">';
		columnHtml += '<a class="bg_283c50"><em>隐藏</em><input type="checkbox"></a>';
		columnHtml += '<a class="bg_283c50 del_first">删除</a>';
		columnHtml += '</div>';
		columnHtml += '<div class="show_hide">';
		columnHtml += '<em>(1)</em>';
		columnHtml += '<a><i class="fa fa-plus-square"></i></a>';
		columnHtml += '</div></div>';
		columnHtml += '<div class="sec_all">';
		columnHtml += '<div class="sec_level">';
		columnHtml += '<div class="choice">';
		columnHtml += '<div class="select wid110">';
		columnHtml += '<p>一级栏目<i class="fa fa-caret-down"></i></p>';
		columnHtml += '</div>';
		columnHtml += '<input type="text" placeholder="别名">';
		columnHtml += '<a class="bg_bj_b">添加</a>';
		columnHtml += '</div></div></div></div>';
		$(this).parent().before(columnHtml);
		gdt("#a4","#b4","#c4","#d4");

	});
});

function alert_size(){$(".bg-0").css({"width":$(window).width()-200+"px","height":$(window).height()-110+"px"});};




function proHtml(tit,text,dateNum){
	var promptBox = '';
	promptBox += '<div class="bj_c" typeDate="'+dateNum+'">';
	promptBox += '<div class="prompt_box wid210">';
	promptBox += '<div class="prompt_tit">'+tit+'</div>';
	promptBox += '<div class="pro_con">';
	promptBox += '<div class="pro_text">'+text+'</div>';
	promptBox += '<div class="post_but"><a class="bg_bj_b pro_determine">确定</a><a class="bg_999 pro_cancel">取消</a></div>';
	promptBox += '</div></div></div>';
	return promptBox;
};



(function(){
	// 删除二级导航
	$(document).on("click",".del_line",function(){
		line_obj = $(this).parents(".sec_level");
		$(".bg-0").append(proHtml("警告","确定要删除吗？",0));
		$( ".prompt_box" ).draggable({ handle: ".prompt_tit",containment: ".bj_c", scroll: false });
	});
	// 删除一级导航
	$(document).on("click",".del_first",function(){
		line_obj = $(this).parents(".nav_mod");
		$(".bg-0").append(proHtml("警告","确定要删除整个一级目录吗？",0));
		$( ".prompt_box" ).draggable({ handle: ".prompt_tit",containment: ".bj_c", scroll: false });
	});
	// 域删除
	$(document).on("click",".lay_del",function(){
		line_obj = $(this).parents(".field_wra");
		$(".bg-0").show().append(proHtml("警告","确定要删除域吗？",2));
		$( ".prompt_box" ).draggable({ handle: ".prompt_tit",containment: ".bj_c", scroll: false });
	});
	$(document).on("click",".pro_determine",function(){
		var bj_cType = $(this).parents(".bj_c").attr("typedate");
		if(bj_cType == 0)
		{
			line_obj.remove();
			$(".bj_c").remove();
		}
		else if (bj_cType == 1)
		{
			alert(1);
		}
		else if (bj_cType == 2)
		{
			line_obj.remove();
			$(".bj_c").remove();
			$(".bg-0").hide();
		}
	});
	$(document).on("click",".pro_cancel",function(){
		$(".bj_c").remove();
	});

	$(document).on("click",".addTo",function(){
		var navName = $(this).siblings(".select").children("p").text();
		var alias = $(this).siblings("input").val();
		var addTo_sec = '';
		addTo_sec += '<div class="sec_level twomenu">';
		addTo_sec += '<div class="choice">';
		addTo_sec += '<div class="select wid110">';
		addTo_sec += '<p>'+navName+'<i class="fa fa-caret-down"></i></p>';
		addTo_sec += '</div>';
		addTo_sec += '<input placeholder="别名" type="text" value='+alias+'>';
		addTo_sec += '<a class="bg_283c50 del_line">删除</a>';
		addTo_sec += '</div></div>';
		$(this).parents(".sec_level").before(addTo_sec);
		// 初始化
		$(this).siblings(".select").children("p").html("-- 请选择 --<i class='fa fa-caret-down'></i>");
		$(this).siblings("input").val("");
	});

	// 一级导航位置调整
	$(document).on("click",".down_line",function(){
		var paentHtml = $(this).parents(".nav_mod");
		var thisHtml = paentHtml.html();
		var nextHtml = paentHtml.next().html();
		if(paentHtml.next().hasClass("add_column") == false)
		{
			paentHtml.html(nextHtml);
			paentHtml.next().html(thisHtml);
		}
		// 重新加载拖拽JS
		$( ".sec_all" ).sortable({items:".sec_level:not(.state-disabled)"});
	});
	$(document).on("click",".up_line",function(){
		var paentHtml = $(this).parents(".nav_mod");
		var thisHtml = paentHtml.html();
		var prevtHtml = paentHtml.prev().html();
		if(paentHtml.index() != 1)
		{
			paentHtml.html(prevtHtml);
			paentHtml.prev().html(thisHtml);
		}
		// 重新加载拖拽JS
		$( ".sec_all" ).sortable({items:".sec_level:not(.state-disabled)"});
	});
	$(document).on("keyup",".choice input",function(){
		$(this).attr("value",$(this).val());
	});
	// 关闭顶部导航
	$(document).on("click",".post_cancel",function(){
		$(this).parents(".alert_set,.bg-0").hide();
	});
	// tab
	$(document).on("click",".tab_name p",function(){
		$(this).addClass("on").siblings().removeClass("on");
	});

	$(document).on("click",".nav_set_but a",function(){
		$(".bg-0,.al_1").show();
	});

	// 方案
	$(document).on("click",".name_edi p a",function(){
		$(this).parent()
			.hide()
			.siblings(".name_input").show()
			.children("input").focus();
		$(this).parents("tr").addClass("bg_d0e9ff");
	});
	$(document).on("click",".name_input .b_2",function(){
		$(this).parents(".name_input")
			.hide()
			.siblings("p").show();
		$(this).parents("tr")
			.removeClass("bg_d0e9ff");	
	});
	$(document).on("click",".del_scheme",function(){
		line_obj = $(this).parents("tr");
		$(".bg-0").append(proHtml("警告","确定要删除这条方案吗？",0));
		$( ".prompt_box" ).draggable({ handle: ".prompt_tit",containment: ".bj_c", scroll: false });
	});
	$(document).on("click",".load_sch",function(){
		$(".bg-0").append(proHtml("载入提示","载入后会覆盖当前方案<br />是否确定载入？",1));
		$( ".prompt_box" ).draggable({ handle: ".prompt_tit",containment: ".bj_c", scroll: false });
	});
	// 弹出方案
	$(".saveScheme_but").on("click",function(){
		$(".bg-0,.al_2").show();
		$(".sea_tab1").addClass("on").siblings("p").removeClass("on");
		$(".new_programme").focus();
	});
	$(".loadingScheme_but").on("click",function(){
		$(".bg-0,.al_2").show();
		$(".sea_tab2").addClass("on").siblings("p").removeClass("on");
	});

	// 通用自定义下拉框
	$(document).on("click",".select_down > p",function(e){
		$(this).siblings("ol").slideToggle();
		e.stopPropagation();
	});
	$(document).on("click",".select_down ol li",function(){
		var this_text = $(this).text();
		$(this).parent().siblings("p").html(this_text+'<i class="fa fa-caret-down"></i>');
		$(this).parent().siblings("input").val(this_text);
		$(this).parent().slideUp();
	});
	// logo设置按钮
	$(document).on("click",".logo_set_but",function(e){
		$(".right_number_0").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		e.stopPropagation();
	});
	$(document).on("click",".right_alert",function(e){
		$(".select_down ol").slideUp();
		e.stopPropagation();
	});
	$(document).on('click',".pub_mask",function(){
		if($(".bg-1").length < 1)
		{
			$(".content").append("<div class='bg-1'></div>");
		}
		$(this).parents(".top_show").eq(0).addClass("zIndex14");
	});
	// 公司名称设置按钮
	$(document).on("click",".name_set_but",function(e){
		$(".right_number_1").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		e.stopPropagation();
	});
	// 设置抬头按钮
	$(document).on("click",".set_rise",function(e){
		$(".right_number_2").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		e.stopPropagation();
	});
	// 顶部设置按钮
	$(document).on("click",".top_set",function(e){
		$(".right_number_5").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		e.stopPropagation();
	});
	// 底部设置按钮
	$(document).on("click",".bottom_set",function(e){
		$(".right_number_3").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		e.stopPropagation();
	});
	// 首页轮播图设置按钮
	$(document).on("click",".imgSet",function(e){
		$(".right_number_6").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		e.stopPropagation();
	});
}());




$(".typesetting_alert").on("click",function(){
	var this_idname = $(this).attr("idname");
	$("[typesetting='0']").removeClass("active");
	$(this_idname+"[typesetting='0']").addClass("active");
});

$("#b6 .typesetting_alert").on("click",function(){
	$(".bg-0,.al_3").show();
});



// 属性编辑
function set(obj1,obj2){
	$(document).on("click",".select_down ol li",function(){
		var has_num = $(this).parents(".operation_panel");
		if(has_num.hasClass(obj1))
		{
			if($(this).parent().siblings("input").val() == "宽屏")
			{
				$(obj2).css("width","100%");
			}
			else
			{
				$(obj2).css("width","980px");
			}
		}
	});
};
function width(obj1,obj2){
	$(".widthCustom").keyup(function(){
		var has_num = $(this).parents(".operation_panel");
		if(has_num.hasClass(obj1))
		{
			var width = $(this).val();
			$(obj2).width(width);
		}
	});
};
function height(obj1,obj2){
	$(".modify_height").keyup(function(){
		var has_num = $(this).parents(".operation_panel");
		if(has_num.hasClass(obj1))
		{
			var height = $(this).val();
			$(obj2).height(height);
		}
	});
};
function marBottom(obj1,obj2){
	$(".modify_marBot").keyup(function(){
		var has_num = $(this).parents(".operation_panel");

		if(has_num.hasClass(obj1))
		{
			var bottom = $(this).val();
			$(obj2).css("margin-bottom",bottom+"px");
		}
	});
};
function marTop(obj1,obj2){
	$(".modify_marTop").keyup(function(){
		var has_num = $(this).parents(".operation_panel");

		if(has_num.hasClass(obj1))
		{
			var top = $(this).val();
			$(obj2).css("margin-top",top+"px");
		}
	});
};
set("right_number_5",".topBack");
set("right_number_2",".logoname");
set("right_number_3",".foot");
set("right_number_6",".fullSlide");


height("right_number_5",".topBack");
height("right_number_2",".logoname");
height("right_number_3",".foot");
height("right_number_0",".logo");
height("right_number_6",".fullSlide");
width("right_number_0",".logo");


marBottom("right_number_5",".topLab");
marBottom("right_number_2",".logo_line");
marBottom("right_number_6",".full");
marTop("right_number_3",".footer");
marTop("right_number_6",".full");

function Attribute (color,width,height,marBottom,doesShow,widthSize,backgroundImages,marTop){
	this.color = color;
	this.width = width;
	this.height = height;
	this.marBottom = marBottom;
	this.doesShow = doesShow;
	this.backgroundImages = backgroundImages;
	this.widthSize = widthSize;
	this.marTop = marTop;
}
function Logojson(imgSrc,width,height,doesShow){
	this.imgSrc = imgSrc;
	this.width = width;
	this.height = height;
	this.doesShow = doesShow;
}
function Titlejson(color,textarea,fontSize,fontFamily,doesShow){
	this.color = color;
	this.textarea = textarea;
	this.fontSize = fontSize;
	this.fontFamily = fontFamily;
	this.doesShow = doesShow;
}

$(document).on("click",".preservation_but a",function(){
	var color = $(this).parent().siblings().find(".change_color p input").val();
	var width = $(this).parent().siblings().find(".select_down input").val();
	var height = $(this).parent().siblings().find(".modify_height").val(); 
	var marBottom = $(this).parent().siblings().find(".modify_marBot").val(); 
	var doesShow = $(this).parent().siblings().find(".doesShow").val();
	var backgroundImages = "";
	var marTop = $(this).parent().siblings().find(".modify_marTop").val();
	var imgSrc = $(this).parent().siblings().find(".upImg_show img").attr("src");
	var widthCustom = $(this).parent().siblings().find(".widthCustom").val();
	var textarea = $(this).parent().siblings().find("textarea").val();
	var fontSize = $(this).parent().siblings().find(".font_size").val();
	var fontFamily = $(this).parent().siblings().find(".font_family").val();
	var widthSize = "窄屏";
	if(width == "窄屏")
	{
		width = "980px";
		widthSize = "窄屏";
	}
	else
	{
		width = "100%";
		widthSize = "宽屏";
	};
	if(doesShow == "是")
	{
		doesShow = [true,"是"];
	}
	else
	{
		doesShow = [false,"否"];
	};

	var checkedBox = $(".location_sele a input:checked").parent().index();
	if (checkedBox == 0)
	{
		backgroundPosition = "top center"
	}else if (checkedBox == 1)
	{
		backgroundPosition = "center center"
	}else if (checkedBox == 2)
	{
		backgroundPosition = "bottom center"
	}


	var topData = new Attribute(color,width,height,marBottom,doesShow,widthSize,backgroundImages,marTop);
	var logoData = new Logojson(imgSrc,widthCustom,height,doesShow);
	var titlejson = new Titlejson(color,textarea,fontSize,fontFamily,doesShow);
	var slidejson = new Slidejson(color,width,height,marTop,marBottom,doesShow,widthSize,backgroundImages,backgroundPosition);
	var json;
	if($(this).parents(".operation_panel").hasClass("right_number_2"))
	{
       json={"isocId":1,"bannerjson":JSON.stringify(topData)}
	}
	else if($(this).parents(".operation_panel").hasClass("right_number_5"))
	{
	   json={"isocId":1,"topjson":JSON.stringify(topData)}
	}
	else if($(this).parents(".operation_panel").hasClass("right_number_3"))
	{
	   json={"isocId":1,"footjson":JSON.stringify(topData)}
	}
	else if($(this).parents(".operation_panel").hasClass("right_number_0"))
	{
	   json={"isocId":1,"logojson":JSON.stringify(logoData)}
	}
	else if($(this).parents(".operation_panel").hasClass("right_number_1"))
	{
	   json={"isocId":1,"titlejson":JSON.stringify(titlejson)}
	}
	else if($(this).parents(".operation_panel").hasClass("right_number_6"))
	{
	   json={"isocId":1,"slidejson":JSON.stringify(slidejson)}
	}
	
	$.ajax({
		type:"post",
		url:"http://www.daweiyuan.cn/br-isoc/drag/savejson",
		data:json,
		dataType: "json",
		success:function(e){
			if(e.code == 0)
			{
				$(".save_information").fadeIn(function(){
					setTimeout(function(){
						$(".save_information").fadeOut();
					},3000);
				});
			}
			else
			{
				alert("提交失败");
			}
		},error:function(e){
			alert("提交失败222");
		}
	});
	var thisObj = $(this);
	$(this).parents(".right_alert").animate({
		"right":"-220"
	},500,function(){
		thisObj.parents(".operation_panel").css("display","none");
	});

	$(".bg-1").remove();
	$(".zIndex14").removeClass("zIndex14");
});



function Nav(name,alias,show,sec){
	this.name = name;
	this.alias = alias;
	this.show = show;
	this.sec = sec;
};

function Navjson(){
	this.nav_line = [];
	this.speDet = {};
};



$(document).on("click",".column_but",function(){
	var navline = $(this).parent().siblings(".form_n1").find(".nav_mod");
	// var navjson = {"nav_line":[]};
	var navjson = new Navjson();
	$(document).find(".navMove").html("");
	navline.each(function(){
		var thisObj = $(this);
		var name = thisObj.children(".first_level").find(".select p").text();
		var alias = thisObj.find(".alias_name").val();
		var show = thisObj.find(".checked_0").is(":checked");
		var sec = [];
		if(name == "")
		{
			name = "首页";
			alias = "首页";
			show = false;
		}
		else
		{
			if (alias == "")
			{
				alias = name;
			}
		}

		navjson.nav_line.push(new Nav(name,alias,show,sec));
		thisObj.find(".twomenu").each(function(){
			twomenu_name = $(this).find(".select p").text();
			twomenu_alias = $(this).find("input").val();
			sec.push({"twomenu_name":twomenu_name,"twomenu_alias":twomenu_alias});
			// navjson.nav_line	
		});	
		var navShow = navjson.nav_line[thisObj.index()].show;
		var navAlias = navjson.nav_line[thisObj.index()].alias;

		if(navShow == false)
		{
			$(".navMove").append("<li><a class='nav_text_color' style='color:#fff'>"+navAlias+"</a></li>");
		}
	});
	$(this).parents(".alert_set,.bg-0").hide();

	//导航规格
	var width = "";
	var height = $("#navHeight").val();
	var marTop = $("#navmarTop").val();
	var marBottom = $("#navmarBottom").val();
	if($(".top_set_r label input:checked").parent().index() == 0)
	{
		width = ["980px","普通"];
	}
	else
	{
		width = ["100%","全屏"];
	};
	navjson.speDet = {"width":width,"height":height,"marTop":marTop,"marBottom":marBottom};

	$.ajax({
		type:"post",
		url:"http://www.daweiyuan.cn/br-isoc/drag/savejson",
		data:{"isocId":1,"navjson":JSON.stringify(navjson)},
		dataType: "json",
		success:function(e){
			if(e.code == 0)
			{
				$(".save_information").fadeIn(function(){
					setTimeout(function(){
						$(".save_information").fadeOut();
					},3000);
				});
			}
		},
		error:function(e){
			alert("提交失败");
		}
	});
});


function Commonjson(){
	var logoTop = $(".logo").css("top");
	var logoLeft = $(".logo").css("left");
	var titleTop = $(".association_name").css("top");
	var titleLeft = $(".association_name").css("left");
	var mainColor = $("#mainColor").val();
	var deputyColor = $("#deputyColor").val();
	var columnColor = $("#columnColor").val();
	var textColor = $("#textColor").val();
	var backgroundColor = $("#backgroundColor").val();
	var backgroundImg = $("#backgroundImg").val();
	var backgroundPosition = ""
	var backgroundRepeat = "";

	// 背景图片定位
	var checkedBox = $(".location_sele a input:checked").parent().index();
	if (checkedBox == 0)
	{
		backgroundPosition = "top center"
	}else if (checkedBox == 1)
	{
		backgroundPosition = "center center"
	}else if (checkedBox == 2)
	{
		backgroundPosition = "bottom center"
	}
	var repVal = $(".repeat input").val();
	if (repVal == "不重复")
	{
		backgroundRepeat = "no-repeat";
	}else if (repVal == "水平方向重复")
	{
		backgroundRepeat = "repeat-x";
	}else if (repVal == "垂直方向重复")
	{
		backgroundRepeat = "repeat-y";
	}else
	{
		backgroundRepeat = "";
	}

	// logo和title定位
	this.logoPosition = {"top":logoTop,"left":logoLeft};
	this.titlePosition = {"top":titleTop,"left":titleLeft};
	// 主体颜色设置
	this.pageColor = {
		"mainColor":mainColor,
		"deputyColor":deputyColor,
		"columnColor":columnColor,
		"textColor":textColor,
		"backgroundColor":backgroundColor,
		"backgroundImg":backgroundImg,
		"backgroundRepeat":backgroundRepeat,
		"backgroundPosition":backgroundPosition
	};
};
$(".main_vice ul li label").on("click",function(){
	var frontview = $(this).attr("frontview");
	var backgroundcolor = $(this).attr("backgroundcolor");
	var thisInput = $(this).children("input");
	if(thisInput.is(":checked"))
	{
		$("#mainColor,#columnColor").val(frontview);
		$("#deputyColor").val(backgroundcolor);

	}
});
$(document).on("click",".release",function(){
	$.ajax({
		type:"post",
		url:"http://www.daweiyuan.cn/br-isoc/drag/savejson",
		data:{"isocId":1,"commonjson":JSON.stringify(new Commonjson())},
		dateType:"json",
		success:function(e){
			if(e.code == 0)
			{
				$(".save_information").fadeIn(function(){
					setTimeout(function(){
						$(".save_information").fadeOut();
					},3000);
				});
			}
			else
			{
				alert("提交失败");
			}
		}
	});
});



// 导航规格json
$(document).on("click",".speDet",function(){
	var navjson = new Navjson();

	$.ajax({
		type:"post",
		url:"http://www.daweiyuan.cn/br-isoc/drag/savejson",
		data:{"isocId":1,"navjson":JSON.stringify(navjson)},
		typeDate:"json",
		success:function(e){
			if(e.code == 0)
			{
				$(".save_information").fadeIn(function(){
					setTimeout(function(){
						$(".save_information").fadeOut();
					},3000);
				});
			}
			else
			{
				alert("提交失败");
			}
		}
	});
});

$(document).on("click",".top_set_r input[type='radio']",function(){
	if($(this).is(":checked"))
	{
		if($(this).parent().index() == 0)
		{
			$(".nav_top").css("width","980px");
		}
		else
		{
			$(".nav_top").css("width","100%");
		}
	}
});


function Slidejson(color,width,height,marTop,marBottom,doesShow,widthSize,backgroundImages,backgroundPosition){
	this.color = color;
	this.width = width;
	this.height = height;
	this.marTop = marTop;
	this.marBottom = marBottom;
	this.doesShow = doesShow;
	this.widthSize = widthSize;
	this.backgroundImages = backgroundImages;
	this.backgroundPosition = backgroundPosition;
};

// 导航条实时监控
(function(){
	$("#navHeight").keyup(function(){
		$(".nav_top").css("height",$(this).val()+"px");
	});
	$("#navmarTop").keyup(function(){
		$(".nav_line").css("margin-top",$(this).val()+"px");
	});
	$("#navmarBottom").keyup(function(){
		$(".nav_line").css("margin-bottom",$(this).val()+"px");
	});

	$(document).on("click",".tit_qd",function(){
		var list_box = $(this).parents(".mod_edi_but").siblings(".list_box");
		var input = $(this).siblings("input").val();
		if(list_box.attr("data-single") == "0")
		{
			list_box.children(".list_hd").text(input);
			$(this).siblings("input").val(input);
		}
		else if(list_box.attr("data-single") == "1")
		{
			list_box.children(".hd_ul").children("li").eq(navIndex).text(input);
		}
		$(this).parent().slideUp();
	});
	// 模块设置
	$(document).on("click",".modular_set",function(e){
		$(".right_number_4").show();
		$(".right_alert").animate({
			"right":"100px"
		});
		$(this).parents(".mod_edi_but").siblings(".list_box").addClass("addLm");
		e.stopPropagation();
	});
	// 选择模块数量限制
	$(document).on("click",".mod_line input",function(){
		var input_length = $(".mod_line input:checked").length;
		if(input_length>=3)
		{
			$(".mod_line input").not(":checked").attr("disabled",true);
		}
		else
		{
			$(".mod_line input").not(":checked").removeAttr("disabled");
		}
	});
	// 选择模块提交事件
	$(document).on("click",".mod_but a",function(){
		var mod_length = $(".mod_line input:checked").length;
		var checkedId = $(".mod_line input:checked").attr("data-inputid");
		if(mod_length == 1)
		{
			$(".addLm").parent().parent().load("/page"+checkedId);
		}
	});
	$(document).on("click",".newHtml",function(){
		$(this).addClass("addLm");
	});
	// 风格设置
	$(document).on("click",".set_style",function(){

	});
}());

// 模块选择数据接口请求
// $(function(){

// 	$.ajax({
// 		type:"get",
// 		dataType:"json",
// 		url:"http://www.daweiyuan.cn/br-isoc/drag/getcolumns?isocId=1",
// 		success:function(e){
// 			var sec_lm = "";
// 			for(var i=0; i<e.data.length; i++)
// 			{
// 				var parentId = e.data[i].columnDTO.parentId; //获取parentId
// 				var id = e.data[i].columnDTO.id; //获取id
// 				var columnName = e.data[i].columnDTO.columnName
// 				var addHtml = "";
				
// 				if(parentId == 0)
// 				{
// 					addHtml+='<div class="mod_line">';
// 					addHtml+='<dl>';
// 					addHtml+='<dt><label><input type="checkbox"><i></i>'+columnName+'</label></dt>';
// 					addHtml+='</dl>';
// 					addHtml+='</div>';
// 					$(".mod_all").append(addHtml);
// 				}
// 				else
// 				{
// 					sec_lm+='<dd><label><input type="checkbox"><i></i>'+columnName+'</label></dd>';
					
// 				};
// 			};
// 			$(".mod_line").eq(3).children("dl").append(sec_lm);
// 			gdt("#a8","#b8","#c8","#d8");
// 		}
// 	});

// });