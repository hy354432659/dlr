var bg1 = document.createElement('audio');
	bg1.src = 'music/bg1.mp3'
	bg1.loop = false;
	bg1.autoplay = false;
	bg1.pause();

var bg2 = document.createElement('audio');
	bg2.src = 'music/bg2.mp3'
	bg2.loop = true;
	bg2.autoplay = false;
	bg2.pause();

var box2_rotate = document.createElement('audio');
	box2_rotate.src = 'music/box2_rotate.mp3'
	box2_rotate.loop = true;
	box2_rotate.autoplay = false;
	box2_rotate.pause();

var box3_rocket = document.createElement('audio');
	box3_rocket.src = 'music/box3_rocket.mp3'
	box3_rocket.loop = true;
	box3_rocket.autoplay = false;
	box3_rocket.pause();

var box4_cow = document.createElement('audio');
	box4_cow.src = 'music/box4_cow.mp3'
	box4_cow.loop = true;
	box4_cow.autoplay = false;
	box4_cow.pause();

var box5_com = document.createElement('audio');
	box5_com.src = 'music/box5_com.mp3'
	box5_com.loop = false;
	box5_com.autoplay = false;
	box5_com.pause();

var box5_milk = document.createElement('audio');
	box5_milk.src = 'music/box5_milk.mp3'
	box5_milk.loop = false;
	box5_milk.autoplay = false;
	box5_milk.pause();

var box6_rise = document.createElement('audio');
	box6_rise.src = 'music/box6_rise.mp3'
	box6_rise.loop = false;
	box6_rise.autoplay = false;
	box6_rise.pause();

var isTouch = "ontouchend" in document ? true : false,
	evStart = isTouch ? 'touchstart' : 'mousedown',
	evMove = isTouch ? 'touchmove' : 'mousemove',
	evEnd = isTouch ? 'touchend' : 'mouseup',
	wW = $(window).width(),
	wH = $(window).height(),
	bag1 = null,
	bag2 = null,
	bIncode = true,
	bAjaxCode = true,
	bLottery = false,
	music = !isAndroid() && isWeiXin() ? true : false,
	rulePoint = {
		x:0,
		y:0,
		offX:0,
		offY:0,
		move: false,
		top: 0,
		min: 0, 
		max: -parseInt($('.rule_text').height() - (614+(wH-1028)))
	},
	animtaionEnd = [
		'webkitAnimationEnd',
		'mozAnimationEnd',
		'MSAnimationEnd',
		'oanimationend',
		'animationend'
	].join(' '),
	animationIteration = [
		'webkitAnimationIteration',
		'mozAnimationIteration',
		'MSAnimationIteration',
		'oAnimationIteration',
		'animationIteration'
	].join(' '),
	supportOrientation = (typeof window.orientation === 'number' && typeof window.onorientationchange === 'object'),
	T = false;

