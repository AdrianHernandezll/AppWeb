$(document).ready(function () {
    /**------------Encoger Navbar----------------- */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 89) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /**-----------Video popup--------------------- */
    const videoSrc = $('#player-1').attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $('#player-1').attr("src", " ")
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }
        }
    });
});