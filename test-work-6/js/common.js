$(document).ready(function(){
    $('.catalog_btn').on('click',function(){
        $('.hidden_catalog').slideToggle(100);
        $('.fa-arrow-circle-o-down').toggleClass('fa-arrow-circle-o-up');
        $('.catalog_btn').toggleClass('catalog_btn_active');
    });
//    $("html").niceScroll({
//        cursorcolor:"#76d80d",
//        cursorwidth: "3px",
//        horizrailenabled: false,
//        mousescrollstep: 40,
//        scrollspeed: 180
//    });
//    $("body").getNiceScroll().hide();
    var owl = $('.owl-1');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1280: {
            items:5
        }
    }
    })
    $('.owl-2').owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1280: {
            items:3
        }
    }
    })
    $('.owl-3').owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1280: {
            items:3
        }
    }
    })
    
    $('.previous').click(function(e) {
        e.preventDefault();
        $(".owl-1").trigger('prev.owl.carousel');
    });
    $('.next').click(function(e) {
        e.preventDefault();
        $(".owl-1").trigger('next.owl.carousel');
    });
    
    $('.previous-2').click(function(e) {
        e.preventDefault();
        $(".owl-2").trigger('prev.owl.carousel');
    });
    $('.next-2').click(function(e) {
        e.preventDefault();
        $(".owl-2").trigger('next.owl.carousel');
    });
    
    $('.previous-3').click(function(e) {
        e.preventDefault();
        $(".owl-3").trigger('prev.owl.carousel');
    });
    $('.next-3').click(function(e) {
        e.preventDefault();
        $(".owl-3").trigger('next.owl.carousel');
    });
    var mzOptions = {
    variableZoom: true,
    zoomWidth: 40,
    zoomHeight: 40 
    };
    $('.more_description').on('click',function(){
        $('.description_text_outer').addClass('expand');
        $(this).css({'display':'none'});
        $('.more_description_2').css({'display':'block'});
        $('.description_text_outer_overlay').css({'display':'none'});
    });
    $('.more_description_2').on('click',function(){
        $('.description_text_outer').removeClass('expand');
        $(this).css({'display':'none'});
        $('.more_description').css({'display':'block'});
        $('.description_text_outer_overlay').css({'display':'block'});
    });
    $('.characteristic_2').on('click',function(){
        $('#first_wrapper').css({'display':'none'});
        $('#third_wrapper').css({'display':'none'});
        $('#fourth_wrapper').css({'display':'none'});
        $('#second_wrapper').css({'display':'flex'});
        $('.main_li_head_2').addClass('main_li_head_active');
        $('.main_li_head_1').removeClass('main_li_head_active');
        $('.main_li_head_3').removeClass('main_li_head_active');
        $('.main_li_head_4').removeClass('main_li_head_active');
    });
    $('.characteristic_1').on('click',function(){
        $('#first_wrapper').css({'display':'flex'});
        $('#second_wrapper').css({'display':'none'});
        $('#third_wrapper').css({'display':'none'});
        $('#fourth_wrapper').css({'display':'none'});
        $('.main_li_head_1').addClass('main_li_head_active');
        $('.main_li_head_2').removeClass('main_li_head_active');
        $('.main_li_head_3').removeClass('main_li_head_active');
        $('.main_li_head_4').removeClass('main_li_head_active');
    });
    $('.characteristic_3').on('click',function(){
        $('#first_wrapper').css({'display':'none'});
        $('#second_wrapper').css({'display':'none'});
        $('#third_wrapper').css({'display':'flex'});
        $('#fourth_wrapper').css({'display':'none'});
        $('.main_li_head_3').addClass('main_li_head_active');
        $('.main_li_head_2').removeClass('main_li_head_active');
        $('.main_li_head_1').removeClass('main_li_head_active');
        $('.main_li_head_4').removeClass('main_li_head_active');
    });
    $('.characteristic_4').on('click',function(){
        $('#first_wrapper').css({'display':'none'});
        $('#second_wrapper').css({'display':'none'});
        $('#third_wrapper').css({'display':'none'});
        $('#fourth_wrapper').css({'display':'flex'});
        $('.main_li_head_4').addClass('main_li_head_active');
        $('.main_li_head_2').removeClass('main_li_head_active');
        $('.main_li_head_1').removeClass('main_li_head_active');
        $('.main_li_head_3').removeClass('main_li_head_active');
    });
    
    
    
    
    $('.main_li_head_1').on('click',function(){
        $('.viewed').removeClass('viewed_disable');
        $('.viewed_header').removeClass('viewed_header_disable');
    });
    $('.main_li_head_2').on('click',function(){
        $('.viewed').addClass('viewed_disable');
        $('.viewed_header').addClass('viewed_header_disable');
    });
    $('.main_li_head_3').on('click',function(){
        $('.viewed').removeClass('viewed_disable');
        $('.viewed_header').removeClass('viewed_header_disable');
    });
    $('.main_li_head_4').on('click',function(){
        $('.viewed').addClass('viewed_disable');
        $('.viewed_header').addClass('viewed_header_disable');
    });
