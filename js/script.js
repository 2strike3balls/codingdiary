$(document).ready(function(){
    $(".line>li").click(function(){
        $(this).next('.board-wrap').fadeIn();
        $('.inner .cross').slideDown();
    });
    $(".inner .cross").click(function(){
        $(".board-wrap").fadeOut();
        $(this).slideUp();
        });
});