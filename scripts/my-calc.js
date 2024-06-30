document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    const calculatorContainer = document.querySelector('.calculator-container');
    const basicBtns = document.querySelector('.basic-operators');
    let screen = document.querySelector('.screen');

    basicBtns.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'more-or-less':
                displayValue('+/-');
                break;
            case 'numberZero':
                displayValue('0');
                break;
            case 'dot':
                displayValue('.');
                break;
            case 'equal':
                displayValue('=');
                break;
            case 'numberOne':
                displayValue('1');
                break;
            case 'numberTwo':
                displayValue('2');
                break;
            case 'numberThree':
                displayValue('3');
                break;
            case 'addition':
                displayValue('+');
                break;
            case 'numberFour':
                displayValue('4');
                break;
            case 'numberFive':
                displayValue('5');
                break;
            case 'numberSix':
                displayValue('6');
                break;
            case 'substraction':
                displayValue('-');
                break;
            case 'numberSeven':
                displayValue('7');
                break;
            case 'numberEight':
                displayValue('8');
                break;
            case 'numberNine':
                displayValue('9');
                break;
            case 'multiplication':
                displayValue('*');
                break;
            case 'divideByNValue':
                displayValue('1/x');
                break;
            case 'powerOfTwo':
                displayValue('x2');
                break;
            case 'power':
                displayValue('2Vx');
                break;
            case 'division':
                displayValue('/');
                break;
            case 'modulo':
                displayValue('%');
                break;
            case 'clearEverything':
                displayValue('CE');
                break;
            case 'clear':
                displayValue('C');
                break;
            case 'backspace':
                displayValue('<--');
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

function displayValue(value=0) {
    let displayedValue = document.querySelector('.screen');
    let number1 = '';
    let number2 = '';
    let operator = ''

    if (displayedValue.textContent === '0') {
        displayedValue.textContent = '';
    }


    
    if (value === '/') {
        number1 = displayedValue.textContent;
        displayedValue.textContent = '';
        operator = '/';

    } else if (value === '=') {
        number2 = displayedValue.textContent;
        console.log(`Formula: ${number1} ${operator} ${number2}`);
        // const result = operate(number1, number2, operator);
        displayedValue.textContent = result;
    }
        
    if (displayedValue != '/' || displayedValue != '*' || displayedValue != '-' || displayedValue != '+' || displayedValue != '=' || displayedValue != 'C') {
        displayedValue.textContent += value;
    }

    if (value === 'C' || value === 'CE') {
        displayedValue.textContent = '0';
    }
        // if (value === 'C') {
            //     number1 = 0;
            //     number2 = 0;
            //     operator = '';
            //     displayedValue.textContent = '0';
            // }

    // switch (value) {
    //     case '/':
    //         number1 = displayedValue.textContent;
    //         displayedValue.textContent = ''
    //         operator = '/';
    //         // displayedValue.textContent += `${number1}/`;
    //     case '*':
    //         number1 = displayedValue.textContent;
    //         operator = '*';
    //         // displayedValue.textContent += `${number1}*`;
    //     // case '-':
    //     //     number1 = parseInt(displayedValue.textContent);
    //     //     operator = '-';
    //     //     displayedValue.textContent += `${number1}-`;
    //     // case '+':
    //     //     number1 = parseInt(displayedValue.textContent);
    //     //     operator = '+';
    //     //     displayedValue.textContent += `${number1}+`;
    //     case '=':
    //         number2 = displayedValue.textContent;
    //         console.log(`Formula: ${number1} ${operator} ${number2}`)
    //         // const result = operate(number1, number2, operator);
    //         displayedValue.textContent = result;
        // case 'C':
        //     number1 = 0;
        //     number2 = 0;
        //     operator = '';
        //     displayedValue.textContent = '0';
    // }
    
}


let number1 = undefined;
let number2 = undefined;
let operator = undefined;
let value = 0;

console.log(divide(75, 3))

displayValue();
