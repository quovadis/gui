  ////////////////
 // Tabcordion //
////////////////

/* This is a jquery extension for QuoVadis tabcordions 
Tabcordion is made to provide with one same markup an acordion/collapse behavior on touch devices and a tab behavior on desktop */



// Identify if the size need an acordion or a tab
$(window).resize(categorizeAcordion);
$(document).ready(categorizeAcordion);

function categorizeAcordion() {
    if ($(window).width() <= 768) {
        $('.tabcordion').addClass('acordion').removeClass('tab');
    } else {
        $('.tabcordion').addClass('tab').removeClass('acordion');
        tabTransition();
    };
};


// Acordion behavior
$(document).on('click', '.acordion .tabcordion-head a', function(event) {
    event.preventDefault();

    var head = $(this).closest('.tabcordion-head');
    var body = head.siblings('.tabcordion-body');

    head.toggleClass('is-in');
    body.toggleClass('hidden');


// Tab behavior
}).on('click', '.tab .tabcordion-head a', function(event) {
    event.preventDefault();

    var group = $(this).closest('.tabcordion-group');
    var head = $(this).closest('.tabcordion-head');
    var heads = group.find('.tabcordion-head')
    var body = head.siblings('.tabcordion-body');
    var bodies = group.find('.tabcordion-body');

    heads.removeClass('is-in');
    head.addClass('is-in');
    bodies.addClass('hidden');
    body.removeClass('hidden');
});


// In order to have at least and maximum one ".tabcordion-head" in & ".tabcordion-body" visible when passing from acordeons to tabs
function tabTransition() {
    $('.tabcordion-group').each(function() {
        var inLength = $(this).find('.tabcordion-head.is-in').length;
        if (inLength == 0) {
            var firstChild = $(this).children(':first-child');
            firstChild.children('.tabcordion-head').addClass('is-in');
            firstChild.children('.tabcordion-body').removeClass('hidden');
        } else if (inLength > 1) {
            var firstChild = $(this).find('.tabcordion-head.is-in').first().parent('.tabcordion');
            $(this).find('.tabcordion-head.is-in').siblings('.tabcordion-body').addClass('hidden');
            $(this).find('.tabcordion-head.is-in').removeClass('is-in');
            firstChild.children('.tabcordion-head').addClass('is-in');
            firstChild.children('.tabcordion-body').removeClass('hidden');
        };
    });
};