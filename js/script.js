jQuery(document).ready(function(){

	//언어선택 tab
	$('.lang li').click(function(){
		var i = $(this).index();

		$('.lang li').removeClass('on');
		$(this).addClass('on');
		$(this).parent().next().children('li').removeClass('on');
		$(this).parent().next().children('li').eq(i).addClass('on');

	});
	// search box 검색버튼
	$(".search_box .search button").click(function() {
		var k = $.trim($('.search_box input').val());
		var f = $(".search_list p:contains('" + k + "')").parents('.search_list').size();
		var inner = $(".search_list_wrap .inner");
		var none = $(".search_list_wrap .none");
		if (k == "") { 
			inner.hide();
			none.show();
		} else if (f === 0) { 
			inner.hide();
			none.show();
		} else {
			none.hide();
			inner.show();
			$(".search_list_wrap .search_list").hide();
			$(".search_list p:contains('" + k + "')").parents('.search_list').show();
		}
	});
	// search box enter key
	$(".search_box .search input").keydown(function(key) {
		if (key.keyCode == 13) {
			var k = $.trim($('.search_box input').val());
			var f = $(".search_list p:contains('" + k + "')").parents('.search_list').size();
			var inner = $(".search_list_wrap .inner");
			var none = $(".search_list_wrap .none");

			if (k == "") { 
				inner.hide();
				none.show();
			} else if (f === 0) { 
				inner.hide();
				none.show();
			} else {
				none.hide();
				inner.show();
				$(".search_list_wrap .search_list").hide();
				$(".search_list p:contains('" + k + "')").parents('.search_list').show();
			}
		}
	});

});