//    var $menu = $(".hidden_menu");
//    $(window).scroll(function(){
//    if ( $(this).scrollTop() > 400 ){
//        $menu.addClass("hidden_menu_active");
//        }
//    else {
//         $menu.removeClass("hidden_menu_active");
//            }
//        });
    $('.more_characteristics').on('click',function(){
        $('#first_wrapper').css({'display':'none'});
        $('#second_wrapper').css({'display':'flex'});
        $('.main_li_head_2').addClass('main_li_head_active');
        $('.main_li_head_1').removeClass('main_li_head_active');
    });
    $('.videoimage').on('click', function(){
        $('#first_wrapper').css({'display':'none'});
        $('#fourth_wrapper').css({'display':'flex'});
        $('.main_li_head_4').addClass('main_li_head_active');
        $('.main_li_head_1').removeClass('main_li_head_active');
    });
    $('.map_button').on('click',function(){
        $('.map_overlay').addClass('map_overlay_active');
    });
//    $('.map_overlay').on('click',function(){
//        $(this).removeClass('map_overlay_active');
//    })
    $(document).click(function(event) {
        if ($(event.target).closest("#map_1,.map_button").length) return;
        $('.map_overlay').removeClass('map_overlay_active');
        event.stopPropagation();
    });
    
    $('.fa-window-close').on('click',function(){
        $('.map_overlay').removeClass('map_overlay_active');
    });
    $('.burger_menu').on('click',function(){
        $('.dropdown_first').toggleClass('dropdown_first_active');
        $('.burger_menu_item1').toggleClass('burger_menu_item1_active');
        $('.burger_menu_item2').toggleClass('burger_menu_item2_active');
        $('.burger_menu_item3').toggleClass('burger_menu_item3_active');
        $('.dropdown_first_active').removeClass('dropdown_first_active_zero');
        //$('.dropdown_first ul li ul').css({'display':'none'});
        $('.dropdown_secondary_active').removeClass('dropdown_secondary_active');
        $('.dropdown_second').removeClass('dropdown_second_active');
        $('.dropdown_third').removeClass('dropdown_third_active');
        $('.dropdown_fourth').removeClass('dropdown_fourth_active');
    });
    $('.hidden_catalog_link').on('click',function(){
        $(this).parent().find('.custom_hidden').addClass('dropdown_secondary_active');
        $('.dropdown_first_active').addClass('dropdown_first_active_zero');
    });
    $('.hidden_catalog_submenu_back').on('click',function(){
        $('.dropdown_first_active').removeClass('dropdown_first_active_zero');
        $('.custom_hidden').removeClass('dropdown_secondary_active');
    });
    $('.mob_top_info').on('click',function(){
       $('.dropdown_second').toggleClass('dropdown_second_active');
        $('.dropdown_first').removeClass('dropdown_first_active');
        $('.burger_menu_item1').removeClass('burger_menu_item1_active');
        $('.burger_menu_item2').removeClass('burger_menu_item2_active');
        $('.burger_menu_item3').removeClass('burger_menu_item3_active');
        $('.dropdown_third').removeClass('dropdown_third_active');
        $('.dropdown_fourth').removeClass('dropdown_fourth_active');
    });
    $('.mob_top_phone').on('click',function(){
       $('.dropdown_third').toggleClass('dropdown_third_active');
        $('.dropdown_second').removeClass('dropdown_second_active');
        $('.dropdown_first').removeClass('dropdown_first_active');
        $('.burger_menu_item1').removeClass('burger_menu_item1_active');
        $('.burger_menu_item2').removeClass('burger_menu_item2_active');
        $('.burger_menu_item3').removeClass('burger_menu_item3_active');
        $('.dropdown_fourth').removeClass('dropdown_fourth_active');
    });
    $('.mob_top_search').on('click',function(){
       $('.dropdown_fourth').toggleClass('dropdown_fourth_active');
        $('.dropdown_first').removeClass('dropdown_first_active');
        $('.dropdown_second').removeClass('dropdown_second_active');
        $('.dropdown_third').removeClass('dropdown_third_active');
        $('.burger_menu_item1').removeClass('burger_menu_item1_active');
        $('.burger_menu_item2').removeClass('burger_menu_item2_active');
        $('.burger_menu_item3').removeClass('burger_menu_item3_active');
    });
    $('.fa-heart-o').hover(
        function(){
        $(this).addClass('fa-heart');
        $(this).removeClass('fa-heart-o');
    },
        function(){
        $(this).removeClass('fa-heart');
        $(this).addClass('fa-heart-o');
    });
   
    var ert = $('.hidden_catalog').parent().position().top;
    $('.hidden_catalog ul li ul').css({
        'top': -ert*0.25 + "px",
        'position':'absolute'
    });
    $('.buy_details_select_1').css({'color':'#959595'});
    $('.buy_details_select_2').css({'color':'#959595'});
    $('.buy_details_select_3').css({'color':'#959595'});
    $('.buy_overlay_in_one_click').on('click',function(){
        $('.buy_in_one_click').addClass('buy_in_one_click_active');
    });
    $('.close_modal').on('click',function(){
        $('.buy_in_one_click').removeClass('buy_in_one_click_active');
    });
    $('.top_callback').on('click',function(){
        $('.top_callback_overlay').toggleClass('top_callback_overlay_active');
    });
    
    // $('option').css({'color':'#959595'});
    
    $('.cust_1_1').on('click',function(){
        $('.cust_1_1').addClass('cust_1_active');
        $('.cust_1_2').removeClass('cust_1_active');
        $('.cust_outer_1').css({'display':"block"});
        $('.description_item_3_cust').css({'display':"none"});
    });
    $('.cust_1_2').on('click',function(){
        $('.cust_1_2').addClass('cust_1_active');
        $('.cust_1_1').removeClass('cust_1_active');
        $('.cust_outer_1').css({'display':"none"});
        $('.description_item_3_cust').css({'display':"flex"});
    });
    
    
    $('.cust_2_1').on('click',function(){
        $('.cust_2_1').addClass('cust_2_active');
        $('.cust_2_2').removeClass('cust_2_active');
        $('.cust_outer_2').css({'display':"block"});
        $('.description_item_3_cust_1').css({'display':"none"});
    });
    $('.cust_2_2').on('click',function(){
        $('.cust_2_2').addClass('cust_2_active');
        $('.cust_2_1').removeClass('cust_2_active');
        $('.cust_outer_2').css({'display':"none"});
        $('.description_item_3_cust_1').css({'display':"flex"});
    });
    
    $('.cust_3_1').on('click',function(){
        $('.cust_3_1').addClass('cust_3_active');
        $('.cust_3_2').removeClass('cust_3_active');
        $('.cust_outer_3').css({'display':"block"});
        $('.description_item_3_cust_2').css({'display':"none"});
    });
    $('.cust_3_2').on('click',function(){
        $('.cust_3_2').addClass('cust_3_active');
        $('.cust_3_1').removeClass('cust_3_active');
        $('.cust_outer_3').css({'display':"none"});
        $('.description_item_3_cust_2').css({'display':"flex"});
    });
    
    
//   $('#first_wrapper').css({'display':"none"});
//    $('#fourth_wrapper').css({'display':"flex"});
//    $('option').mouseenter(function(){
//        $(this).css({'background-color':'red'});
//    });
    
//    $('select').on('click',function(){
//        $('option:hover').css({'background-color':'red'});
//    });
    
//    $('.onclick').on('click',function(){
//        $('.aditional_overlay').toggleClass('aditional_overlay_active');
//    });
//    $('.onclick2').on('click',function(){
//        $('.aditional_overlay2').toggleClass('aditional_overlay_active2');
//    });
});