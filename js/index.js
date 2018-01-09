$(function(){
	mySwiper1 = new Swiper('#swiper1', {
		speed: 400, 
		direction: 'vertical',
		longSwipesRatio : 0.1,
		shortSwipes : true,
	});

	var index = 0,
		next = 1,
		home = $('.slide4 .apartment .home'),
		visualW = $('.slide4 .apartment').width(),
		homeW = home.width(),
		len = home.length,
		distance = homeW - visualW,
		moveT = 4000, 
		oTime = 1500;
	
	function homeShow () {
		index++;
		next++;
		if (index === len) {
			index = 0;
		};	
		if (next === len) {
			next = 0;
		};
		home.removeClass('cur next').css({"left": 0});
		home.eq(index).css({'left': -distance}).addClass('cur');
		home.eq(next).addClass('next');
	};

	home.eq(0).css({'left': -distance}).addClass('cur');
	home.eq(1).addClass('next');
	setInterval(homeShow, 4500);

	function autoScroll(){
        var speed = 50;
        var showWrap = $("#showWrap"), 
            show = $("#showList");
        if(show.html() !== "") {
            var html2 = "<ul>" + show.html() + "</ul>";
            showWrap.find("ul").eq(0).siblings().remove();
            showWrap.append(html2);
        }
        var sTop = 0;
        var scrollFun = function() {
            if(showWrap.scrollTop() < $("#showList").height()) {
                sTop ++;
                showWrap.scrollTop(sTop);
            } else {
                showWrap.scrollTop(0);
                sTop = 0;
            }
        }
        setInterval(scrollFun,speed);     
    };

    autoScroll();

	// 用户提示相关
	var toast = $('#toast');
	function tip(toast_note){
        toast.show();
        toast.text(toast_note);
        setTimeout(function(){
            toast.hide()
        },2000);
    }

	function supportHandle() {
		var nickname,headimgurl,city,sex;
		var idea = $('.advice textarea').val();
		if (idea.trim().length == 0) { return tip('请输入有效信息') };
		var str = '<li>'+ idea +'</li>';
		$('#showList').prepend(str);
		$('.advice textarea').val('');
		tip('您已提交成功！');
	/*	$.ajax({
			type: 'post',
			url: '/zhaixi/idea',
			data: {
				nickname: nickname,
				headimgurl: headimgurl,
				city: city,
				sex: sex,
				idea:idea
			},
			dataType: 'json',
			success: function(data) {
				if (data.success) {
					console.log(data);
					console.log('提交成功');
				} 
			}
		})
		$.ajax({
			type: 'post',
			url: '/show/idea',
			data: {},
			dataType: 'json',
			success: function(data) {
				if (data.success) {
					var info = data.info;
					info.forEach(function(v, i){
						var src = '<li>'+ v.idea +'<li>';
						$('#idea_box').prepend(src);
					})
					console.log('获取数据成功');
				} 
			}
		})*/
	};

	var support = $('.support');
	// support.on('click', supportHandle);

})