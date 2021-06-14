"use strict";

function numbers() {
    let number = parseInt(document.getElementById("input").value);
    if (number > 99 && number < 1000) {
        let hundreds = Math.floor(number / 100);
        let tens = Math.floor((number - 100 * hundreds) / 10);
        let ones = Math.floor(number - 100 * hundreds - 10 * tens);

        let sum = hundreds + tens + ones;
        let avg = (hundreds + tens + ones) / 3;
        let multi = hundreds * tens * ones;

        document.getElementById("result").innerHTML = "Sum: " + sum + "<br>"
        + "Average: " + avg + "<br>" + "Product: " + multi;
    }
}