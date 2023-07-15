$(document).ready(function(){

    /* 떠오르는 효과 */
    $('.tic').delay(500).queue(function() {
        $(this).addClass('fadeInUp');
    });
    $('.el-fade').each(function(i){
        $(this).addClass('el-fade'+ (i+1));
    })
    // fadeup 효과 배열/함수
    const offset = new Array();
    const fadeCount = $('.el-fade').length;
    $(window).scroll(function(){
        for(i=0; i<fadeCount; i++){
            offset[i] = $(".el-fade"+(i+1)).offset().top - outerHeight*.9;
            win_scroll = $(window).scrollTop();
            if(win_scroll>offset[i]){
                $(".el-fade"+(i+1)).stop().addClass('fadeInUp');
            }
        }
    });
    /* 떠오르는 효과 */

    $('.ham-btn').click(function(){
        $('.ham-wrap').toggleClass('on')
        if(!$('.menu-area').hasClass('open')) {
            $('.menu-area').addClass('open');
            $('.menu-area').removeClass('close');
        } else{
            $('.menu-area').removeClass('open');
            $('.menu-area').addClass('close');
        }
    });

    /* section-1 main event */
    $('.main-top-area').delay(2500).animate({
        opacity: 1
    });
    /* section-1 main event */

    /* section-3 slide animate */    
    $('.slide-btn').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var i = $(this).attr('data-index')
        $('.section-3 .flex-area').fadeOut(1000).eq(i).fadeIn(1000).end()
        $('.slide-btn[data-index !=' + i + ']').removeClass('on');
        $('.slide-btn[data-index =' + i + ']').addClass('on');
    });
    /* section-3 slide animate */


    /* section-4 slide event */
    var i = 0;
    $('.circle-arrow.next').click(function(){
        i++;
        if(i > 7){
            i = 0;
        }
        $('.banner-box-area').animate({
            left: -550
        },function(){
            $('.banner-box-area').css('left',0).find('.banner-box:first').appendTo('.banner-box-area')
        })
    })
    $('.circle-arrow.prev').click(function(){
        i--;
        if(i < 0){
            i = 7;
        }
        $('.banner-box-area').animate({
            left: 0
        },function(){
            $('.banner-box-area').css('left',-550).find('.banner-box:last').prependTo('.banner-box-area')
        })
    });
    /* section-4 slide event */


    /* section-5 slide event */

    var slideLeng = $('.slide-logo-area>li').length;
    // 슬라이드 갯수
    
    var slideWid = $('.slide-logo-area>li').width();
    // 각 슬라이드의 너비
    
    var totWid = slideLeng * slideWid;
    // 움직일 총 슬라이더의 너비
    
    $('.slide-logo-area').width(totWid);
    // 슬라이더 총 너비값이 슬라이드 박스 너비 값이다 
    
    $('.slide-logo-area>li').last().prependTo('.slide-logo-area');
    // 마지막 슬라이드 맨 앞으로 보내고
    
    $('.slide-logo-area').css('marginLeft', -slideWid);

    const logoBoxEl = document.querySelector('.logo-box');
    const leftcssEl = $('.slide-logo-area').css('left',0);

    $('.arrow-btn.next').on('click', function(){
        $('.slide-logo-area').stop().animate({
            'left' : -slideWid
        },function(){
            $('.slide-logo-area').css('left', 0).find('.logo-box').first().appendTo('.slide-logo-area');
            $('.section-5 .slide-text-area').css('opacity',1).find('.slide-text:first').appendTo('.slide-text-area')
        })

        var i = $(slideLeng).index()
        $('.logo-box[data-index !=' + i + ']').removeClass('active');
        $('.logo-box[data-index =' + i + ']').addClass('active');
    })
    
    $('.arrow-btn.prev').on('click',function(){
        $('.slide-logo-area').stop().animate({
            'left' : slideWid
        },function(){

            $('.slide-logo-area').css('left', 0 ).find('.logo-box').last().prependTo('.slide-logo-area');
            $('.section-5 .slide-text-area').css('opacity',1).find('.slide-text:last').prependTo('.slide-text-area')
        })
    })

    /*var n = 0
     $('.arrow-btn.next').click(function(){
        n++;
        if(n > 3){
            n = 0;
        }
        $('.slide-logo-area').stop().animate({
            left: -1066
        },function(){
            $('.slide-logo-area').css('left',0).find('.logo-box').first().appendTo('.slide-logo-area')
            
        })
    });
    $('.arrow-btn.prev').click(function(){
        n--;
        if(n < 0){
            n = 3;
        }
        $('.slide-logo-area').stop().animate({
            left: 1066
        },function(){
            $('.slide-logo-area').css('left',0).find('.logo-box').last().prependTo('.slide-logo-area')
            
        })
    });
    function moving(){
        $('.slide-logo-area').animate({
            left:-1066*i
        })
    } */
    /*$('.arrow-btn.next').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var i = $(this).attr('data-index')
        i++;
        if(i > 4){
            i = 0;
        }
        $('.slide-logo-area').animate({
            left: -1066
        },function(){
            $('.slide-logo-area').css('left',0).find('.logo-box:first').appendTo('.slide-logo-area')
        });
        $('.section-5 .slide-text-area').css('opacity',1).find('.slide-text:first').appendTo('.slide-text-area')
    })
     $('.arrow-btn.prev').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var i = $(this).attr('data-index')
        i--;
        if(i < 0){
            i = 4;
        }
        $('.slide-logo-area').animate({
            left: 0
        },function(){
            $('.slide-logo-area').css('left',-1066).find('.logo-box:last').prependTo('.slide-logo-area')
        });
        $('.section-5 .slide-text-area').css('opacity',1).find('.slide-text:last').prependTo('.slide-text-area')
    }) */

    
    /* section-5 slide event */
    
    
});//ready end