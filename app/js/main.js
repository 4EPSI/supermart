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

// Dropdown select
$('.dropdown-item').on('click', function(){
    $(this).closest('.d_select').find('.dropdown-toggle').text($(this).text());
});

// Custom nav btns
$('.customNextBtn').click(function() {
    $(this).closest('.custom_slider').find('.owl-carousel').trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
    $(this).closest('.custom_slider').find('.owl-carousel').trigger('prev.owl.carousel');
});

// Sidebar slider
$('.sidebar_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 1
});

// Sidebar single slider
$('.sidebar_single_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    mouseDrag: false,
    items: 1
});

// Products slider
$('.products_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 4
});
// Products Slider Multiply
$('.products_slider_multiply').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 1
});

