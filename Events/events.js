document.querySelector(".yellow").addEventListener("click", function () {
    document.querySelector("h1").style.color = "yellow";
});

$(".purple").click(function () {
    $("h1").css("color", "purple");
});

$(".turquoise").mouseover(function () {
    $("h1").css("color", "turquoise");
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});

$("h1").on("click", function () {
    $("h1").css("color", "black");
});

$("div").before("<button>Before The Div Tag</button>");

$("div").after("<button>After The Div Tag</button>");

$("div").prepend("<button>Prepend Before The Text Value</button>");

$("div").append("<button>Append After The Text Value</button>");

$("footer").remove();