$(function(){
	if(wH<980) {
		$('.result1,.result2').css({
			'-webkit-transform': 'scale('+wH/980+')',
			'transform': 'scale('+wH/980+')'
		});
	}

	$('.comm_box_middle').css('height', wH-657+'px');
	$('.cover_line').css('height', wH-820+'px');
	$('.trans').css('height', wH-29-78+'px');
	$('.box1_fps').css('height', 429+(wH-1028)+'px');
	$('.box2_fps').css('height', 514+(wH-1028)+'px');
	$('.box3_fps1').css('height', 638+(wH-1028)+'px');
	$('.box3_fps2_shake').css('height', 338+(wH-1028)+'px');
	$('.box4_fps1').css('height', 439+(wH-1028)+'px');
	$('.box5_fps').css('height', 526+(wH-1028)+'px');
	$('.box6_fps').css('height', 507+(wH-1028)+'px');
	$('.rule_box').css('height', 614+(wH-1028)+'px');

	$('.load_fps').one(animtaionEnd, function(){
		$(this).addClass('load_loop');
	});

	$('.box6_fps_1').one(animtaionEnd, function(){
		$(this).addClass('box6_fps1_2');
	});

	$('.box6_text1_fps').one(animtaionEnd, function(){
		$(this).addClass('box6_text1_fps_loop');
	});

	$('.res_load1').one(animtaionEnd, function(){
		$(this).addClass('res_load1_fps_loop');
	});

	$('.res_load2').one(animtaionEnd, function(){
		$(this).addClass('res_load2_fps_loop');
	});

	$('.false_btn').on(evStart, function(){
		if($('.box1').is(':visible')) {
			Trans.play(1);
		}
		else if($('.box2').is(':visible')) {
			Trans.play(2);
			box2_rotate.pause();
			box2_rotate.currentTime = 0;
			// bg1.volume = 1;
			// bg2.volume = 1;
		}
		else if($('.box3').is(':visible')) {
			Trans.play(3);
			box3_rocket.pause();
			box3_rocket.currentTime = 0;
			// bg1.volume = 1;
			// bg2.volume = 1;
		}
		else if($('.box4').is(':visible')) {
			Trans.play(4);
			box4_cow.pause();
			box4_cow.currentTime = 0;
			// bg1.volume = 1;
			// bg2.volume = 1;
		}
		else if($('.box5').is(':visible')) {
			Trans.play(5);
			box5_milk.pause();
			box5_milk.currentTime = 0;
			box5_com.pause();
			box5_com.currentTime = 0;
			// bg1.volume = 1;
			// bg2.volume = 1;
		}
		else if($('.box6').is(':visible')) {
			Trans.into(6);
			box6_rise.pause();
			box6_rise.currentTime = 0;
			// bg1.volume = 1;
			// bg2.volume = 1;
		}
	});

	$('.result1_inp1').on('focus', function(){
		if($(this).val()=='手机') {
			$(this).val('');
		}
	}).on('blur', function(){
		if($(this).val()=='') {
			$(this).val('手机');
		}
	});

	$('.result1_inp2').on('focus', function(){
		if($(this).val()=='图形验证码') {
			$(this).val('');
		}
	}).on('blur', function(){
		if($(this).val()=='') {
			$(this).val('图形验证码');
		}
	});

	$('.result1_inp3').on('focus', function(){
		if($(this).val()=='短信验证码') {
			$(this).val('');
		}
	}).on('blur', function(){
		if($(this).val()=='') {
			$(this).val('短信验证码');
		}
	});

	$('.result1_code').on('click', function(){
		$(this).attr('src', 'http://dlrb-jxmc.mengniu.com.cn/index.php?control=Api&action=getImgCode&time='+Math.random());
	});

	$('.get_code').on(evStart, function(){
		var phone = $.trim($('.result1_inp1').val());
		var code = $.trim($('.result1_inp2').val());
		if(bIncode) {
			if(phone.isPhone() && code!='') {
				var url = 'http://dlrb-jxmc.mengniu.com.cn/index.php?control=Api&action=sendVerifyCode';
				var data = {phone: phone, code: code};
				Ajax.fnAjax(url, data, Ajax.snsCode);
				bIncode = false;
				Ajax.setCount();
			} else {
				if(!phone.isPhone()) {
					alert('请检查填写的手机号码');
				}
				if(code=='') {
					alert('请填写图形验证码');
				}
			}
		}
	});

	$('.result1_sub').on(evStart, function(){
		var phone = $.trim($('.result1_inp1').val());
		var code = $.trim($('.result1_inp2').val());
		var snscode = $.trim($('.result1_inp3').val());
		if(phone.isPhone() && code!='' && snscode!='' && !$('.result1_agree').hasClass('result1_agree_un')) {
			var url = 'http://dlrb-jxmc.mengniu.com.cn/index.php?control=Api&action=checkPhone';
			var data = {phone: phone, verifyCode: snscode};
			Ajax.fnAjax(url, data, Ajax.checkForm);
			$('.result_load').css('display', 'block');
			$('.result1').css('display', 'none');
		} else {
			if(!phone.isPhone()) {
				alert('请检查填写的手机号码');
			}
			if(code=='') {
				alert('请填写图形验证码');
			}
			if(snscode=='') {
				alert('请填写短信验证码');
			}
			if($('.result1_agree').hasClass('result1_agree_un')) {
				alert('请阅读并同意活动规则');
			}
		}
	});

	// 活动规则
	$('.result1_btn2').on(evStart, function(){
		$('.rule_text').css({top:'0px'});
		$('.rule').fadeIn(500);
		$('.result1').fadeOut(500);
	});

	$('.result2_slide1_btn1').on(evStart, function(){
		$('.rule_text').css({top:'-1900px'});
		$('.rule').fadeIn(500);
		$('.result2').fadeOut(500);
	});

	$('.result2_slide2_btn1').on(evStart, function(){
		$('.rule_text').css({top:'-2670px'});
		$('.rule').fadeIn(500);
		$('.result2').fadeOut(500);
	});

	$('.result2_slide3_btn1').on(evStart, function(){
		$('.rule_text').css({top:'-1200px'});
		$('.rule').fadeIn(500);
		$('.result2').fadeOut(500);
	});

	$('.rule_close').on(evStart, function(){
		if(bLottery) {
			$('.rule').fadeOut(500);
			$('.result2').fadeIn(500);
		} else {
			$('.rule').fadeOut(500);
			$('.result1').fadeIn(500);
		}
	});

	// 分享
	$('.result1_btn1').on(evStart, function(){
		if(isWeiXin()) {
			$('.fx_div').fadeIn(500);
		} else {
			shareSINA();
		}
	});

	$('.fx_div').on(evStart, function(){
		$(this).fadeOut(500);
	});

	$('.result2_slide1_btn2').on(evStart, function(){
	});

	$('.result2_slide3_btn2').on(evStart, function(){
	});

	

	$('.result2_slide2_btn2').on(evStart, function(){
		window.location.href='http://detail.koudaitong.com/show/goods?alias=2x7sc9pjchze8&v2/goods/2x7sc9pjchze8';
	});

	$('.result2_slide2_btn3').on(evStart, function(){
		window.location.href='http://detail.koudaitong.com/show/goods?alias=278tusv54lkzk&v2/goods/278tusv54lkzk';
	});

	$('.result2_slide1_btn2,.result2_slide3_btn2').on(evStart, function(){
		window.location.href='http://detail.koudaitong.com/show/goods?alias=3ngj61hdc1ym8&v2/goods/3ngj61hdc1ym8';
	});

	$('.result1_agree').on(evStart, function(){
		$('.rule_text').css({top:'0px'});
		$('.rule').fadeIn(500);
		$('.result1').fadeOut(500);
	});

	bg1.addEventListener('ended', function(){
		// bg.currentTime = 4.3;
		bg2.play();
		bg2.volume = 0.1;
	}, false);


	$(document).one(evStart, function(){
		if(!music) {
			bg2.play();
		}
	});

	$('.rule_text').on(evStart, function(e){
		var point = e.originalEvent.touches[0];
		rulePoint.y = point.clientY;
		rulePoint.top = parseInt($(this).css('top'));
		rulePoint.move = true;
	});

	$('.rule_text').on(evMove, function(e){
		if(rulePoint.move) {
			var point = e.originalEvent.touches[0];
			rulePoint.offY = parseInt(point.clientY - rulePoint.y);
			var move = rulePoint.top + rulePoint.offY;
			if(rulePoint.offY>0) {
				if(rulePoint.top<=0) {
					$('.rule_text').css({top: move+'px'});
				}
			} else if(rulePoint.offY<0) {
				if(rulePoint.top>=rulePoint.max) {
					$('.rule_text').css({top: move+'px'});
				}
			}
		}
	});

	$('.rule_text').on(evEnd, function(){
		if(parseInt($(this).css('top'))>0) {
			$(this).css({top:'0px'});
		}
		if(parseInt($(this).css('top'))<rulePoint.max) {
			$(this).css({top: rulePoint.max+'px'});
		}
		rulePoint.move = false;
		rulePoint.y = 0;
		rulePoint.offY = 0;
	});
});

