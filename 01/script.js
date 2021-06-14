"use strict";

function time() {
    let seconds = parseInt(document.getElementById("input").value);
    if (seconds >= 0 && seconds <= 60 * 60 * 24) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - hours * 3600) / 60);
        let second = seconds - hours * 3600 - minutes * 60;

        let zero1 = "", zero2 = "", zero3 = "";
        if (hours < 10) {
            zero1 = "0";
        }

        if (minutes < 10) {
            zero2 = "0";
        }

        if (second < 10) {
            zero3 = "0";
        }

        document.getElementById("result").innerHTML = zero1 + hours + ":" + zero2 + minutes + ":" + zero3 + second;
    } else {
        document.getElementById("result").innerHTML = "Wrong number";
    }
}