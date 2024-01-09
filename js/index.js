// 이미지 슬라이드
$(document).ready(function(){
    
    $(".main").hover(function(){
        $(".sub li,.band").stop().slideDown();
    }, function(){
        $(".sub li,.band").stop().slideUp();
    });

    var i = 4;
    setInterval(function(){
        i--;
        if(i==3)$(".slide img").css({left:"0"});
        $(".slide img").eq(i).animate({left:"1200px"},500);
        if(i==1)i=4;
    },2000);

});