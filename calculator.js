let display = document.getElementById('display'); 
let dotClickable = true;

function appendToDisplay(value) {
    display.textContent += value;
}

function cancel() {
    display.textContent = '';
    dotClickable = true;
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
    var userVal = display.textContent; // Using 'display' instead of 'usInput'
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

    display.textContent = removeZeroDecimal(output); // Using 'display' instead of 'usInput'
}

function removeZeroDecimal(result) {
    if (Number.isInteger(result)) {
        return result;
    } else {
        return result.toFixed(2); // Adjust decimal places as needed
    }
}
