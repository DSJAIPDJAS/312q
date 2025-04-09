(function($) {
    "use strict";

    // Spinner - نسخة محسنة
    var spinner = function() {
        // إخفاء spinner بعد تحميل الصفحة بالكامل
        $(window).on('load', function() {
            $('#spinner').fadeOut(500, function() {
                $(this).remove();
            });
        });

        // نسخة احتياطية في حالة فشل حدث load
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').fadeOut(500);
            }
        }, 5000); // بعد 5 ثواني كحد أقصى
    };
    spinner();

    // Sticky Navbar - محسن
    var stickyNavbar = function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        });
    };
    stickyNavbar();

    // تهيئة Owl Carousels مع التحقق من وجودها
    var initCarousels = function() {
        // International Tour Carousel
        if ($('.InternationalTour-carousel').length) {
            $(".InternationalTour-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: false,
                dots: true,
                loop: true,
                margin: 25,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });
        }

        // Packages Carousel
        if ($('.packages-carousel').length) {
            $(".packages-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: false,
                dots: false,
                loop: true,
                margin: 25,
                nav: true,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });
        }

        // Testimonial Carousel
        if ($('.testimonial-carousel').length) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                dots: true,
                loop: true,
                margin: 25,
                nav: true,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });
        }
    };

    // تهيئة Carousels بعد تحميل الصفحة بالكامل
    $(window).on('load', function() {
        initCarousels();
    });

    // Back to Top Button - نسخة محسنة
    var backToTop = function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800, 'easeInOutExpo');
        });
    };
    backToTop();

    // تهيئة Lightbox إذا كان مستخدماً
    var initLightbox = function() {
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true
            });
        }
    };
    initLightbox();

    // إصلاح مشكلة تحميل الفيديو
    var initVideo = function() {
        var video = $('.video-background');
        if (video.length) {
            video.on('loadeddata', function() {
                console.log('Video loaded successfully');
            }).on('error', function() {
                console.error('Video loading failed');
                $(this).hide();
                $('.carousel-item.active .img-fluid').show();
            });
        }
    };
    initVideo();

})(jQuery);