(function loadImg(){
	var preload = new createjs.LoadQueue(false);
	// preload.installPlugin(createjs.Sound);
	// createjs.Sound.alternateExtensions = ["mp3"];

	preload.on("progress", handleProgress);
	preload.on("complete", handleComplete);
	preload.loadManifest(manifest);
})();

function handleProgress(event) {
	var i = Math.round(event.loaded*100);
	if(i>=(1/manifest.length)*100) {
		$('.load_fps').css('display', 'block').addClass('load_fps1');
	}

	i = i.toString();
	if(i=='100') i = '99';
	var a = i.split('');
	if(a.length==1) {
		$('.load_c:eq(2)').removeClass('load_0 load_1 load_2 load_3 load_4 load_5 load_6 load_7 load_8 load_9').addClass('load_'+a[0]);
	} else if(a.length==2) {
		$('.load_c:eq(1)').removeClass('load_0 load_1 load_2 load_3 load_4 load_5 load_6 load_7 load_8 load_9').addClass('load_'+a[0]);
		$('.load_c:eq(2)').removeClass('load_0 load_1 load_2 load_3 load_4 load_5 load_6 load_7 load_8 load_9').addClass('load_'+a[1]);
	}
}

function handleComplete() {
	$('.load').fadeOut(500, function(){
		$('.common,.comm_icon,.cover').css('display', 'block');
		Trans.play(0);
		if(music) {
			bg1.play();
		}
	});

	slientLoad();

	$('.result1_code').trigger('click');
}

