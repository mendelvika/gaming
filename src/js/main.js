'use strict';
$(function() {
    $('.lazy').Lazy();
});

$('.toggle-button').click(() => {
    $('.header_menu').toggleClass('active');
    if ($('.header_menu').hasClass('active')) {
        $('body, html').addClass('noscroll');
        $('.toggle-button').addClass('active');
        $('.toggle-button .close').text('close')
    } else {
        $('.toggle-button .close').text('');
        $('.toggle-button').removeClass('active');
        $('body, html').removeClass('noscroll');
    }
})

$('.link-modal').click(() => {
    $('.main-screen__wrapper_after-text_modal').fadeIn();
})
$('.main-screen__wrapper_after-text_modal_close').click(() => {
    $('.main-screen__wrapper_after-text_modal').fadeOut();
})

$(".home_link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({ scrollTop: ($(aid).offset().top - 70) }, 'slow');
    $('.toggle-button').text('menu');
    $('body, html').removeClass('noscroll');
    $('.header_menu').removeClass('active');
});

$(".yak").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({ scrollTop: ($(aid).offset().top - 70) }, 'slow');
});

$(".fa-star").on("mouseover", function() {
    $(this).parent().attr('data-rate', ($(this).index() + 1))
})
$(".fa-star").on("mouseleave", function() {
    const tempRate = $(this).parent().attr('data-hover-rate');
    $(this).parent().attr('data-rate', tempRate)
})
$(".fa-star").click(function() {
    $(this).parent().attr({
        'data-hover-rate': ($(this).index() + 1),
        'data-rate': ($(this).index() + 1)
    });
})

$(".card-text_small_linkk").click(function() {
    $(this).parent().toggleClass('active');
})

$(".card-text_small_modal_close").click(function() {
    $(this).parents().eq(1).removeClass('active');
})

$(".reedmore").click(function() {
    if ($(this).hasClass('active')) {
        $('.more').fadeOut();
        $(this).text('Read more');
    } else {
        $('.more').fadeIn();
        $(this).text('Read less');
    }
    $(this).toggleClass('active');
})