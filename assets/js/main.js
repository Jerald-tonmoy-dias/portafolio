(function($) {
    "use strict"
    jQuery(document).ready(function() {

        //Mobile Menu 
        $(".header-navigation nav").meanmenu({
            meanMenuContainer: '.mobile-menu-container',
            meanScreenWidth: "1200"
        });

        //Sticky Header 
        $(window).on("scroll", function(){
            var ScrollBarPose = $(window).scrollTop(); 
            var HeaderHeight = $(".header-section").height();
            if( ScrollBarPose > HeaderHeight ) {
                $(".header-section").addClass("sticky"); 
            } else {
                $(".header-section").removeClass("sticky");
            }
        });
        
        //Hero Slider
        $(".hero-slider").slick({
            autoplay: true, 
            dots: true, 
            arrows: false,
            fade: true,
        })

        //Testimonial Slider 
        $(".testimonial-section .slider-area").slick({
            autoplay: true, 
            dots: true,
            slidesToShow: 3,
            arrows: false,
            responsive : [
                {
                    breakpoint: 1200, 
                    settings: {
                        slidesToShow: 2,
                    }
                }, 
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        //Porfolio Single Slider 
        $(".img-slider").slick({
            autoplay: true, 
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
        }); 

        $(".portfolio-slider").slick({
            autoplay: true, 
            slidesToShow: 3, 
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 2,
                    }
                }, 
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        // init Isotope
        var $grid = $('.filter-area').isotope({
            // options
        });
        // filter items on button click
        $('.filter-btn').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        //Change active button 
        $(".portfolio-list button").each(function(){
            $(this).on("click", function(){
                $(this).parent().find('button.active').removeClass("active"); 
                $(this).addClass("active"); 
            })
        }); 

        //FaQ Accordion 
        var CardLink = $(".faq-accordion .card-header a"); 
        CardLink.each(function(){
            $(this).on("click", function(){
                $(".accordion").find(".card-active").removeClass("card-active");
                $(this).parents(".card").addClass("card-active");
            });
        });

        //Blog Thumbnail Slider 
        $(".blog-thumbnail-slider").slick({
            autoplay: true, 
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            
        });

        //Video Popup
        $('.video-popup').magnificPopup({
            type: "iframe",
        });


        //Counter Up
        $(".number-counter").counterUp({
            delay: 10, 
            time: 2000,
        });

        $('.column-overlay').each(function() {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                  enabled:true
                }
            });
        });


        //ScrollTop 
        $(window).on("scroll", function(){
            var scrollBar = $(window).scrollTop(); 
            if( scrollBar > 500 ) {
                $(".scrolltop").fadeIn(); 
            } else {
                $(".scrolltop").fadeOut();
            }
        });

        $(".scrolltop").click(function(){
            $("html,body").animate({
                scrollTop: 0,
            }, 1500, 'swing');
        });


        //HomePage 2 Hero Slider 
        $(".home2-hero-slider").slick({
            autoplay: true,
            arrows: false,
            fade: true,
            dots: true,
        });

        //ScrollDown 
        $(".scrolldown a").on("click", function(e){
            e.preventDefault();
            var hashDistance = $(this.hash).offset().top - 130;
            $("body,html").animate({
                scrollTop: hashDistance,
            }, 1500);
        });

        //HomePage  2 Service Slider
        $(".home2-service-section .service-slider-area").slick({
            autoplay: true, 
            arrows: false, 
            slidesToShow: 4, 
            dots: true,
            slidesToScroll: 2,
            responsive : [
                {
                    breakpoint: 1200, 
                    settings : {
                        slidesToShow: 3,
                    }
                }, 
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 2,
                    }
                }, 
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        //HomePage 2 Team Slider 
        $(".home2-team-members .team-slider").slick({
            autoplay: true, 
            arrows: false,
            slidesToShow: 5,
            responsive : [
                {
                    breakpoint: 1200, 
                    settings: {
                        slidesToShow: 4,
                    }
                }, 
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 3,
                    }
                }, 
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }, 
                {
                    breakpoint: 480, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $(".home2-client-testimonial .testimonial-area").slick({
            autoplay: true, 
            arrows: false,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }); 

        //Language Switcher 
        $(".lang-switcher").on("click", function(e){
            e.preventDefault();
            $(".lang-list").toggleClass("lang-list-open");
        });

        $(".lang-list li").each(function(){
            $(this).on("click", function(){
                var logoSrc = $(this).children(".flag").children("img").attr("src");
                var flagText = $(this).children("a").text() + '<span><i class="fas fa-angle-down"></i></span>'; 
                $(".lang-switcher > .flag img").attr("src", logoSrc);
                $(".lang-switcher > a").html(flagText);
            });
        });

    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        //ProgressBar 
        $(".progress-bar").ProgressBar(); 


    });
})(jQuery);
