/* Custom JS to create the Burns effect by Dave Yankowiak */

// Get the slideshow:
var slideshow = $('.cycle-slideshow');

// Retrieve the jQuery Cycle 2 duration declared in the .cycle-slideshow element. Add 1 second to the duration:
var slideDuration = (slideshow.attr('data-cycle-timeout') / 1000) + 1;

// Create a string with "s" at the end to pass as the duration in seconds for the CSS3 transition:
var slideDurationString = slideDuration + 's';

// Add the transition-duration inline CSS to each slide:
$('.cycle-slideshow > div').css({"transition-duration": slideDurationString});


// Add the .burns-slide class to the first slide so it is already using the effect when it loads:
$( '.cycle-slideshow' ).on( 'cycle-initialized', function( event, optionHash ) {
    $('.cycle-slideshow div').first().addClass('burns-slide');
});

 // Add the Burns effect to the next slide on the start of transition:
$( '.cycle-slideshow' ).on( 'cycle-before', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
    $(incomingSlideEl).addClass('burns-slide');
});

// Remove the Burns effect from the previous slide after transition completes:
$( '.cycle-slideshow' ).on( 'cycle-after', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
    $(outgoingSlideEl).removeClass('burns-slide');
});

