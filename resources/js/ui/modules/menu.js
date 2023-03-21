/**
 * Módulo Mega Menu
 * Montagem do Mega Menu
 */
document.addEventListener("touchstart", function () {
}, false);

$(function () {
    $('#wsnavtoggle').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    $('.overlapblackbg').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    $('.wsmenu-list > li').has('.wsmenu-submenu').prepend('<span class="wsmenu-click"><i></i></span>');
    $('.wsmenu-list > li').has('.wsshoptabing').prepend('<span class="wsmenu-click"><i></i></span>');
    $('.wsmenu-list > li').has('.megamenu').prepend('<span class="wsmenu-click"><i></i></span>');
    $('.wsmenu-click, .wsmenu-list > li > a').click(function () {
        $(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
        $(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp();
        $(this).siblings('.wsmenu-submenu').slideToggle();
        $(this).siblings('.megamenu').slideToggle();

    });
    $('.wsmenu').swipeleft(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    $('#hamburger').on('click', function () {
        $('#wsnavtoggle').trigger('click');
    });
    if (window.innerWidth < 960) {
        $('.menuheadermobile > svg').remove();
        $('.menuheader').appendTo('.menuheadermobile')
    }
    // FOOTER
    $('footer ._dropdown .title').on('click', function () {
        $(this).parents('._dropdown').toggleClass('_active');
    });
    $('.backToTop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop : 0},1000);
    });
});