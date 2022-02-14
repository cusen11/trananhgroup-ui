!(function(){
    $('.menu-icon').click(()=>{
        $('.nav').toggleClass('active')
    })
    // project slide
    $('.owl-projects').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1300:{
                items:3
            } ,
            1500:{
                items:4
            }
        }
    })
    var owl = $('.owl-projects');
    owl.owlCarousel();
    $('.projects-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.projects-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    // news slide
    $('.owl-news').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1300:{
                items:4
            },
            1500:{
                items:5
            }
        }
    })
    
    var owlNews = $('.owl-news');
    owlNews.owlCarousel();
    $('.news-next').click(function() {
        owlNews.trigger('next.owl.carousel');
    })
    $('.news-prev').click(function() {
        owlNews.trigger('prev.owl.carousel');
    })
    //wow
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
}())