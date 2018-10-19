$(document).ready(function() {
    

$(".animation").animated("fadeIn", "fadeOutDown");
$(".animation img").animated("zoomIn", "fadeOutDown");
$(".animation_2 img").animated("fadeIn", "fadeOutDown");
$(".animation_2 p").animated("fadeInUp", "fadeOutDown");
$(".animation_3").animated("fadeInDown", "fadeOutDown");
$(".animation_4").animated("flipInX", "fadeOutUp");
$(".animation_5").animated("fadeInLeft", "fadeOutLeft");
$(".animation_6 ").animated("fadeIn", "fadeOut");
    
});


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
                                items: 11,

                            }
                        },
                        loop: true,
                        margin: 50,
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
