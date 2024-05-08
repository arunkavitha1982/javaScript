let display = document.getElementById('display'); 
let answerDisplay = document.getElementById('display2');
let dotClickable = true;

function appendToDisplay(value) {
    display.textContent += value;
}

function cancel() {
    display.textContent = '';
    answerDisplay.textContent = '';
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
    var output;
    var userVal = display.textContent; 
    var prefix = "";
    
    if (userVal.startsWith("-")) {
        prefix = "-";
        userVal = userVal.substring(1);
    }

    
    
    if (userVal.includes("+")) {
        var userInput = userVal.split("+");
        var firstVal = parseFloat(userInput[0]);
        
        if (prefix === "-") {
            firstVal = parseFloat(prefix + userInput[0]);
        }
        
        output = firstVal + parseFloat(userInput[1]);
    } else if (userVal.includes("-")) {
        var userInput = userVal.split("-");
        var firstVal = parseFloat(userInput[0]);
        
        if (prefix === "-") {
            firstVal = parseFloat(prefix + userInput[0]);
        }
        
        output = firstVal - parseFloat(userInput[1]);
    } else if (userVal.includes("*")) {
        var userInput = userVal.split("*");
        var firstVal = parseFloat(userInput[0]);
        
        if (prefix === "-") {
            firstVal = parseFloat(prefix + userInput[0]);
        }
        
        output = firstVal * parseFloat(userInput[1]);
    } else if (userVal.includes("/")) {
        var userInput = userVal.split("/");
        var firstVal = parseFloat(userInput[0]);
        
        if (prefix === "-") {
            firstVal = parseFloat(prefix + userInput[0]);
        }
        
        output = firstVal / parseFloat(userInput[1]);
    }

    display.textContent = ''; 
    answerDisplay.textContent = removeZeroDecimal(output); 
}

function removeZeroDecimal(result) {
    if (Number.isInteger(result)) {
        return result;
    } else {
        return result.toFixed(2); 
    }
}