var Trans = (function trans(){
	var	FPS = 1000/8,
		bPlay = true,
		view = ['lTo1', '1To2', '2To3', '3To4', '4To5', '5To6', '6ToR'],
		date = new Date(),
		day = date.getDate(),
		mon = Number(date.getMonth())+1;

	function play(v) {
		var i = 0,
			index = view[v],
			length = $('.'+index+'>img').length;

		$('.trans,.'+index+'>img:eq(0)').css('display', 'block');

		bPlay = false;
		$('.false_btn').css('display', 'none');
		$('.comm_btn_fps').css('display', 'none').removeClass('comm_btn_ani2');
		v!=0 ? $('.comm_btn2').css('display', 'block') : null;

		setTimeout(function transLoop() {
			i++
			if(i<length) {
				$('.'+index+'>img').eq(i-1).css('display','none').end().eq(i).css('display','block');
				setTimeout(transLoop, FPS);
			} else {
				v!=6 ? stop(v) : null;
			}
		}, FPS);
	}

	function stop(v) {
		$('.trans,.trans>div>img').css('display', 'none');

		if(v==0) {
			bPlay = true;
			$('.comm_btn').delay(300).fadeIn(800, btnPlay);
		} else {
			setTimeout(function(){
				bPlay = true;
				btnPlay();
			}, 5500);
			$('.box'+v).css('display', 'none');
		}

		$('.box'+(v+1)).css('display', 'block');

		$('.box'+(v+1)+'_text_fps').one(animtaionEnd, function(){
			$(this).addClass('box'+(v+1)+'_text_fps_loop');
			switch(v)
			{
				case 1:
					bg1.volume = 0.2;
					bg2.volume = 0.2;
					music ? box2_rotate.play() : null;
					$('.box2_fps1').addClass('box2_fps1_key');
					$('.box2_fps2').addClass('box2_fps2_key');
					break;
				case 2:
					bg1.volume = 0.2;
					bg2.volume = 0.2;
					music ? box3_rocket.play() : null;
					$('.box3_fps2').addClass('box3_fps2_key');
					$('.box3_fps1_1').addClass('box3_fps1_1_key');
					$('.box3_fps2_1').addClass('box3_fps2_1_key');
					break;
				case 3:
					bg1.volume = 0.2;
					bg2.volume = 0.2;
					music ? box4_cow.play() : null;
					$('.box4_fps1_1').addClass('box4_fps1_1_key');
					$('.box4_fps2').addClass('box4_fps2_key');
					break;
				case 4:
					bg1.volume = 0.2;
					bg2.volume = 0.2;
					music ? box5_milk.play() : null;
					music ? box5_com.play() : null;
					$('.box5_fps_1').addClass('box5_fps_1_key');
					break;
				case 5:
					bg1.volume = 0.2;
					bg2.volume = 0.2;
					music ? box6_rise.play() : null;
					$('.box6_fps_1').addClass('box6_fps1_1');
					$('.box6_text2').fadeIn(500, function(){
						$('.box6_text1_fps').css('display', 'block').addClass('box6_text1_fps_forw');
					});
					break;
				default:
					break;
			}
		});
	}

	function btnPlay() {
		$('.false_btn').css('display', 'block');
		function a() {
			if(bPlay) {
				$('.comm_btn2').css('display', 'none');
				$('.comm_btn_fps').css('display', 'block').addClass('comm_btn_ani2').one(animationIteration, function(){
					$('.comm_btn_fps').fadeOut(700, function(){
						$(this).removeClass('comm_btn_ani2');
						setTimeout(a, 2500);
					});
					$('.comm_btn2').css('display', 'block');
				});
			}
		}

		setTimeout(a, 500);
	}

	function into(v) {
		play(v);
		$('.comm_btn,.comm_btn_fps').remove();
		$('.false_btn,.trans,.comm_icon,.comm_box_top,.comm_box_middle,.comm_box_bottom,.box6').delay(300).fadeOut(300);
		
		// if(mon>=7 && day>15) {
		$('.finish').delay(300).fadeIn(300, function(){
			$('.comm_btn,.comm_btn_fps,.false_btn,.trans,.comm_icon,.box1,.box2,.box3,.box4,.box5,.box6').empty().remove();
		});
		// } else {
		// 	$('.result1').delay(300).fadeIn(300, function(){
		// 		$('.comm_btn,.comm_btn_fps,.false_btn,.trans,.comm_icon,.box1,.box2,.box3,.box4,.box5,.box6').empty().remove();
		// 		$('.result1_code').trigger('click');
		// 		var slider = Swipe(document.getElementById('slider'), {
		// 			auto: 3000,
		// 			continuous: true,
		// 			disableScroll: true,
		// 			stopPropagation: true,
		// 			callback: function(index, ele){
		// 				$('.res_active').removeClass('res_active');
		// 				$('.result1_raido>li').eq(index).addClass('res_active');
		// 			}
		// 		});
		// 	});
		// }
	}

	return {
		play: play,
		into: into
	};
})();

