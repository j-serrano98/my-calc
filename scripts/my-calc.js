document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    const calculatorContainer = document.querySelector('.calculator-container');
    const basicBtns = document.querySelector('.basic-operators');
    let screen = document.querySelector('.screen');

    basicBtns.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'more-or-less':
                sendKeyPressed('+/-');
                break;
            case 'numberZero':
                sendKeyPressed('0');
                break;
            case 'dot':
                sendKeyPressed('.');
                break;
            case 'equal':
                sendKeyPressed('=');
                break;
            case 'numberOne':
                sendKeyPressed('1');
                break;
            case 'numberTwo':
                sendKeyPressed('2');
                break;
            case 'numberThree':
                sendKeyPressed('3');
                break;
            case 'addition':
                sendKeyPressed('+');
                break;
            case 'numberFour':
                sendKeyPressed('4');
                break;
            case 'numberFive':
                sendKeyPressed('5');
                break;
            case 'numberSix':
                sendKeyPressed('6');
                break;
            case 'substraction':
                sendKeyPressed('-');
                break;
            case 'numberSeven':
                sendKeyPressed('7');
                break;
            case 'numberEight':
                sendKeyPressed('8');
                break;
            case 'numberNine':
                sendKeyPressed('9');
                break;
            case 'multiplication':
                sendKeyPressed('*');
                break;
            case 'divideByNValue':
                sendKeyPressed('1/x');
                break;
            case 'powerOfTwo':
                sendKeyPressed('x2');
                break;
            case 'power':
                sendKeyPressed('2Vx');
                break;
            case 'division':
                sendKeyPressed('/');
                break;
            case 'modulo':
                sendKeyPressed('%');
                break;
            case 'clearEverything':
                sendKeyPressed('CE');
                break;
            case 'clear':
                sendKeyPressed('C');
                break;
            case 'backspace':
                sendKeyPressed('<--');
                break;
        }
    })
})

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(number1, number2, operator) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
        default:
            return '0'
    }
}

function displayValue(num1, num2, op) {
    let displayedValue = document.querySelector('.screen');
    
    if (!num1 && !num2 && !op) {
        displayedValue.textContent = 0;
    }

    if (num1) {
        displayedValue.textContent = num1;
    }

    if (op) {
        displayedValue.textContent = `${num1}${op}`
    }
    
    if (num2) {
        displayedValue.textContent = `${num1}${op}${num2}`
    }
}

function sendKeyPressed(value) {
    if (!isNaN(value)) {
       if(number1 === undefined && operator === undefined) {
        number1 = parseInt(value);
       } else if (number1 !== undefined && operator == undefined) {
        addValue = `${number1}${value}`;
        number1 = parseInt(addValue);
       } else if (number1 !== undefined && number2 === undefined) {
        number2 = parseInt(value);
       } else if (number1 !== undefined && number2 !== undefined) {
        addValue = `${number2}${value}`;
        number2 = parseInt(addValue);
       }
    } else if (value === '+' || value === '-' || value === '/' || value === '*') {
        if (number2 === undefined) {
            operator = value;
        } else if (number2 !== undefined) {
            number1 = operate(number1, number2, operator);
            number2 = undefined;
            operator = value;
        }
    }
    
    displayValue(number1, number2, operator)

    console.log(`Number 1: ${number1}
Operator: ${operator}
Number 2: ${number2}`)
}

// function storeOperands()

let number1 = undefined;
let number2 = undefined;
let operator = undefined;
let value = 0;

console.log(divide(75, 3))

displayValue();
