const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        console.log("syntax error");
    }
}

function clearDisplay() {
    display.value = " ";
}