var Ajax = (function(){

	function fnAjax(u, d, fn) {
		$.ajax({
			url: u,
			type: 'POST',
			dataType: 'json',
			data: d,
			success: function(result) {
				console.log(result);
				fn(result);
			}
		});
	}

	function setCount() {
		var tot = 60;
		$('.get_code').html('60s');

		function cD() {
			if(!bAjaxCode) {
				tot--;
				$('.get_code').html(tot+'s');

				if(tot>0) {
					setTimeout(cD, 1000);
				} else {
					$('.get_code').html('获取验证码');
					bIncode = true;
				}
			} else {
				$('.get_code').html('获取验证码');
				bIncode = true;
			}
		}
		setTimeout(cD, 1000);
	}

	function snsCode(r) {
		if(r.state==1) {
			bAjaxCode = false;
		} else if(r.state==0) {
			bAjaxCode = true;
			alert('图形验证码不正确');
			$('.result1_code').trigger('click');
		} else {
			bAjaxCode = true;
			alert('远程通讯正受到电磁干扰，请重新填写');
			$('.result1_code').trigger('click');
		}
	}

	function checkForm(r) {
		if(r.state==200) {
			lottery();
			SaveUniClickUser();
		} else {
			alert('远程通讯正受到电磁干扰，请重新填写');
			$('.result_load').css('display', 'none');
			$('.result1').css('display', 'block');
		}
	}

	function lottery() {
		var url='http://dlrb-jxmc.mengniu.com.cn/index.php?control=Api&action=lottery';
		var data = {};
		fnAjax(url, data, lotteryResult);
	}

	function lotteryResult(r) {
		if(r.state==200) {
			bLottery = true;
			if(r.data.prizeid == 1) {
				$('.result2_3').css('display', 'block');
			} else if(r.data.prizeid == 2) {
				$('.result2_1').css('display', 'block');
			} else if(r.data.prizeid == 3) {
				$('.result2_2').css('display', 'block');
			}

			$('.result_load').css('display', 'none');
			$('.result2').css('display', 'block');
		} else if(r.state==201) {
			alert('远程通讯正受到电磁干扰，请重新填写');
			$('.result_load').css('display', 'none');
			$('.result1').css('display', 'block');
		} else if(r.state==202) {
			alert('每个手机号只能领取一次奖品');
			$('.result_load').css('display', 'none');
			$('.result1').css('display', 'block');
		} else {
			alert('远程通讯正受到电磁干扰，请重新填写');
			$('.result_load').css('display', 'none');
			$('.result1').css('display', 'block');
		}
	}

	return {
		fnAjax: fnAjax,
		setCount: setCount,
		snsCode: snsCode,
		checkForm: checkForm
	};
})();

String.prototype.isPhone = function(){
	return /^((1[3578]{1})+\d{9})$/.test(this);
};

document.addEventListener('touchmove',function(event){
	event.stopPropagation();
	event.preventDefault();
	return false;
});

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

