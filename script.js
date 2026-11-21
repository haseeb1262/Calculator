let display = document.getElementById("result");

let buttons = document.querySelectorAll(".buttons button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let value = button.dataset.value;
        let action = button.dataset.action;

        if (action === "clear") {
            clearDisplay();
        }

        else if (action === "delete") {
            deleteLast();
        }

        else if (action === "percentage") {
            percentage();
        }

        else if (action === "calculate") {
            calculateResult();
        }

        else {
            addValue(value);
        }
    });
});

function addValue(value) {

    if (display.value === "0" && value !== ".") {
        display.value = value;
    }

    else {
        display.value += value;
    }

}

function clearDisplay() {
    display.value = "0";

}

function deleteLast() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }

}

function percentage() {

    try {
        let answer = eval(display.value);
        display.value = answer / 100;
    }

    catch {
        display.value = "Error";
    }

}

function calculateResult() {
    try {

        let answer = eval(display.value);
        if (isFinite(answer)) {
            display.value = answer;
        }
        else {
            display.value = "Error";
        }
    }

    catch {
        display.value = "Error";
    }
}