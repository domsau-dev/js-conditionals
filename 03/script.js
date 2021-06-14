"use strict";

function quadraticEquation() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let D = b ** 2 - 4 * a * c;

    if (D < 0) {
        document.getElementById("result").innerHTML = "D < 0";
    } else if (D == 0) {
        let x = -b / (2 * a);
        document.getElementById("result").innerHTML = "x = " + x;
    } else {
        let x1 = (-b + D ** 0.5) / (2 * a);
        let x2 = (-b - D ** 0.5) / (2 * a);
        document.getElementById("result").innerHTML = "x1 = " + x1 + "<br>"
        + "x2 = " + x2;
    }
}