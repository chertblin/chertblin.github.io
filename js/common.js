$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 8,
                nav: false
            },
            1300: {
                items: 9,
                nav: false
            },
            1400: {
                items: 12,

            }
        },
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 1200,
        autoplayHoverPause: true,
        autoHeight: false,
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})
