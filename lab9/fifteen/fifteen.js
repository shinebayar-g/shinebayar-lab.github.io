$(function () {
    "use strict";

    let blank_row = 3;
    let blank_col = 3;

    init();

    // original base script conversion
    function init() {
        $("#puzzlearea div")
            .addClass("puzzlepiece")
            .each(function (index, e) {
                e = $(e);

                let col = index % 4;
                let row = Math.floor(index / 4);

                let x = (index % 4) * 100;
                let y = Math.floor(index / 4) * 100;

                e.css({
                    "background-image": "url('background.jpg')",
                    "background-position": -x + "px " + -y + "px",
                    left: x + "px",
                    top: y + "px",
                })
                    .attr("id", "square_" + row + "_" + col)
                    .click(moveTile)
                    .mouseover(highlightMoveable)
                    .mouseout(resetHighlighted);
            });

        $("#shufflebutton").click(shuffle);
    }

    function moveTile() {
        if (isMoveable(this)) {
            let row = parseInt($(this).css("top")) / 100;
            let col = parseInt($(this).css("left")) / 100;

            $(this).css("left", blank_col * 100);
            $(this).css("top", blank_row * 100);

            blank_col = col;
            blank_row = row;
        }
    }

    function isMoveable(tile) {
        let left = parseInt($(tile).css("left"));
        let top = parseInt($(tile).css("top"));
        let blank_left = blank_col * 100;
        let blank_top = blank_row * 100;

        let moveable = false;
        if (left === blank_left) {
            if (top === blank_top - 100 || top === blank_top + 100) {
                moveable = true;
            }
        } else if (top === blank_top) {
            if (left === blank_left - 100 || left === blank_left + 100) {
                moveable = true;
            }
        }

        return moveable;
    }

    function highlightMoveable() {
        if (isMoveable(this)) {
            $(this).addClass("movablepiece");
        }
    }

    function resetHighlighted() {
        $(this).removeClass("movablepiece");
    }

    // teacher's algorithm :D
    function shuffle() {
        for (let i = 0; i <= 1000; i++) {
            let possible_moveable_squares_ids = [
                "square_" + blank_row + "_" + (blank_col - 1),
                "square_" + blank_row + "_" + (blank_col + 1),
                "square_" + (blank_row + 1) + "_" + blank_col,
                "square_" + (blank_row - 1) + "_" + blank_col,
            ];

            for (let idx = 0; idx < possible_moveable_squares_ids.length; idx++) {
                let random_index = Math.floor(Math.random() * possible_moveable_squares_ids.length);
                let square_id = possible_moveable_squares_ids[random_index];
                if ($("#" + square_id).length !== 0) {
                    $("#" + square_id).trigger("click");
                }
            }
        }
    }
});
