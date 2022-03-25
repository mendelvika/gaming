'use strict';
$(function () {
    $('.lazy').Lazy();
});

$('.toggle-button').click(() => {
    $('.header_menu').toggleClass('active');
    if ($('.header_menu').hasClass('active')) {
        $('body, html').addClass('noscroll');
        $('.toggle-button').text('close')
    } else {
        $('.toggle-button').text('menu');
        $('body, html').removeClass('noscroll');
    }
})

$('.header_menu_drop-btn').click(() => {
    if ($('.header_menu').hasClass('active-drop')) {
        $('.overflow-drop').fadeOut();
        $('body, html').removeClass('noscroll');
        $('.header_menu').removeClass('active-drop');
    } else {
        $('.overflow-drop').fadeIn();
        $('body, html').addClass('noscroll');
        $('.header_menu').addClass('active-drop');
    }
})

$('.overflow-drop').click(() => {
    $('.overflow-drop').fadeOut();
    $('body, html').removeClass('noscroll');
    $('.header_menu').removeClass('active-drop');
});

if ($('.card-section').hasClass('review')) {
    const stickyOffset = $('.review_title').offset().top + $('.review_title').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() >= stickyOffset) {
            $('.card-section.review').addClass('scroll');
        }
        else {
            $('.card-section.review').removeClass('scroll');
        }
    });
}

$('.link-modal').click(() => {
    $('.main-screen__wrapper_after-text_modal').fadeIn();
})
$('.main-screen__wrapper_after-text_modal_close').click(() => {
    $('.main-screen__wrapper_after-text_modal').fadeOut();
})

$(".header_menu_link.hash").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: ($(aid).offset().top - 200)}, 'slow');
    $('.toggle-button').text('menu');
    $('body, html').removeClass('noscroll');
    $('.header_menu').removeClass('active');
});

$(".review_anchors_item").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    var ofsetH = $('.card-section.review').outerHeight() + 95;
    $('html,body').animate({scrollTop: ($(aid).offset().top - ofsetH)}, 'slow');
});

$(".fa-star").on("mouseover", function () {
    $(this).parent().attr('data-rate', ($(this).index() + 1))
})
$(".fa-star").on("mouseleave", function () {
    const tempRate = $(this).parent().attr('data-hover-rate');
    $(this).parent().attr('data-rate', tempRate)
})
$(".fa-star").click(function () {
  $(this).parent().attr({
    'data-hover-rate': ($(this).index() + 1), 'data-rate': ($(this).index() + 1)
  });
})

$(".card-text_small_linkk").click(function () {
    $(this).parent().toggleClass('active');
})

$(".card-text_small_modal_close").click(function () {
    $(this).parents().eq(1).removeClass('active');
})

$(".reedmore").click(function () {
    if ($(this).hasClass('active')) {
        $('.more').fadeOut();
        $(this).text('Read more');
    } else {
        $('.more').fadeIn();
        $(this).text('Read less');
    }
    $(this).toggleClass('active');
})
