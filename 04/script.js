"use strict";

for (let i = 0; i < 40; i++) {
    let element = document.createElement("div");
    element.style.width = "40px";
    element.style.height = "40px";
    element.innerHTML = i + 1;
    if (i % 2 == 1) {
        element.style.backgroundColor = "green";
    }
    document.body.appendChild(element);
}