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
            }
            ,
            1600:{
                items:5
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
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1300:{
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
    
}())