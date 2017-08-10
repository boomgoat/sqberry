$(document).ready(function(){

  /*   Not Adding any Comments For The Script
       For Help Email: talhaiqbal11@gmail.com   */

  $('.navi').hide();
  $('.title, .prodDev, .line2').hide();

  $('.menu').click(function(){
    $('.navi, .title, .title2, .line2, .prodDev').fadeToggle(1000);
    $('.line').removeClass('slideLeft');
    $('.line').toggleClass('slideRight');
    $('.menu').click(function(){
      $('.line').toggleClass('slideLeft');
    });
  });

  $('.logo, .labels, .menu, .title').mouseenter(function(){
    $(this).removeClass('leave');
    $(this).addClass('hover');
  });
  $('.logo, .labels, .menu, .title').mouseout(function(){
    $(this).removeClass('hover');
    $(this).addClass('leave');
  });

  $('.jumbotron').click(function(){
    $('.jumbotron').not(this).each(function(){
    $(this).hide();
    });
    var size = this.width;
    $('.jumbotron').removeClass('reverse-animate');
    $('.jumbotron').toggleClass('animate');
    $('.logo').fadeToggle('fast');
    $('.jumbotron').click(function(){
      $('.jumbotron').not(this).each(function(){
      $(this).fadeIn(4100);
      });
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
