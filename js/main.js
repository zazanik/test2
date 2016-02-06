/**
 * Created by zazanik on 05.02.2016.
 */

//hamburger
$( ".hamburger" ).click(function() {
    $( "#navigation" ).addClass("navHamburger");
    $(this).css("visibility","hidden");
    $( ".cross").css("visibility","visible");
});

$( ".cross" ).click(function() {
    $( "#navigation" ).removeClass("navHamburger");
    $(this).css("visibility","hidden");
    $( ".hamburger").css("visibility","visible");
});





// Менюшка що знаходиться в шапцы зліва
$(document).ready(function(){
    $(".h-page nav ul li").hover(
        function(){
            $("ul",this).css("display","block");
        },
        function(){
            $("ul",this).css("display","none");
        }
    );
});

//Флажки перекладыв мов
$(document).ready(function(){
    $(".h-page .headerRightNav .flag-menu").click(
        function(){
            $("ul li",this).find("~li").stop().slideToggle();
        }
    );
});

//bxslider
$(document).ready(function(){
    $('.bxslider').bxSlider();
});

//menu

$(document).ready(function(){
    $(".menu-cont ul li").hover(
        function(){
            $("ul",this).css("display","block");
        },
        function(){
            $("ul",this).css("display","none");
        }
    );
});

//showcase-first-choice
$(document).ready(function(){
    $(".first-goods .showcase-first-choice").click(
        function(){
            $("ul li",this).find("~li").stop().slideToggle();
        }
    );
});
//друга мєнюшка в товарах з розмірами

$(document).ready(function(){
    $(".first-goods .showcase-second-choice").click(
        function(){
            $("ul li",this).find("~li").stop().slideToggle();
        }
    );
});

$(document).ready(function(){
    $('#carusel').bxSlider({
        slideWidth: 210,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });
});


