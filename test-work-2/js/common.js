$(document).ready(function(){
    $('.navbar-toggle').on('click',function(){
        $('.icon-bar-1').toggleClass('icon-bar-1-active');
        $('.icon-bar-2').toggleClass('icon-bar-2-active');
        $('.icon-bar-3').toggleClass('icon-bar-3-active');
    });
    $('.button-ua').on('click',function(){
        $(this).addClass('language-button-active');
        $('.button-ru').removeClass('language-button-active');
        $('.button-en').removeClass('language-button-active');
    });
    $('.button-ru').on('click',function(){
        $(this).addClass('language-button-active');
        $('.button-ua').removeClass('language-button-active');
        $('.button-en').removeClass('language-button-active');
    });
    $('.button-en').on('click',function(){
        $(this).addClass('language-button-active');
        $('.button-ua').removeClass('language-button-active');
        $('.button-ru').removeClass('language-button-active');
    });
    $('.search-left-btn').on('click',function(){
        $('.search-modal').addClass('search-modal-active');
    });
    $('.search-modal-close').on('click',function(){
        $('.search-modal').removeClass('search-modal-active');
        $('.search-form input[type=search]').val('');
    });
    $('.navbar-toggle').on('click',function(){
        $('.navbar-toggle').toggleClass('navbar-toggle-active')
    });
    $("html").niceScroll({
        cursorcolor:"#282828",
        cursorwidth: "5px",
        horizrailenabled: false
    });
    $('.submenu-item-1').on('click',function(){
        if (window.innerWidth > 768) {
            $('.hidden-submenu').toggleClass('hidden-submenu-active');
            $('.submenu-item-2,.submenu-item-3,.submenu-item-4,.submenu-item-5,.submenu-item-6').toggleClass('submenu-item-disable');
        }
    });
    $('.submenu-item-1').on('click',function(){
        if (window.innerWidth <= 769) {
            $('.submenu-item-mobile-1').slideToggle(1000);
        }
    });
    $('.submenu-item-2,submenu-item-mobile-3,.submenu-item-4,.submenu-item-5,.submenu-item-6').on('click',function(){
        if (window.innerWidth <= 769) {
            $('.submenu-item-mobile-1').slideUp(1000);
        }
    });
    if (window.outerWidth >= 769 ) {
        $('.submenu-item-mobile').addClass('.submenu-item-mobile-disable');
        $('.submenu-item-mobile').slideUp();
    }
    $('.callback').on('click',function(){
        $('.modal-callback').addClass('modal-callback-active');
        $('.search-modal').removeClass('search-modal-active');
        $('.search-form input[type=search]').val('');
    });
    $('.close-callback').on('click',function(){
        $('.modal-callback').removeClass('modal-callback-active');
    });
    $('.carousel').owlCarousel({
        loop: true,
        margin:0,
        dots: false,
        nav: true,
        responsiveClass:true,
        navigation: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 1000,
        dotsSpeed: 1500,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            600:{
                items:1,
                nav:false,
                loop:true
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });
    $('.owl-next').click(function() {
        $('.carousel').trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function() {
        $('.carousel').trigger('prev.owl.carousel');
    });
    $('.operated-carousel').owlCarousel({
        loop: true,
        margin:0,
        navigation: true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:6000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
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
    });
    $('.opreated-next').click(function() {
        $('.operated-carousel').trigger('next.owl.carousel');
    });
    $('.opreated-prev').click(function() {
        $('.operated-carousel').trigger('prev.owl.carousel');
    });
});