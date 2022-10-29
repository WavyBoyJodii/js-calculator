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
let runningMaths = [];
let numberBuilder = [];

let decimalCounter = 0;

let operatorCounter = 0;

display.textContent = firstValue.toString().replace(/,/g,"");

function initCalc() {

    one.addEventListener('click', addPress);
    two.addEventListener('click', addPress);
    three.addEventListener('click', addPress);
    four.addEventListener('click', addPress);
    five.addEventListener('click', addPress);
    six.addEventListener('click', addPress);
    seven.addEventListener('click', addPress);
    eight.addEventListener('click', addPress);
    nine.addEventListener('click', addPress);
    zero.addEventListener('click', addPress);
    decimalButton.addEventListener('click', addDecPress);

    addButton.addEventListener('click', addPress);
    subtractButton.addEventListener('click', addPress);
    multiplyButton.addEventListener('click', addPress);
    divideButton.addEventListener('click', addPress);

    one.classList.add("numbers-hover");
    two.classList.add("numbers-hover");
    three.classList.add("numbers-hover");
    four.classList.add("numbers-hover");
    five.classList.add("numbers-hover");
    six.classList.add("numbers-hover");
    seven.classList.add("numbers-hover");
    eight.classList.add("numbers-hover");
    nine.classList.add("numbers-hover");
    zero.classList.add("numbers-hover");
    decimalButton.classList.add("numbers-hover");

    addButton.classList.add("maths-hover");
    subtractButton.classList.add("maths-hover");
    multiplyButton.classList.add("maths-hover");
    divideButton.classList.add("maths-hover");
}

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
    if (numberBuilder.length > 35) {
        one.removeEventListener('click', addPress);
        two.removeEventListener('click', addPress);
        three.removeEventListener('click', addPress);
        four.removeEventListener('click', addPress);
        five.removeEventListener('click', addPress);
        six.removeEventListener('click',addPress);
        seven.removeEventListener('click',addPress);
        eight.removeEventListener('click',addPress);
        nine.removeEventListener('click',addPress);
        zero.removeEventListener('click',addPress);
        decimalButton.removeEventListener('click',addDecPress);
        
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
        // numTooLong();
    }
}

function clearDisplay() {
    numberBuilder = [];
    updateDisplay();
    initCalc();
    display.style.fontSize = '70px';
    display.textContent = firstValue;
}

function numTooLong() {
    numberBuilder = [];
    updateDisplay();
    alert("Number Too Long Sorry!");
    display.textContent = firstValue.toString().replace(/,/g,"");
}
function press(x) {
    if (x === "÷" || x === "*" || x === "+" || x === "-") {
        operatorCounter++;
    }
    numberPush(x);
    checkNumLength();
    checkCounterLength();
    updateDisplay();
}

function pressForDec(x) {
    numberPush(x);
    checkNumLength();
    updateDisplay();
    removeDecimal();
    decimalButton.classList.remove("numbers-hover");
}

function addDecPress() {
    this.addEventListener('click', pressForDec(`${this.textContent}`));
}

function addPress() {
    this.addEventListener('click', press(`${this.textContent}`));
}

function removeDecimal() {
    decimalButton.removeEventListener('click', addDecPress);
}

function removeOperator() {
    addButton.removeEventListener('click', addPress);
    subtractButton.removeEventListener('click', addPress);
    multiplyButton.removeEventListener('click', addPress);
    divideButton.removeEventListener('click', addPress);

    addButton.classList.remove("maths-hover");
    subtractButton.classList.remove("maths-hover");
    multiplyButton.classList.remove("maths-hover");
    divideButton.classList.remove("maths-hover");
}

function checkCounterLength() {
    if (operatorCounter === 1) {
        removeOperator();
    }
}

Window.onload = initCalc();