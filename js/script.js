$(document).ready(function(){

  /*   Not Adding any Comments For The Script
       For Help Email: talhaiqbal11@gmail.com   */
  $('.mute').hide();
  $('.navi').hide();
  $('.inner').hide();
  $('#close').hide();
  $('.line3').hide();
  $('.title, .prodDev, .line2').hide();

  $('.menu').click(function(){
    $('.title, .title2, .line2, .prodDev').fadeToggle(1200);
    $('.navi').fadeToggle(1600);
    $('.line').removeClass('slideLeft');
    $('.line').toggleClass('slideRight');
    $('.menu').click(function(){
      $('.line').toggleClass('slideLeft');
    });
  });

  $('.design').click(function(){
    $('#close').fadeIn(3200);
    $('.line3').fadeIn(3200);
    $('#design').fadeIn(3200);
    $('#close, .jumbotron').click(function(){
      $('#close').hide();
      $('.line3').hide();
      $('#design').hide();
    });
  });
  $('.develop').click(function(){
    $('#close').fadeIn(3200);
    $('.line3').fadeIn(3200);
    $('#develop').fadeIn(3200);
    $('#close, .jumbotron').click(function(){
      $('#close').hide();
      $('.line3').hide();
      $('#develop').hide();
    });
  });
  $('.innovate').click(function(){
    $('#close').fadeIn(3200);
    $('.line3').fadeIn(3200);
    $('#innovate').fadeIn(3200);
    $('#close,.jumbotron').click(function(){
      $('#close').hide();
      $('.line3').hide();
      $('#innovate').hide();
    });
  });
  $('.consult').click(function(){
    $('#close').fadeIn(3200);
    $('.line3').fadeIn(3200);
    $('#consult').fadeIn(3200);
    $('#close, .jumbotron').click(function(){
      $('#close').hide();
      $('.line3').hide();
      $('#consult').hide();
    });
  });

  $('.play').click(function(){
    document.getElementById('myaudio').muted = true;
    $('.play').hide();
    window.stop();
    $('.mute').show();
  });

  $('.mute').click(function(){
    document.getElementById('myaudio').muted = false;
    $('.mute').hide();
    $('.play').show();
  });
  var mq = window.matchMedia( "(min-width: 786px)" );
  if(mq.matches){
  $('.jumbotron, .labels').click(function(){
    $('.circle2').fadeToggle(1600);
    $('.logo').fadeToggle(1600);
    $('.jumbotron').removeClass('reverse-animate');
    $('.jumbotron').toggleClass('animate');
    $('.jumbotron, .labels').click(function(){
      $('.jumbotron').toggleClass('reverse-animate');
    });

  });
  $(".jumbotron").on(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function() {
            $(".jumbotron").removeClass('reverse-animate');
        }
    ); }

    var $labels = $('.w, .x, .y, .z');
    var $elements = $('.one, .two, .three, .four')

    $('.one, .two, .three, .four').hide();

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
