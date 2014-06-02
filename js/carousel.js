  //////////////
 // Carousel //
//////////////

/* This is a jquery extension from bootstrap's carousel for QuoVadis carousel for the respective GUI */


// Put the 'top-carousel-item-link' clicked as the active one
$(document).on('click', '.top-carousel-item-link', function(event) {
    event.preventDefault();
    $('.top-carousel-item-link').removeClass('is-active');
    $(this).addClass('is-active');
});


// Hack for the progress bar from top carousel's fist item
$(document).ready(function() {
    $('.top-carousel .item.first-item').addClass('progressing');
});


// synchronise the bottom carousel to the top one
$('.top-carousel').on('slide.bs.carousel', function () {
    var index = $(this).find('.item.active').data('index');
    var bottomCarousel = $(this).siblings('.bottom-carousel');

    $('.progressing').removeClass('progressing').removeClass('first-item'); // Hack for the progress bar from top carousel's fist item 
    bottomCarousel.find('.top-carousel-item-link').removeClass('is-active');
    bottomCarousel.find('[data-slide-to="' + index + '"]').addClass('is-active');
});