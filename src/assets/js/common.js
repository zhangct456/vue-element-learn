$(document).ready(function(){
//用户下拉菜单
	$('.user dt').click(function(){
		$(this).siblings('dd').toggleClass('act');
	});
//弹窗
	function pop(btn,box,close){
		var oBtn=$(btn),
			  oBox=$(box),
			  oClose=$(close);
		oBtn.click(function(){
			$('header,.wrap').addClass('blur');
	        $('.mask').show();
	        oBox.addClass('act');
		});
		oClose.click(function(){
			oBox.removeClass('act').addClass('off');
	        $('.mask').hide();
	        $('header,.wrap').removeClass('blur');
			setTimeout(function(){
				oBox.removeClass('off');
			},300);
		});
	};
	pop('.pop','.floatBox','.close');
	//新增供货商弹窗提示
    $('.btnPlus').click(function(){
        $('.c1').addClass('none');
        $('.c2').removeClass('none');
    });
	//图片库选择图片
	$('.pic-list li').click(function(){
        $(this).toggleClass('act');
    });
	//新增仓库选择地区
	$('.overlap dt i').click(function(){
        $(this).toggleClass('act').parent().next('dd').slideToggle('fast');
    });
	//添加品牌
	pop('.btnBrand','.plusBrand','.close1');
	//添加分类
	pop('.class1,.class2','.plusClass','.close1');
	$('.class1').click(function(){
		$('.plusClass h2').text('新增一级分类');
	});
	$('.class2').click(function(){
		$('.plusClass h2').text('新增二级分类');
	});

	$('.btnPic').click(function(){
		$('.picBox').addClass('act');
	});
	$('.close2').click(function(){
		$('.picBox').removeClass('act').addClass('off');
		setTimeout(function(){
			$('.picBox').removeClass('off');
		},300);
	});

//商品分类列表切换
	$('.classify dd').click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});

//编辑文字
    $('.btnEdit').click(function(){
        if($(this).text()=='编辑'){
            $(this).text('保存');
            $(this).parent().siblings('.txt').children('.inpt').each(function(){
                $(this).val($(this).prev().text());
            });
			$(this).parent().siblings('.txt').children('.sel').each(function(){
                $(this).val($(this).prev().text());
            });
            $(this).parent().siblings('.txt').children().toggleClass('none');
        }else{
            $(this).text('编辑');
            $(this).parent().siblings('.txt').children('span').each(function(){
                $(this).text($(this).next().val());
            });
            $(this).parent().siblings('.txt').children().toggleClass('none');
        }
    });
//物流模板选择运送方式
	$('.transport dt label input').change(function(){
		$(this).parent().parent().next().slideToggle('fast');
	});
});
