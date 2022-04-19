var elementId = null;
var titles = ["home", "me", "research", "contact"];

hide_show("home");

$(".main").on('mousemove', function(e) {
    var moveX = (e.pageX * -1 / 15);
    var moveY = (e.pageY * -1 / 15);
    $(".main").css("background-position", moveX + "px " + moveY + "px");
});

$(".sidebar").on("mouseover mouseout click", function(e) {
    if (e.target.id !== "") {
        elementId = e.target.id;
        if (e.type === "mouseover") {
            $("#" + elementId).css({
                "color": "#33E5FF",
                "text-decoration": "underline",
                "position": "relative",
                "top": "-1.2px"
            });
            document.getElementById(elementId).style.cursor = "pointer";
        } else if (e.type === "mouseout") {
            $("#" + elementId).css({
                "color": "white",
                "text-decoration": "none",
                "top": "1.2px"
            });
        } else if (e.type === "click") {
            hide_show(elementId.replace("_button", ""));
            document.getElementById("main_page").scrollTo(0, 0);
            if (e.target.id === "contact_button") {
                $("#ufo").css({
                    "width": "10%",
                    "height": "10%",
                    "left": "0px",
                    "padding-top": "100px"
                });
            } else {
                $("#ufo").css({
                    "width": "0%",
                    "height": "0%",
                    "padding-top": "2px"
                });
            }

        }
    }
});

function hide_show(elementClass) {
    for (var i = 0; i < titles.length; i++) {
        if (titles[i] !== elementClass) {
            $("." + titles[i]).hide();
            $("#" + titles[i] + "_button").show();
        } else {
            $("." + titles[i]).fadeIn();
            $("#" + titles[i] + "_button").hide();
        }
    }
}