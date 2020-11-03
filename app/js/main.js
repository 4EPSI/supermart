// Home slider
$('.home_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    mouseDrag: false,
    items: 1,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
});
// tabs
$('.product_media span').on('click', function () {
    $('.product_media span').removeClass('active');
    $(this).addClass('active');
});