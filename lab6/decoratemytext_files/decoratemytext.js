function biggerDecoration() {
    const textarea1 = document.getElementById("textarea1");
    const style = window.getComputedStyle(textarea1).fontSize;
    const fontSize = parseFloat(style);
    textarea1.style.fontSize = fontSize + 2 + "pt";
}

function bling() {
    const bling = document.getElementById("bling");
    if (bling.checked) {
        textarea1.style.fontWeight = "bold";
        textarea1.style.color = "green";
        textarea1.style.textDecoration = "underline";
    } else {
        textarea1.style.fontWeight = "normal";
    }
}
