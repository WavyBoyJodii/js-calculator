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

// initial calculator display
let firstValue = [0];
// array for operators and numbers to be operated on
let runningMaths = [];
// array for display
let numberBuilder = [];

let decimalCounter = 0;

let operatorCounter = 0;

let clearCounter = 0;

let equalsCounter = 0;

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

    addButton.addEventListener('click', addOperatorPress);
    subtractButton.addEventListener('click', addOperatorPress);
    multiplyButton.addEventListener('click', addOperatorPress);
    divideButton.addEventListener('click', addOperatorPress);

    equalsButton.addEventListener('click', addEqualsPress);

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

clearButton.addEventListener('click', () => whichClear());

function add(x,y) {
    let total = Number(x) + Number(y);
    return total
}

function subtract(x,y) {
    let total = x-y;
    return total
}

function multiply(x,y) {
    let total = x*y;
    return total
}

function divide(x,y) {
    let total = x/y;
    return total
}

function operate(operater,x,y){
    switch (operater) {
        case "+":
            runningMaths.splice(0,3, add(x,y));
            break;
        case "-":
            runningMaths.splice(0,3, subtract(x,y));
            break;
        case "*":
            runningMaths.splice(0,3, multiply(x,y));
            break;
        case "??":
            runningMaths.splice(0,3, divide(x,y));
            break;            
    }
}

function numberPush(x) {
    numberBuilder.push(x)
}

function operaterPush(x) {
    runningMaths.push(x);
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

function checkMathValueLength () {
    let mathString = runningMaths.toString().replace(/,/g,"")
    if (mathString.length > 7) {
        display.style.fontSize = "35px";
    }

    if (mathString.length > 13) {
        display.style.fontSize = "25px";
    }

    if (mathString.length > 21) {
        display.style.fontSize = "15px";
    }

    if (mathString.length > 35) {
        display.style.fontSize = "8px";
    }
}

function addToMaths() {
    runningMaths.push(numberBuilder.toString().replace(/,/g,""));
}

function clearDisplay() {
    numberBuilder = [];
    // updateDisplay();
    initCalc();
    clearCounter++;
    decimalCounter = 0;
    display.style.fontSize = '70px';
    display.textContent = firstValue;
}

function fullClear() {
    numberBuilder = [];
    runningMaths = [];
    initCalc();
    clearCounter = 0;
    decimalCounter = 0;
    display.style.fontSize = '70px';
    display.textContent = firstValue;
}

function whichClear() {
    (clearCounter === 1) ? fullClear() : clearDisplay();

}

function numTooLong() {
    numberBuilder = [];
    updateDisplay();
    alert("Number Too Long Sorry!");
    display.textContent = firstValue.toString().replace(/,/g,"");
}
function press(x) {
    numberPush(x);
    checkNumLength();
    operatorCounter = 0;
    updateDisplay();
}

// function checkAddMaths () {
//     if (runningMaths.length === 1 && equalsCounter === 1) return
//     if (runningMaths.length === 1 && equalsCounter === 0){
//         runningMaths.splice(0,1);
//         addToMaths();
//     }

// }

function checkAddMaths() {
    if (numberBuilder.length === 0 && runningMaths.length === 1) return
    if (numberBuilder.length > 0 && runningMaths.length === 1) {
        runningMaths.splice(0,1);
        addToMaths();
    }
    if (numberBuilder.length > 0 && runningMaths.length === 0) {
        addToMaths();
    }
    if (numberBuilder.length > 0 && runningMaths.length > 1) {
        addToMaths();
    }

}

function pressOperator(x) {
    checkAddMaths();
    operatorCounter++;
    operaterPush(x)
    checkCounterLength();
    checkMaths();
    numberBuilder = [];
    decimalCounter = 0;
    equalsCounter = 0;
    display.style.fontSize = '70px';
    roundDecimals();
}

function pressEquals() {
    if (runningMaths.length === 1) return
    if (numberBuilder.length === 0) return
    addToMaths(); 
    checkMaths();
    numberBuilder = [];
    equalsCounter++;
    decimalCounter = 0;
    // checkMathValueLength();
    roundDecimals();
}

function pressForDec(x) {
    if (decimalCounter > 0) return
    numberPush(x);
    checkNumLength();
    updateDisplay();
    decimalCounter++;
    // removeDecimal();
    // decimalButton.classList.remove("numbers-hover");
}

function addDecPress() {
    this.addEventListener('click', pressForDec(`${this.textContent}`));
}

function addPress() {
    this.addEventListener('click', press(`${this.textContent}`));
}
function addOperatorPress() {
    this.addEventListener('click', pressOperator(`${this.textContent}`));
}

function addEqualsPress() {
    this.addEventListener('click', pressEquals(`${this.textContent}`));
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

function checkMaths() {
	if (runningMaths.length === 3) {operate(runningMaths[1], runningMaths[0],runningMaths[2])}
	if (runningMaths.length > 3) {
	operate(runningMaths[1], runningMaths[0],runningMaths[2])
	} else return	
}

function noInfinity() {
    if (runningMaths[0] === Infinity || runningMaths[0] === -Infinity) {
        display.style.fontSize = "30px";
        display.textContent = "To Infinity And Beyond";
    } else 
        display.textContent = runningMaths[0];
}


function roundDecimals() {
    let char = "."
    let zeroIndex = runningMaths[0];
    if (zeroIndex.toString().includes(char)) {
        let dividedArray = zeroIndex.toString().split(".");
        let trueInteger = dividedArray[0];
        if (trueInteger.length < 8) {
            display.style.fontSize = "70px";
        }
        if (trueInteger.length > 7) {
            display.style.fontSize = "35px";
        }
    
        if (trueInteger.length > 13) {
            display.style.fontSize = "25px";
        }
    
        if (trueInteger.length > 21) {
            display.style.fontSize = "15px";
        }
    
        if (trueInteger.length > 35) {
            display.style.fontSize = "8px";
        }
        display.textContent = Number(zeroIndex).toFixed(1);
    } else {
        checkMathValueLength();
        noInfinity();
    }
}

Window.onload = initCalc();