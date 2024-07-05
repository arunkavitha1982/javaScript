function button() {
    let input = document.getElementById("number").value;
    document.getElementById("for").innerHTML = "";
    document.getElementById("While").innerHTML = "";
    if (isNaN(input) || input === "") {
        alert("Please enter a valid number.");
        return;
    }
    let num = parseInt(input);
    let forResult = "";
    for (let i = 1; i <= 10; i++) {
        forResult += `${i} x ${num} = ${num * i}<br>`;
    }
    document.getElementById("for").innerHTML = forResult;
    let whileResult = "";
    let i = 1;
    while (i <= 10) {
        whileResult += `${i} x ${num} = ${num * i}<br>`;
        i++;
    }
    document.getElementById("While").innerHTML = whileResult;
}


function submit() {
    let firstNumber = document.getElementById("first").value;
    let secondNumber = document.getElementById("second").value;
    let thirdNumber = document.getElementById("third").value;

    let resultText;
    if (isNaN(firstNumber) || firstNumber === "") {
        alert("Please enter a valid number.");
        return;
    }
    else{
        if (firstNumber > secondNumber) {
            if (firstNumber > thirdNumber) {
                resultText = "First Number is Big";
            } else if (firstNumber < thirdNumber) {
                resultText = "Third Number is Big";
            } else {
                resultText = "First and Third Numbers are Equal and Big";
            }
        } else if (firstNumber < secondNumber) {
            if (secondNumber > thirdNumber) {
                resultText = "Second Number is Big";
            } else if (secondNumber < thirdNumber) {
                resultText = "Third Number is Big";
            } else {
                resultText = "Second and Third Numbers are Equal and Big";
            }
        } else {
            if (firstNumber > thirdNumber) {
                resultText = "First and Second Numbers are Equal and Big";
            } else if (firstNumber < thirdNumber) {
                resultText = "Third Number is Big";
            } else {
                resultText = "All Three Numbers are Equal";
            }
        }
    }
    document.getElementById("result").innerHTML = resultText;
}
