$(".hide").on("click", function () {
    $(".gojo").hide();
});

$(".show").on("click", function () {
    $(".gojo").show();
});

$(".toggle").on("click", function () {
    $(".gojo").toggle();
});

$(".fadein").on("click", function () {
    $(".giyu").fadeIn();
});

$(".fadeout").on("click", function () {
    $(".giyu").fadeOut();
});

$(".fadetoggle").on("click", function () {
    $(".giyu").fadeToggle();
});

$(".slideup").on("click", function () {
    $(".dabi").slideUp();
});

$(".slidedown").on("click", function () {
    $(".dabi").slideDown();
});

$(".slidetoggle").on("click", function () {
    $(".dabi").slideToggle();
});

$(".opacity").on("click", function () {
    $(".trunks").animate({ opacity: 0.5 });
});

$(".change").on("click", function () {
    $(".trunks").animate({ width: "1000px", height: "600px" });
});

$(".margin").on("click", function () {
    $(".trunks").animate({ margin: "100px" });
});

$(".showHIDE").on("click", function () {
    $(".ichigo").hide().show().animate({ opacity: 0.8 });
});

$(".fadeINOUT").on("click", function () {
    $(".ichigo").fadeOut().fadeIn().animate({ opacity: 0.5 });
});

$(".slideUPDOWN").on("click", function () {
    $(".ichigo").slideUp().slideDown().animate({ opacity: 0.3 });
});