function isAndroid() {
	var u = navigator.userAgent;
	return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
}

function shareSINA() {
	var con = encodeURIComponent('继猩猩、狗、人类之后，奶牛也被送上太空了…');
	var add = encodeURIComponent('http://dlrb-jxmc.mengniu.com.cn/?v=8');
	var pic = encodeURIComponent('http://dlrb-jxmc.mengniu.com.cn/images/share.jpg');
	var url = 'http://service.weibo.com/share/share.php?title='+con+'&url='+add+'&pic='+pic;
	window.location.href=url;
}


// 竖屏横屏事件
function init() {
	var orientation;
	var updateOrientation = function(){
		setTimeout(function(){
			if(supportOrientation){
				orientation = window.orientation;
				switch(orientation){
					case 90:
					case -90:
						orientation = 'landscape';
						break;
					default:
						orientation = 'portrait';
						break;
				}
			}else{
				orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
			}

			if(orientation=='portrait') {
				$('.pth').css('display', 'none');
			} else {
				$('.pth').css('display', 'block');
			}
			console.log(orientation);
		}, 0);
	};

	if(supportOrientation){
		window.addEventListener('orientationchange',updateOrientation,false);
	}else{
		window.addEventListener('resize',updateOrientation,false);
	}

	updateOrientation();
}
window.addEventListener('DOMContentLoaded',init,false);


var slient = [
	{src:'images/box3_fps/1.jpg', id:''},
	{src:'images/box3_fps/2.jpg', id:''},
	{src:'images/box3_fps/bg.png', id:''},
	{src:'images/box3_fps/box3_text1.png', id:''},
	{src:'images/box3_fps/box3_text2.png', id:''},
	{src:'images/box3_fps/text.png', id:''},

	{src:'images/box4_fps/1.jpg', id:''},
	{src:'images/box4_fps/2.jpg', id:''},
	{src:'images/box4_fps/bg.jpg', id:''},
	{src:'images/box4_fps/box4_text1.png', id:''},
	{src:'images/box4_fps/box4_text2.png', id:''},
	{src:'images/box4_fps/text.png', id:''},

	{src:'images/box5_fps/1.jpg', id:''},
	{src:'images/box5_fps/bg.jpg', id:''},
	{src:'images/box5_fps/box5_text1.png', id:''},
	{src:'images/box5_fps/box5_text2.png', id:''},
	{src:'images/box5_fps/text.png', id:''},

	{src:'images/box6_fps/1.png', id:''},
	{src:'images/box6_fps/bg.jpg', id:''},
	{src:'images/box6_fps/box6_text1.png', id:''},
	{src:'images/box6_fps/box6_text2.png', id:''},
	{src:'images/box6_fps/text.png', id:''},
	{src:'images/box6_fps/text1.png', id:''},

	{src:'images/result1_agree.png', id:''},
	{src:'images/result1_btn1.png', id:''},
	{src:'images/result1_btn2.png', id:''},
	{src:'images/result1_slide1.png', id:''},
	{src:'images/result1_slide2.png', id:''},
	{src:'images/result1_slide3.png', id:''},
	{src:'images/result1_sub.png', id:''},
	{src:'images/result1_title.png', id:''},
	{src:'images/result2_icon.png', id:''},
	{src:'images/result2_img.png', id:''},
	{src:'images/result2_slide1.png', id:''},
	{src:'images/result2_slide1_btn1.png', id:''},
	{src:'images/result2_slide1_btn2.png', id:''},
	{src:'images/result2_slide2.png', id:''},
	{src:'images/result2_slide2_btn1.png', id:''},
	{src:'images/result2_slide2_btn2.png', id:''},
	{src:'images/result2_slide2_btn3.png', id:''},
	{src:'images/result2_slide3.png', id:''},
	{src:'images/result2_slide3_btn1.png', id:''},
	{src:'images/result2_slide3_btn2.png', id:''},
	{src:'images/result2_title.png', id:''},

	{src:'images/pth.png', id:''},
	{src:'images/result_load1.png', id:''},
	{src:'images/result_load2.png', id:''},
	{src:'images/rule.png', id:''},
	{src:'images/rule_close.png', id:''},
	{src:'images/rule_title.png', id:''}
];

function slientLoad(){
	var preload = new createjs.LoadQueue(false);
	preload.loadManifest(slient);
}