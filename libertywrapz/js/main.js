$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar_liberty").addClass("darknav");
    } else {
        $(".navbar_liberty").removeClass("darknav");
    }
});