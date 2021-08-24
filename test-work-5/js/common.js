$(document).ready(function(){
    $('.navbar-toggle').on('click',function(){
        $('.icon-bar-1').toggleClass('icon-bar-1-active');
        $('.icon-bar-2').toggleClass('icon-bar-2-active');
        $('.icon-bar-3').toggleClass('icon-bar-3-active');
    });
    $('.usd').on('click',function(){
        $('.money span').text('USD ');
        $('.usd').text('UAH ');
        $('.eur').text('EUR ');
        $('.rub').text('RUB ');
    });
    $('.eur').on('click',function(){
        $('.money span').text('EUR ');
        $('.usd').text('USD ');
        $('.eur').text('UAH ');
        $('.rub').text('RUB ');
    });
    $('.rub').on('click',function(){
        $('.money span').text('RUB ');
        $('.usd').text('UAH ');
        $('.eur').text('EUR ');
        $('.rub').text('UAH ');
    });
});