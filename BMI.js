function calculateBMI() {
    let weight = (document.getElementById('weight').value);
    let height = (document.getElementById('height').value);
    let displayresult = document.getElementById('result')
    height = height / 100;
    let userBMI = bmi_calc(weight, height);
    let BMIresult;
    if (!weight || !height) {
        BMIresult = `Please enter valid weight and height values.`;
    }
    else if (userBMI <= 18.0) {
        BMIresult = `Your BMI is ${userBMI}. You are underweight. 😒😒😢`;
    } else if (userBMI <= 25.0) {
        BMIresult = `Your BMI is ${userBMI}. You are in a healthy weight. 🥳👌`;
    } else if (userBMI <= 35.0) {
        BMIresult = `Your BMI is ${userBMI}. You are overweight. 😧😨`;
    } else {
        BMIresult = `Your BMI is ${userBMI}. You are in obesity range. 😱`;
    }
    displayresult.textContent = BMIresult;
}

function bmi_calc(weight, height) {
    return weight / (height * height)
}