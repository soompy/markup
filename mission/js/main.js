$(function(){
	initmain();
})

function initmain() {
    tooltip();
    sector();
    work();
    nextBtn();
    tip();
    mtooltip();
}

function tooltip(){
    $(".sector li a").hover(function(e){
        $(this).next().show();
    },function(e){
        $(this).next().hide();
    })
}

function sector(){
    var cnt = 0;
    $(".modeling-sector li").removeClass("on");
    $(".subject").hide();
    
    $(".modeling-sector li").on("click",function(e){
        cnt = $(this).index();
        $(".modeling-sector li").removeClass("on");
        $(this).addClass("on");
        $(".subject").hide();
        $(".subject").eq(cnt).show();
    })
   
}

function work(){
    $(".work li").removeClass("on");
    $(".work li").on("click",function(e){
        $(".work li").removeClass("on");
        $(this).addClass("on");
    })
}

function nextBtn(){
    $(".next img").hide().first().fadeIn();
    $(".next").hover(function(e){
        $(".next img").eq(0).hide();
        $(".next img").eq(1).fadeIn();
    },function(e){
         $(".next img").eq(1).hide();
         $(".next img").eq(0).fadeIn();
    })
}

function tip(){
    $(".tip-page").hide();
    var isplay = false;
    $(".tip a").on("click",function(e){
        if(!isplay){
            $(".tip-page").show();
            $(this).find("img").attr("src","img/icon-arrow-up-brand.png")
        }else{
            $(".tip-page").hide();
            $(this).find("img").attr("src","img/icon-arrow-down-brand.png")
        }
        isplay = !isplay;
    })
}

function mtooltip(){
    $(".modeling-sector img").on("click",function(e){
        $(".modeling-sector img").attr("src","img/icon-tooltip-basic.png");
        $(this).attr("src","img/icon-tooltip-selected.png");
        $(this).next().show();
    }) 
}

