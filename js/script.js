$(document).ready(function(){

  /*   Not Adding any Comments For The Script
       For Help Email: talhaiqbal11@gmail.com   */
  
  $(".mute").hide();
  $(".navi").hide();
  $(".inner").hide();
  $("#close").hide();
  $(".line3").hide();
  $(".title, .prodDev, .line2").hide();

  $(".menu").click(function(){
    $(".title, .title2, .line2, .prodDev").stop().fadeToggle(1200);
    $(".navi").stop().fadeToggle(1600);
    $(".line").stop().removeClass("slideLeft");
    $(".line").stop().toggleClass("slideRight");
    $(".menu").click(function(){
      $(".line").stop().toggleClass("slideLeft");
    });
  });
  $('.wrapper-menu').click(function(){
      $('.wrapper-menu').stop().toggleClass('open');
    $('.wrapper-menu').stop().removeClass('reverse');
    $('.wrapper-menu').stop().toggleClass('rotate');
    $('.wrapper-menu').click(function(){
        $('.wrapper-menu').stop().toggleClass('reverse');
    });
  });
  
  var mq = window.matchMedia( "(min-width: 786px)" );
  if(mq.matches){
    var audio = document.getElementById("myaudio");
    audio.volume = 0.1;
  $(".design, #close").click(function(){
    $("#design").stop().fadeToggle(500);
    $("#develop, #innovate, #consult").stop().fadeOut(500); 
  });
  $(".develop, #close").click(function(){
    $(" #develop").stop().fadeToggle(500);
    $("#design, #innovate, #consult").stop().fadeOut(500); 
  });

  $(".innovate, #close").click(function(){
    $(" #innovate").stop().fadeToggle(500); 
    $("#develop, #design, #consult").stop().fadeOut(500); 
  });
  $(".consult, #close").click(function(){
    $(" #consult").stop().fadeToggle(500); 
    $("#develop, #innovate, #design").stop().fadeOut(500); 
  });

  $(".play").click(function(){
    document.getElementById("myaudio").muted = true;
    $(".play").stop().hide();
    window.stop();
    $(".mute").stop().show();
  });

  $(".mute").click(function(){
    document.getElementById("myaudio").muted = false;
    $(".mute").stop().hide();
    $(".play").stop().show();
  });
  $(".labels").click(function(){
    $(".jumbotron").stop().addClass("animate");
  });
  $("#close").click(function(){
    $(".#close,line3").stop().hide();
  });


  $(".jumbotron").click(function(){


    $(".logo").stop().fadeOut(600);

    $(".jumbotron").stop().removeClass("reverse-animate");

    $(".jumbotron").stop().toggleClass("animate");


    $(".jumbotron").click(function(){
      $(".jumbotron").stop().toggleClass("reverse-animate");
      $("#design, #develop, #innovate, #design").stop().fadeOut();
      $(".logo").stop().fadeIn(600);
    }); 

  });
  $(".jumbotron").on(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function() {
            $(".jumbotron").stop().removeClass("reverse-animate");
        }
    ); }

    var $labels = $(".w, .x, .y, .z");
    var $elements = $(".one, .two, .three, .four")

    $(".one, .two, .three, .four").hide();

function anim_loop(index) {
    $elements.eq(index).fadeIn(4000, function() {
        var $self = $(this);
        setTimeout(function() {
            $self.fadeOut();
            anim_loop((index + 1) % $elements.length);
        }, 3000);
    });
}
anim_loop(0);
});
