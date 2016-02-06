/**
 * Created by zazanik on 05.02.2016.
 */

// попап, единственный скрипт который я стянул из инета под чистую.
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('a#go').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});


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
//carusel
$(document).ready(function(){
    $('#carusel').bxSlider({
        slideWidth: 210,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });
});
//harmony
$(document).ready(function(){
    $(".harmony > ul > li > span ").click(function() {
        $(this).find("~ ul").css("background-color","black").stop().slideToggle("slow");

    });
});

//form
$(document).ready(function(){
    $(".quote-arrow ").click(function() {
        $(".request-cont .quote").stop().slideToggle("slow");

    });
});
//переход

$(document).ready(function(){
    $(".went").on("click","a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"), top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1000);
    });
});


