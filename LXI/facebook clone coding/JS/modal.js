$(function () {
    $(".bi-messenger").click(function () {
        $(".modal").fadeIn();
    })
    $("#main,#advice,#currentWeather").click(function () {
        $("#modal").fadeOut();
    })
})
$(function () {
    $(".bi-bell").click(function () {
        $(".notification").fadeIn();
    })
    $("#main,#advice,#currentWeather").click(function () {
        $("#modal").fadeOut();
    })
})