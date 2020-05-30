// Additional improvements:

// - Fixed turbo mode triggering animation start when it's not running (stopped).
// - Animation selection no longer shows whole animation frame. Better UX.
// - Start/Stop will continue from current frame rather than resetting whole animation sequence.
//   Makes it possible to pause frame by frame.

"use strict";

let timer = null;
let frames = null;
let frameNum;
let speed = 250;

window.onload = function () {
    document.getElementById("animation").onchange = selectAnimation;
    document.getElementById("size").onchange = changeSize;
    document.getElementById("startButton").onclick = startButtonHandler;
    document.getElementById("stopButton").onclick = stopButtonHandler;
    document.getElementById("turbo").onchange = changeSpeed;
}

function selectAnimation() {
    const animation = document.getElementById("animation");
    const mytextarea = document.getElementById("mytextarea");

    mytextarea.value = ANIMATIONS[animation.value].split("=====\n")[0];
    frames = mytextarea.value;
    frameNum = 0;
}

function changeSize() {
    const size = document.getElementById("size");
    const selectedSize = size.options[size.selectedIndex].value;
    const mytextarea = document.getElementById("mytextarea");
    mytextarea.style.fontSize = selectedSize;
}

function startButtonHandler() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("animation").disabled = true;

    if (timer === null) {
        timer = setInterval(startAnimation, speed);
    }
}

function stopButtonHandler() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("animation").disabled = false;

    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function startAnimation() {

    let currentFrame = ANIMATIONS[animation.value].split("=====\n");
    if (frameNum < currentFrame.length) {
        document.getElementById("mytextarea").value = currentFrame[frameNum];
        frameNum++;
    } else {
        document.getElementById("mytextarea").value = currentFrame[0];
        frameNum = 0;
    }
}

function changeSpeed() {
    if (document.getElementById("turbo").checked) {
        speed = 50;
        if (timer !== null) {
            clearInterval(timer);
            timer = setInterval(startAnimation, speed);
        }
    } else {
        speed = 250;
        if (timer !== null) {
            clearInterval(timer);
            timer = setInterval(startAnimation, speed);
        }
    }
}
