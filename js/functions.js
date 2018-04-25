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

    $('.project-info-container').removeClass('fade--in');
    setTimeout(function () {
        $('.project-navigation').removeClass('fade--in');
    }, 600);

    $('.animation-lines-container .animate-in-mask').each(function (i) {
        setTimeout(function () {
            $('.animation-lines-container .animate-in-mask').eq(i).addClass('is-visible');
        }, 100 * i);
    });

    setTimeout(function () {
        $('.animation-lines-container .question').each(function (i) {
            setTimeout(function () {
                $('.animation-lines-container .question').eq(i).addClass('question-reveal');
            }, 300 * i);
            setTimeout(function () {
                $('.animation-lines-container:nth-child(1)').eq(i).addClass('pink');
            }, 400 * i);
        });
    }, 3000);

    // $('.main-carousel').flickity({
    //     cellAlign: 'left',
    //     contain: true,
    //     wrapAround: true,
    //     fullscreen: true,
    //     lazyLoad: 1
    // });
});