var slideshow = $('.cycle-slideshow');
var slideDuration = (slideshow.attr('data-cycle-timeout') / 1000) + 1;
var slideDurationString = slideDuration + 's';

//alert(slideDuration);
$('.cycle-slideshow > div').css({"transition-duration": slideDurationString});

