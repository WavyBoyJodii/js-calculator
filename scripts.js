const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimalButton = document.getElementById("decimal");

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.querySelector(".equals");


let firstValue = [0];
let numberBuilder = [];


display.textContent = firstValue.toString().replace(/,/g,"");

one.addEventListener('click', () => press(1));
two.addEventListener('click', () => press(2));
three.addEventListener('click', () => press(3));
four.addEventListener('click', () => press(4));
five.addEventListener('click', () => press(5));
six.addEventListener('click', () => press(6));
seven.addEventListener('click', () => press(7));
eight.addEventListener('click', () => press(8));
nine.addEventListener('click', () => press(9));
zero.addEventListener('click', () => press(0));
decimalButton.addEventListener('click', () => pressForDec("."));

clearButton.addEventListener('click', () => clearDisplay());

function add(x,y) {
    let total = x+y;
    return console.log(total)
}

function subtract(x,y) {
    let total = x-y;
    return console.log(total)
}

function multiply(x,y) {
    let total = x*y;
    return console.log(total)
}

function divide(x,y) {
    let total = x/y;
    return console.log(total)
}

function operate(operater,x,y){
    let action
    switch (operater) {
        case "+":
            action = add(x,y);
            break;
        case "-":
            action = subtract(x,y);
            break;
        case "*":
            action = multiply(x,y);
            break;
        case "÷":
            action = divide(x,y);
            break;            
    }
    return action
}

function numberPush(x) {
    numberBuilder.push(x)
}

function updateDisplay() {
    display.textContent = numberBuilder.toString().replace(/,/g,"");
}

function checkNumLength() {
    if (numberBuilder.length > 7) {
        display.style.fontSize = "35px";
    }

    if (numberBuilder.length > 13) {
        display.style.fontSize = "25px";
    }

    if (numberBuilder.length > 21) {
        display.style.fontSize = "15px";
    }
    if (numberBuilder.length > 36) {
        one.removeEventListener('click',() => press());
        two.removeEventListener('click', () => press());
        three.removeEventListener('click', () => press());
        four.removeEventListener('click', () => press());
        five.removeEventListener('click', () => press());
        six.removeEventListener('click', () => press());
        seven.removeEventListener('click', () => press());
        eight.removeEventListener('click', () => press());
        nine.removeEventListener('click', () => press());
        zero.removeEventListener('click', () => press());
        
        one.classList.remove("numbers-hover");
        two.classList.remove("numbers-hover");
        three.classList.remove("numbers-hover");
        four.classList.remove("numbers-hover");
        five.classList.remove("numbers-hover");
        six.classList.remove("numbers-hover");
        seven.classList.remove("numbers-hover");
        eight.classList.remove("numbers-hover");
        nine.classList.remove("numbers-hover");
        zero.classList.remove("numbers-hover");
        decimalButton.classList.remove("numbers-hover");
    }
}

function clearDisplay() {
    numberBuilder = [];
    updateDisplay();
    display.textContent = firstValue;
}
function press(x) {
    numberPush(x);
    checkNumLength();
    updateDisplay();
}

function pressForDec(x) {
    numberPush(x);
    checkNumLength();
    updateDisplay();
    removeDecimal();
    decimalButton.classList.remove("numbers-hover");
}

function removeDecimal() {
    decimalButton.removeEventListener('click', () => pressForDec());
}