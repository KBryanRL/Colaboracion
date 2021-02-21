var owl = $('.owl-carouselh');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});

var owl1 = $('.owl-carouselP');
owl1.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: false,

});