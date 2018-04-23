$(document).ready(function () {


    $('.animation-lines-container').hover(
        function () {
            $(this).find('.question-container').addClass('hovered');
        },
        function () {
            $(this).find('.question-container').removeClass('hovered');
        }
    );

    $('.project-info-container').removeClass('fade--in');
    setTimeout(function () {
        $('.project-navigation').removeClass('fade--in');
    }, 600);

    // $('.letter-f > .animate-in-mask').removeClass('slide--right');

    $('.animation-lines-container .animate-in-mask').each(function (i) {
        setTimeout(function () {
            $('.animation-lines-container .animate-in-mask').eq(i).addClass('is-visible');
        }, 300 * i);
    });



});