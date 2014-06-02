  //////////////////
 // Elevate Zoom //
//////////////////

/* This is a jquery extension for QuoVadis image zoom
using jquery plugin elevateZoom */

$(window).resize(elevateZoomIntialize);
$(document).ready(elevateZoomIntialize);

function elevateZoomIntialize() {
    if ($(window).width() <= 768) {
        $(".elevateZoom-mobile").elevateZoom({
            zoomType: "lens",
            lensShape : "round",
            lensSize : 200,
        });
    } else if ($(window).width() > 768 && $(window).width() < 992) {
        $(".elevateZoom-tablet").elevateZoom({
            zoomType: "lens",
            lensShape : "round",
            lensSize : 200,
        });
    } else if ($(window).width() >= 992) {
        $(".elevateZoom-desktop").elevateZoom({
            zoomType: "lens",
            lensShape : "round",
            lensSize : 200,
        });
    }
}