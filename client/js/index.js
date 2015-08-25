$(document).ready(function () {
    $("select").select2({
        minimumResultsForSearch: Infinity,
        width: 'resolve'
    });

//Slow scroll
    var jump = function (e) {
        if (e) {
            e.preventDefault();
            var target = $(this).attr("href");
        } else {
            var target = location.hash;
        }

        $('html,body').animate(
            {
                scrollTop: $(target).offset().top
            }, 300, function () {
                location.hash = target;
            });

    };

    $('html, body').hide();

    $(document).ready(function () {
        $('.slow-scroll a[href^=#]').bind("click", jump);

        if (location.hash) {
            setTimeout(function () {
                $('html, body').scrollTop(0).show();
                jump();
            }, 0);
        } else {
            $('html, body').show();
        }
    });
});
//Navbar auto-hide on click
$(function () {
    $('.navbar-nav').on('click', function () {
        if ($('.navbar-header .navbar-toggle').css('display') != 'none') {
            $(".navbar-header .navbar-toggle").trigger("click");
        }
    });
});



