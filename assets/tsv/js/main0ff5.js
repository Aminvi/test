(function($) {
    // Toggler Show Collapse JS
    $(document).ready(function() {
        $(".navbar-toggler").click(function() {
            $(this).toggleClass("active");
            $(".navbar-collapse").toggleClass("active");
        });
    });
})(jQuery);


 // Header scroll class
 $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('.site_header').addClass('header-scrolled');
    } else {
        $('.site_header').removeClass('header-scrolled');
    }
});

 if ($(window).scrollTop() > 20) {
    $('.site_header').addClass('header-scrolled');
}
