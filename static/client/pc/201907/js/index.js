//整体
var s_all = new Swiper('.swiper_all', {
	loop: false, //设置不循环
	direction: 'vertical', //竖版
	slidesPerView: 'auto',
	mousewheelControl: true, //开启鼠标切换
	resistanceRatio: 0,
	onlyExternal : true,
	preventClicks: false, //默认true
});
//首页效果
//猫尾巴
$('.tail').on('click',function(){
	if($('.bg1').hasClass('open')){
		$('.bg1_close').fadeIn(200);
		$('.bg1_open').fadeOut(200);
		$('.bg1').removeClass('open');
	}
	else{
		$('.bg1_open').fadeIn(200);
		$('.bg1_close').fadeOut(200);
		$('.bg1').addClass('open');
	}
});
//点击信件
$('.btn_mail').on('click',function(){
	$('.mask_mail').fadeIn();
});
//关闭信件
$('.mail_close').on('click',function(){
	$('.mask_mail').fadeOut();
});
//首页视频
$('.btn_video').on('click',function(){
	$('.mask_video').fadeIn();
	bgm_first.pause();
	document.getElementById('video').play();
});
$(".mask_video").on("click",function(e){
	e.stopPropagation();
    $('.mask_video').fadeOut();
    document.getElementById('video').pause();  
    if($('.first_music').hasClass('first_musica')){
		bgm_first.play();
	}
});
$("#video").on("click",function(e){
	e.stopPropagation();
});
//首页音频
var bgm_first = document.getElementById('musicAudio');	
$('.first_music').on('click',function(){
	if($(this).hasClass('first_musica')){
		$(this).removeClass('ani first_musica');
		bgm_first.pause();
	}
	else{
		$(this).addClass('ani first_musica');
		bgm_first.play();
	}
});
//跳转
//跳转人物介绍
$('.person1,.person4,.person5').on('click',function(){
	if($('.first_music').hasClass('first_musica')){
		bgm_first.pause();
	}
});
$('.person1').on('click',function(){
	$('.bg3').removeClass('hide');
	$('.bg1').addClass('hide');
	$('.mask_pop').css('z-index','2000');
});
$('.person4').on('click',function(){
	$('.bg2').removeClass('hide');
	$('.bg1').addClass('hide');
});
$('.person5').on('click',function(){
	$('.bg4').removeClass('hide');
	$('.bg1').addClass('hide');
});
//返回首页
$('.return_back').on('click',function(){
	$('.bg1').removeClass('hide');
	$('.bg2,.bg3,.bg4').addClass('hide');
	if($('.first_music').hasClass('first_musica')){
		bgm_first.play();
	}
});
$('.bg2 .return_back').on('click',function(){
	bgm.pause();
	$('.music_stop').removeClass('hide');
	$('.music_play').addClass('hide');
});
$('.bg3 .return_back').on('click',function(){
	$('.mask_pop').css('z-index','0');
});
$('.bg4 .return_back').on('click',function(){
	document.getElementById('video_p4').pause();
});
//人物介绍
var m=1;
$('.sp1_left,.sp_last').on('click',function(){
	var l,r;
	l = m - 1,
	r = m + 1;
	if(l==0){
		m = 6;
		l = m - 1;
		r = 1;
	}
	else if(l==1){
		m --;
		l = 6;
		r--;
	}
	else{
		m--;
		l--;
		r--;
	}
	move(l,m,r);
});
$('.sp1_right,.sp_next').on('click',function(){
	var l,r;
	l = m - 1,
	r = m + 1;
	if(r==6){
		m = 6;
		l = m - 1;
		r = 1;
	}
	else if(r==2){
		m=2;
		l = 1;
		r++;
	}
	else if(r==7){
		m=1;
		l++;
		r=2;
	}
	else{
		m++;
		l++;
		r++;
	}
	move(l,m,r);
});
function move(l,m,r){
	$('.per_cont').eq(m-1).fadeIn().siblings().fadeOut();
	$('.sp1_middle').removeClass('btn_p1a btn_p2a btn_p3a btn_p4a btn_p5a btn_p6a').addClass('btn_p' + m + 'a');
	$('.sp1_left').removeClass('btn_p1 btn_p2 btn_p3 btn_p4 btn_p5 btn_p6').addClass('btn_p' + l);
	$('.sp1_right').removeClass('btn_p1 btn_p2 btn_p3 btn_p4 btn_p5 btn_p6').addClass('btn_p' + r);
	bgm.pause();
	$('.music_stop').removeClass('hide');
	$('.music_play').addClass('hide');
}
//音乐
var bgm =document.getElementById('music');
bgm.addEventListener('ended', function () {  
    bgm.pause();
    $('.music_stop').removeClass('hide');
	$('.music_play').addClass('hide');
}, false);
var music=[
	['static/client/mobile/201907/images/p11.mp3','static/client/mobile/201907/images/p12.mp3','static/client/mobile/201907/images/p13.mp3','static/client/mobile/201907/images/p14.mp3','static/client/mobile/201907/images/p15.mp3'],
	['static/client/mobile/201907/images/p21.mp3?v=20190924','static/client/mobile/201907/images/p22.mp3?v=20190924','static/client/mobile/201907/images/p23.mp3?v=20190924','static/client/mobile/201907/images/p24.mp3?v=20190924','static/client/mobile/201907/images/p25.mp3?v=20190924'],
	['static/client/mobile/201907/images/p31.mp3','static/client/mobile/201907/images/p32.mp3','static/client/mobile/201907/images/p33.mp3'],
	['static/client/mobile/201907/images/p41.mp3?v=20190924','static/client/mobile/201907/images/p42.mp3?v=20190924','static/client/mobile/201907/images/p43.mp3?v=20190924'],
	['static/client/mobile/201907/images/p51.mp3','static/client/mobile/201907/images/p52.mp3','static/client/mobile/201907/images/p53.mp3']
];
$('.music_stop').on('click',function(){
	var index=$(this).parent('.music_box').attr('num'),
		num=music_num[index],
		bgm_src=music[index][num];
	bgm.src=bgm_src;
	bgm.play();
	$('.music_stop').addClass('hide');
	$('.music_play').removeClass('hide');
});
$('.music_play').on('click',function(){
	bgm.pause();
	$('.music_stop').removeClass('hide');
	$('.music_play').addClass('hide');
});
var music_num=[0,0,0,0,0]
$('.music_last').on('click',function(){
	var index=$(this).parent('.music_box').attr('num'),
		num=music_num[index]-1,
		len=music[index].length;
	if(num<0){
		num=len-1;
	}
	music_num[index]=num;
	var bgm_src=music[index][num];
	bgm.src=bgm_src;
	bgm.play();
	$('.music_stop').addClass('hide');
	$('.music_play').removeClass('hide');
});
$('.music_next').on('click',function(){
	var index=$(this).parent('.music_box').attr('num'),
		num=music_num[index]+1,
		len=music[index].length;
	if(num==len){
		num=0;
	}
	music_num[index]=num;
	var bgm_src=music[index][num];
	bgm.src=bgm_src;
	bgm.play();
	$('.music_stop').addClass('hide');
	$('.music_play').removeClass('hide');
});
//壁纸
var click1,click2,num=1,num2=1,pic_num;
var doujin=['static/client/pc/201907/images/picture/doujin1_b.jpg','static/client/pc/201907/images/picture/doujin2_b.jpg','static/client/pc/201907/images/picture/doujin3_b.jpg','static/client/pc/201907/images/picture/doujin4_b.jpg','static/client/pc/201907/images/picture/doujin5_b.jpg','static/client/pc/201907/images/picture/doujin6_b.jpg']
var wall={'big':['static/client/pc/201907/images/picture/wall11_b.jpg','static/client/pc/201907/images/picture/wall1_b.jpg','static/client/pc/201907/images/picture/wall2_b.jpg','static/client/pc/201907/images/picture/wall3_b.jpg','static/client/pc/201907/images/picture/wall4_b.jpg','static/client/pc/201907/images/picture/wall5_b.jpg','static/client/pc/201907/images/picture/wall6_b.jpg','static/client/pc/201907/images/picture/wall7_b.jpg'
,'static/client/pc/201907/images/picture/wall8_b.jpg','static/client/pc/201907/images/picture/wall9_b.jpg','static/client/pc/201907/images/picture/wall10_b.jpg','static/client/pc/201907/images/picture/wall12_b.jpg','static/client/pc/201907/images/picture/wall13_b.jpg','static/client/pc/201907/images/picture/wall14_b.jpg','static/client/pc/201907/images/picture/wall15_b.jpg'
,'static/client/pc/201907/images/picture/wall16_b.jpg','static/client/pc/201907/images/picture/wall17_b.jpg','static/client/pc/201907/images/picture/wall18_b.jpg','static/client/pc/201907/images/picture/wall19_b.jpg','static/client/pc/201907/images/picture/wall20_b.jpg','static/client/pc/201907/images/picture/wall21_b.jpg','static/client/pc/201907/images/picture/wall22_b.jpg'],
'small':['static/client/pc/201907/images/picture/wall11.jpg','static/client/pc/201907/images/picture/wall1.jpg','static/client/pc/201907/images/picture/wall2.jpg','static/client/pc/201907/images/picture/wall3.jpg','static/client/pc/201907/images/picture/wall4.jpg','static/client/pc/201907/images/picture/wall5.jpg','static/client/pc/201907/images/picture/wall6.jpg','static/client/pc/201907/images/picture/wall7.jpg',
'static/client/pc/201907/images/picture/wall8.jpg','static/client/pc/201907/images/picture/wall9.jpg','static/client/pc/201907/images/picture/wall10.jpg','static/client/pc/201907/images/picture/wall12.jpg','static/client/pc/201907/images/picture/wall13.jpg','static/client/pc/201907/images/picture/wall14.jpg','static/client/pc/201907/images/picture/wall15.jpg'
,'static/client/pc/201907/images/picture/wall16.jpg','static/client/pc/201907/images/picture/wall17.jpg','static/client/pc/201907/images/picture/wall18.jpg','static/client/pc/201907/images/picture/wall19.jpg','static/client/pc/201907/images/picture/wall20.jpg','static/client/pc/201907/images/picture/wall21.jpg','static/client/pc/201907/images/picture/wall22.jpg']};
//初始大图序列
var big_pic=[];
$('.btn_wall').on('click',click1=function(){
	$('.btn_wall').off('click',click1).css('cursor','initial');
	$('.btn_doujin').off('click',click2).css('cursor','initial');
	var start=(num2-1)*4,end=start+4;
	big_pic=wall.big.slice(start,end);
	if($('.role').hasClass('role3')){
		$('.mask_pop,.pop_wall').fadeIn();
		$('.btn_wall').on('click',click1).css('cursor','pointer');
		$('.btn_doujin').on('click',click2).css('cursor','pointer');
		return false;
	}
	var left=parseInt($('.role').css('left'));
	var time = (left+80)/(1020/2500);
	var t1=time+200;
	var t2=time/1000+'s';
	$('.role2').addClass('appear').removeClass('role4');
	$('.role').removeClass('role1 role3 role5 move2').addClass('move');
	$('.role').css("transition","left "+t2+" linear");
	setTimeout(function(){
		$('.role2').removeClass('appear');
		$('.role').removeClass('move').addClass('role3');
	},time);
	setTimeout(function(){
		$('.mask_pop,.pop_wall').fadeIn();
		$('.btn_wall').on('click',click1).css('cursor','pointer');
		$('.btn_doujin').on('click',click2).css('cursor','pointer');
	},t1);
});
$('.pop_close ').on('click',function(){
	$('.mask_pop,.pop_wall,.pop_doujin').fadeOut();
});
$('.btn_doujin').on('click',click2=function(){
	$('.btn_wall').off('click',click1).css('cursor','initial');
	$('.btn_doujin').off('click',click2).css('cursor','initial');
	big_pic=doujin;
	if($('.role').hasClass('role5')){
		$('.mask_pop,.pop_doujin').fadeIn();
		$('.btn_wall').on('click',click1).css('cursor','pointer');
		$('.btn_doujin').on('click',click2).css('cursor','pointer');
		return false;
	}
	var left = parseInt($('.role').css('left')),
		time =(940-left)/(1020/2500),
		t1=time+200,
		t2=time/1000+'s';
	$('.role2').addClass('appear role4');
	$('.role').removeClass('role1 role3 role5 move').addClass('move2');
	$('.role').css("transition", "left "+t2+" linear");
	setTimeout(function() {
		$('.role2').removeClass('appear');
		$('.role').removeClass('move2').addClass('role5');
	}, time);
	setTimeout(function() {
		$('.mask_pop,.pop_doujin').fadeIn();
		$('.btn_wall').on('click',click1).css('cursor','pointer');
		$('.btn_doujin').on('click',click2).css('cursor','pointer');
	}, t1);
});
//下一页
//壁纸
$('.pop_wall .page_right').on('click',function(){
	if(num2>=6){
		return false;
	}
	num2++;
	wall_pic();
});
$('.pop_wall .page_left').on('click',function(){
	if(num2<=1){
		return false;
	}
	num2--;
	wall_pic();
});
function wall_pic(){
	$('.pic2').empty();
	var picture="";
	$('.pop_wall .page_num').html(num2+'/6');
	var start=(num2-1)*4,end=start+4,page_route=wall.small.slice(start,end);
	big_pic=wall.big.slice(start,end);
	for(var i=0;i<page_route.length;i++){
		picture += "<div class='box_wall'><i class='wall_circle2 pa'></i><img src='" + page_route[i] + " 'class='img_wall'/><i class='wall_circle pa'></i></div>";
	}
	$('.pic2').append(picture);
	$('.box_wall').on('click',wall_click);
}
//同人
//$('.pop_doujin .page_right').on('click',function(){
//	num++;
////	big_pic=doujin.big.slice(start,end);
//	for(var i=0;i<6;i++){
//		$('.img_doujin').eq(i).attr('src',page_route[i]);
//	}
//});
//$('.pop_doujin .page_left').on('click',function(){
//	if(num<=1){
//		return false;
//	}
//	num--;
//	$('.pop_doujin .page_num').html(num+'/4');
//	var page_route=['static/client/pc/201907/images/try1.png','static/client/pc/201907/images/try1.png','static/client/pc/201907/images/try1.png','static/client/pc/201907/images/try1.png','static/client/pc/201907/images/try1.png','static/client/pc/201907/images/try.png'];
//	var start=(num-1)*6,end=start+6,page_route=doujin.small.slice(start,end);
//	big_pic=doujin.small.slice(start,end);
//	for(var i=0;i<6;i++){
//		$('.img_doujin').eq(i).attr('src',page_route[i]);
//	}
//});
//点击出大图
//壁纸
$('.box_wall').on('click',wall_click);
function wall_click(){
	pic_num=$('.box_wall').index(this);
    var	pic_src=big_pic[pic_num];
	$('.pic_big').attr('src',pic_src);
	$('.pop_in').fadeIn();
	display_btn();
}
//同人作品点击
$('.box_doujin').on('click',function(){
	pic_num=$('.box_doujin').index(this);
    var	pic_src=big_pic[pic_num];
	$('.pic_big').attr('src',pic_src);
	$('.pop_in').fadeIn();
	display_btn();
});
function display_btn(){
	$('.big_next').removeClass('hide');
	$('.big_last').removeClass('hide');
	if(pic_num==big_pic.length-1){
		$('.big_next').addClass('hide');
	}
	else if(pic_num==0){
		$('.big_last').addClass('hide');
	}
}
$('.big_next').on('click',function(){
	$('.big_last').removeClass('hide');
	pic_num++;
    var	pic_src=big_pic[pic_num];
	$('.pic_big').attr('src',pic_src);
	if(pic_num==big_pic.length-1){
		$('.big_next').addClass('hide');
	}
});
$('.big_last').on('click',function(){
	$('.big_next').removeClass('hide');
	pic_num--;
    var	pic_src=big_pic[pic_num];
	$('.pic_big').attr('src',pic_src);
	if(pic_num==0){
		$('.big_last').addClass('hide');
	}
});
$('.pop_in').on('click',function(e){
	e.stopPropagation();
	$('.pop_in').fadeOut();
});
$('.pop_pic').on('click',function(e){
	e.stopPropagation();
});
//预约
//$('.btn_gw').on('click',function(){
//	$(window).phone_login({
//		url          :'//activity.leiting.com/doll/common/common.php?act=sendPhoneCode&type=1',
//		id           :'activity',
//		game_type    :'doll',
//		show_choose  :true,
//		callback_url :'/home/appoint',
//		callback     :function(data){
//			$('.LT_Login').remove();
//			$('#LT_phone_login_css').remove();
//			$('#LT_getCode').empty().text('获取验证码').removeClass('hui');
////			alert('预约成功！');
//			$('.mask_share ').fadeIn();
//		}
//	});
//});
//联系
$('.person3').on('click',function(){
	$('.kf_mask').fadeIn();
	$('.warp').addClass('dim');
});
$('.kf_mask').on('click',function(e){
	e.stopPropagation();
	$('.warp').removeClass('dim');
	$('.kf_mask').fadeOut();
});
$('.pop_kf').on('click',function(e){
	e.stopPropagation();
});
//分享
//$('.mask_share ').on('click',function(e){
//	e.stopPropagation();
//	$('.mask_share ').fadeOut();
//});
//$('.paper ').on('click',function(e){
//	e.stopPropagation();
//});
//视频帘子
$('.curtain_button ').on('click',function(){
	$('.curtain_left ').addClass('left');
	$('.curtain_right ').addClass('right');
	$('.video_bg,#video_p4').removeClass('hide');
	$('.curtain_button').addClass('hide');
});