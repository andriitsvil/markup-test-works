$( document ).ready(function() {
    $('.slide_one').owlCarousel({
    loop: true,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:5000,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1140:{
            items:3
    }
    }    
})    
$('.owl-next').click(function() {
    $('.slide_one').trigger('next.owl.carousel');
})
$('.owl-prev').click(function() {
    $('.slide_one').trigger('prev.owl.carousel');
})    
    $('.slide_two').owlCarousel({
    loop: true,
    margin:0,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1140:{
            items:4
    }
    }    
})
$('.slide_two_next').click(function() {
    $('.slide_two').trigger('next.owl.carousel');
})
$('.slide_two_prev').click(function() {
    $('.slide_two').trigger('prev.owl.carousel');
})  
 $('.slide_three').owlCarousel({
    loop: true,
    margin:30,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        },
        1140:{
            items:4
    }
    }    
})
$('.slider_outer_next').click(function() {
    $('.slide_three').trigger('next.owl.carousel');
})

$('.slider_outer_prev').click(function() {
    $('.slide_three').trigger('prev.owl.carousel');
})   
$('.slide_fourth').owlCarousel({
    loop: true,
    margin:30,
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1140:{
            items:3
    }
    }    
})
$('.comments_owl-next').click(function() {
    $('.slide_fourth').trigger('next.owl.carousel');
})
$('.comments_owl-prev').click(function() {
    $('.slide_fourth').trigger('prev.owl.carousel');
})   
    
    
var $root = $('body');
$('a.site_menu').click(function(event) {
    event.preventDefault();
    $root.stop().animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
}); 
    $('a.footer_menu').click(function(event) {
    event.preventDefault();
    $root.stop().animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
}); 
    
}); 