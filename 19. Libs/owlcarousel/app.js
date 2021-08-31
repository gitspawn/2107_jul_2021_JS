let options = {
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: true,
    // responsive : {
    //     // breakpoint from 0 up
    //     0 : {
    //         option1 : value,
    //         option2 : value,
    //         ...
    //     },
    //     // breakpoint from 480 up
    //     480 : {
    //         option1 : value,
    //         option2 : value,
    //         ...
    //     },
    //     // breakpoint from 768 up
    //     768 : {
    //         option1 : value,
    //         option2 : value,
    //         ...
    //     }
    // }
};

$(document).ready(function () {
    $(".owl-carousel").owlCarousel(options);
});
