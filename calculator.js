let display = document.getElementById('display'); 
let dotClickable = true;

function appendToDisplay(value) {
    display.textContent += value;
}

function cancel() {
    display.textContent = '';
    
    dotClickable = true;
}

function root(){
    let userInput = display.textContent;
    userInput =userInput*userInput
    display.textContent = userInput
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
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
    display.textContent=math.evaluate(userVal)
}

