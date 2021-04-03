//scroll ber js
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.go_top').css({
            "opacity":"1","pointer-events":"auto"
          });
        }else{
          $('.go_top').css({
            "opacity":"0","pointer-events":"none"
          });
        }
    });
    $('.go_top').click(function(){
      $('html').animate({scrollTop:0},300);
    });
  });