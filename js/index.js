var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});

var owl1 = $('.owl-carousel');
owl1.owlCarousel({
    center: true,
    loop: true,
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: false,
    nav: true,
});