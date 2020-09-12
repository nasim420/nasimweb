$(function () {
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    // back to top js part start 
    $('.back-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);

    });

    // Navber bg/fadeIn/fadeOut
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('.navbar').addClass('navbg');
        } else {
            $('.navbar').removeClass('navbg');
        }
        if (scrolling > 200) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
    });

//    

    //slider js part start
    $('.testmonial-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
   },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
   }
  ]
    });
});
