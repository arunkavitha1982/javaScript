let display = document.getElementById('display');
let dotClickable = true;

function appendToDisplay(value) {
    if(value==='.'){
        display.textContent+=value
    }
    else if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
    }
    else {
        display.textContent += value;
    }
}

function cancel() {
    display.textContent = 0;
    dotClickable = true;
}

function root() {
    let userInput = display.textContent;
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
    appendToDisplay(value);
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
    try {
        display.textContent = math.evaluate(userVal);
    } catch (error) {
        display.textContent = 'Error';
    }
}



