$('.main_li_head_3,.main_li_head_2,.main_li_head_4').on('click',function(){
    $('.second_wrapper_col_2').simpleScrollFollow({
        limit_elem: '.viewed_header',
        min_width: 992
    });
})