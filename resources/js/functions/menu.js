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
        $(this).toggleClass('ws-activearrow').parent().siblings().children().toggleClass('ws-activearrow');
        $(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp();
        $(this).siblings('.wsmenu-submenu').slideToggle();
        $(this).siblings('.megamenu').slideToggle();

    });
    $('.wsmenu').swipeleft(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });

});