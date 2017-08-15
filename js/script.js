$(document).ready(function(){

  /*   Not Adding any Comments For The Script
       For Help Email: talhaiqbal11@gmail.com   */
  $('.mute').hide();
  $('.navi').hide();
  $('.title, .prodDev, .line2').hide();

  $('.menu').click(function(){
    $('.navi, .title, .title2, .line2, .prodDev').fadeToggle(600);
    $('.line').removeClass('slideLeft');
    $('.line').toggleClass('slideRight');
    $('.menu').click(function(){
      $('.line').toggleClass('slideLeft');
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

  $('.jumbotron, .labels').click(function(){
    $('.circle2').fadeToggle(1600);
    $('.logo').fadeToggle(1600);
    var size = this.width;
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
    );

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
