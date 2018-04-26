$(document).ready(function () {

    // Hero question popups
    $('.animation-lines-container').hover(
        function () {
            $(this).find('.question-container').addClass('hovered');
        },
        function () {
            $(this).find('.question-container').removeClass('hovered');
        }
    );

    // Project grid thumbnails
    $('.project-card').hover(
        function () {
            $(this).find('.project-logo').addClass('project-card-hovered color-logo');
            $(this).find('.project-card-name').addClass('name-reveal');
        },
        function () {
            $(this).find('.project-logo').removeClass('project-card-hovered color-logo');
            $(this).find('.project-card-name').removeClass('name-reveal');
        }
    );

    $('.letter--question').hover(
        function () {
            $(this).find('.mask-letter').addClass('mask-letter--hover');
        },
        function () {
            $(this).find('.mask-letter').removeClass('mask-letter--hover');
        }
    );

    $('.project-info-container').removeClass('fade--in');
    setTimeout(function () {
        $('.project-navigation').removeClass('fade--in');
    }, 600);

    $('.animation-lines-container .animate-in-mask').each(function (i) {
        setTimeout(function () {
            $('.animation-lines-container .animate-in-mask').eq(i).addClass('is-visible');
        }, 100 * i);
    });

    $('.letter--question').click(function () {
        $(this).find('.question').toggleClass('question-reveal');
        $(this).find('.question-container div:nth-child(1)').toggleClass('question-text-reveal');
        $(this).find('.question-container div:nth-child(2)').toggleClass('question-text-reveal');
        $(this).find('.question-container div:nth-child(3)').toggleClass('question-text-reveal');
    });
});