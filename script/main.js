$('.dropdown').click(function(){
    $('.dropdown > ul').toggleClass('open');
    $(this).toggleClass('open');
    $('.dropdown > .icon').toggleClass('open');
});

$(document).click(function(e){
    let $target = $(e.target);

    if(!$target.closest('.dropdown').length) {
        $('.dropdown > ul').removeClass('open'); 
        $('.dropdown').removeClass('open');
        $('.dropdown > .icon').removeClass('open');
    }
});

$('.dropdown > ul > a').hover(function(){
    $(this).children('.icon-right').toggleClass('hover');
});

$('.faq > .container > .item').click(function(){
    $(this).toggleClass('active');
    $(this).children('.top').toggleClass('active');
    $(this).children('.bottom').toggleClass('active');
    $('.faq > .container > .item').not(this).removeClass('active');
    $('.faq > .container > .item > .top').not($(this).children('.top')).removeClass('active');
    $('.faq > .container > .item > .bottom').not($(this).children('.bottom')).removeClass('active');
});

$('.mobile-button').click(function(){
    $('header > .container').toggleClass('open');
    $(this).toggleClass('open');
});

$(window).on("scroll", function () {
    $("header").toggleClass("scroll", $(this).scrollTop() > 150);
});

$(document).ready(function(){
    $('.faq > .container > .item').css({"opacity" : "1"});
})

$('.dropdown > ul > a').click(function(){
    $('header > .container').removeClass('open');
    $('.mobile-button').removeClass('open');
});

$('.navi > ul > a').click(function(){
    $('header > .container').removeClass('open');
    $('.mobile-button').removeClass('open');
});