let display = document.getElementById('display');
let dotClickable = true;
function appendToDisplay(value) {
    if (value === '.') {
        display.textContent += value
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
function squar() {
    let userInput = display.textContent;
    userInput = userInput * userInput;
    display.textContent = userInput
}
function deleteLast() {
    let text = display.textContent;
    if (text === 'cos(' || display.textContent === 'sin(' || display.textContent === 'tag(' || display.textContent === 'log(') {
        display.textContent = '0';
    } else if (text.length > 1) {
        display.textContent = text.slice(0, -1);
    } else {
        display.textContent = '0';
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
    try {
        display.textContent = math.evaluate(userVal);
    } catch (error) {
        display.textContent = 'Error';
    }
}



