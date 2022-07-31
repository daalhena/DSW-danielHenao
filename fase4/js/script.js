$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img width='30px' src='images/menu.png'></a>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img width='20px' src='images/cerrar.png'></a>");
        }
    });
    
    $(".sub-menu a").one("click", false);
});
