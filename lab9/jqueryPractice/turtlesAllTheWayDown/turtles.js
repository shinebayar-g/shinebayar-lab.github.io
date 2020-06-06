$(function () {
    $(document).scroll(turtles);
    turtles();
});

function turtles() {
    while ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $(document.body).append(
            $("<div>").addClass('turtle'));
    }
}
