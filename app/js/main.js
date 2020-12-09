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
    items: 4,
    responsive : {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    }
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
// Categories slider
$('.categories_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 5
});
// Brand Partners
$('.brand_partners').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 6
});

// Counter
$("#getting-started")
.countdown("2020/12/31", function(event) {
  $('#day').text(
    event.strftime('%D')
  );
  $('#hours').text(
      event.strftime('%H')
    );
    $('#minutes').text(
      event.strftime('%M')
    );
    $('#seconds').text(
      event.strftime('%S')
    );
});
// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       'total': t,
//       'days': days,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
//   }

//   function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');

//     function updateClock() {
//       var t = getTimeRemaining(endtime);

//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }

//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
//   }

//   var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000); // for endless timer
//   initializeClock('countdown', deadline);







//TEST 50%
// Set the date we're counting down to
// var countDownDate = new Date("December 31, 2020 24:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
//   + minutes + "minutes " + seconds + "seconds ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



