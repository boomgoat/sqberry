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
    $(".title, .title2, .line2, .prodDev").fadeToggle(1200);
    $(".navi").fadeToggle(1600);
    $(".line").removeClass("slideLeft");
    $(".line").toggleClass("slideRight");
    $(".menu").click(function(){
      $(".line").toggleClass("slideLeft");
    });
  });
  $('.wrapper-menu').click(function(){
      $('.wrapper-menu').toggleClass('open');
    $('.wrapper-menu').removeClass('reverse');
    $('.wrapper-menu').toggleClass('rotate');
    $('.wrapper-menu').click(function(){
        $('.wrapper-menu').toggleClass('reverse');
    });
  });
  
  var mq = window.matchMedia( "(min-width: 786px)" );
  if(mq.matches){
    var audio = document.getElementById("myaudio");
    audio.volume = 0.1;
  $(".design, #close").click(function(){
    $("#design").fadeToggle(500);
    $("#develop, #innovate, #consult").fadeOut(500); 
  });
  $(".develop, #close").click(function(){
    $(" #develop").fadeToggle(500);
    $("#design, #innovate, #consult").fadeOut(500); 
  });

  $(".innovate, #close").click(function(){
    $(" #innovate").fadeToggle(500); 
    $("#develop, #design, #consult").fadeOut(500); 
  });
  $(".consult, #close").click(function(){
    $(" #consult").fadeToggle(500); 
    $("#develop, #innovate, #design").fadeOut(500); 
  });

  $(".play").click(function(){
    document.getElementById("myaudio").muted = true;
    $(".play").hide();
    window.stop();
    $(".mute").show();
  });

  $(".mute").click(function(){
    document.getElementById("myaudio").muted = false;
    $(".mute").hide();
    $(".play").show();
  });
  $(".labels").click(function(){
    $(".jumbotron").addClass("animate");
  });
  $("#close").click(function(){
    $(".#close,line3").hide();
  });
  $(".jumbotron").click(function(){
    $(".logo").fadeOut(600);
    $(".jumbotron").removeClass("reverse-animate");
    $(".jumbotron").toggleClass("animate");
    $(".jumbotron").click(function(){
      $(".jumbotron").toggleClass("reverse-animate");
      $("#design, #develop, #innovate, #design").fadeOut();
      $(".logo").fadeIn(600);
    });

  });
  $(".jumbotron").on(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function() {
            $(".jumbotron").removeClass("reverse-animate");
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
