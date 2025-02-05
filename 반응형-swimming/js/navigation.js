$(function(){
    $('#main-menu>li').mouseenter(function(){
        $('#main-menu>li .sub-menu').hide().stop();
        $(this).find('.sub-menu').slideDown();
    });
    $('#main-menu>li').mouseleave(function(){
        $(this).find('.sub-menu').slideUp();
    });

    $('#trigger').click(function(event){
        event.preventDefault();
        $('#main-menu').toggleClass('active');
    });

});