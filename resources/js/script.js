function searchData(){
	var k = $.trim($('.search_box input').val());
	var f = $(".search_list p:contains('" + k + "')").parents('li').size();
	var inner = $(".search_list .inner");
	var none = $(".search_list .none");
	if (k == "") {
		inner.hide();
		none.show();
	} else if (f === 0) {
		inner.hide();
		none.show();
	} else {
		none.hide();
		inner.show();
		$(".search_list li").hide();
		$(".search_list p:contains('" + k + "')").parents('li').show();
	}
}

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
	$(".search_box .search button").on('click',function(){
		searchData();
	});

	//오디오 플레이
	var targetOld = '';
	var targetNew = '';
	$('.list button').on('click',function(e){
		e.preventDefault();
		var fileNamedep1 = $('.title span').text();
		var fileNamedep2 = $(this).parents('li').find('.list').index($(this).closest('.list')) + 1;
		var fileNamedep3 = $(this).parents('.list').find('dl:not(.no-sound)').index($(this).closest('dl')) + 1;
		console.log(fileNamedep1,fileNamedep2,fileNamedep3);

		targetNew = $('[data-id=0' + fileNamedep1 + '_0' + fileNamedep2 + '_0' + fileNamedep3 +']')[0];
		console.log(targetNew,targetOld);

		if(targetOld !== ''){
			targetOld.pause();
			targetOld.load();
		}

		targetNew.play();
		targetOld = targetNew;
	});

	//검색 - 오디오 플레이
	$('.search_list button').on('click',function(e){
		e.preventDefault();
		var fileNamedep1 = $(this).closest('.group').index() + 1;
		var fileNamedep2 = $(this).closest('ul').index() + 1;
		var fileNamedep3 = $(this).closest('li').index() + 1;
		console.log(fileNamedep1,fileNamedep2,fileNamedep3);

		targetNew = $('[data-id=0' + fileNamedep1 + '_0' + fileNamedep2 + '_0' + fileNamedep3 +']')[0];
		console.log(targetNew,targetOld);

		if(targetOld !== ''){
			targetOld.pause();
			targetOld.load();
		}

		targetNew.play();
		targetOld = targetNew;
	});
});

