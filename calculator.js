
let display = document.getElementById('display'); 
display.textContent= 0;
let dotClickable = true;

function appendToDisplay(value) {
    display.textContent += value;
}

function cancel() {
    display.textContent = 0;    
    dotClickable = true;
}

function root() {
    let userInput = parseFloat(display.textContent);
    let result = Math.sqrt(userInput);
    display.textContent = result;
}

function deleteLast() {
    let text = display.textContent;
    if (text.length > 1) {
        display.textContent = text.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}


function onDigit(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        appendToDisplay(value);
    }
}

function dot() {
    if (dotClickable) {
        appendToDisplay('.');
        dotClickable = false;
    }
}

function operator(value) {
    appendToDisplay(value);
    dotClickable = true;
}

function equal() {
    var userVal = display.textContent;
    display.textContent = eval(userVal);
}


