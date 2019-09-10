// Buttons div
let buttons_div = document.querySelector('.buttons');
// The Array below will hold the values inserted
let values = []; 
// Check operation click
let operation = null;
// Variable exists to eliminate author name 
let first = true;
// Variable to determine the operator
let operator = null;
// Display Value
let result_p = document.getElementById('result');
const result = str => {
    if (values.length === 0 || operation || operator === null) result_p.removeChild(result_p.lastChild);
    result_p.appendChild(document.createTextNode(str));
    values.push(str);
    if (values.length >= 2 && operation !== true) {
        values[values.length-2] += values[values.length-1];
        values.pop();
    }
    operation = false;
    return values;
}

// Stage Value
let stage_p = document.getElementById('stage');
const stage = symb => {
    if (operation) return;
    if (first === true) {
        stage_p.removeChild(stage_p.lastChild);
        first = false;
    }
    if (values.length === 0) {
        stage_p.appendChild(document.createTextNode('0' + symb));
        values.push('0');
    } else {
        stage_p.appendChild(document.createTextNode(values[values.length-1] + symb));
    }
    while (result_p.childNodes.length > 1) {
        result_p.removeChild(result_p.lastChild);
    }
    result_p.removeChild(result_p.lastChild);
    result_p.appendChild(document.createTextNode('0'));
    operator = symb; 
    operation = true;
}

const getGrid = (width, height) => {
    let numCells = width * height;
    for (let i = 0; i < numCells; i++) {
        let grid_button = document.createElement('div');
        grid_button.setAttribute('class', `grid_button button_${i}`);
        buttons_div.appendChild(grid_button);
    }
    buttons_div.setAttribute('style', `grid-template-rows: repeat(${height}, 1fr); grid-template-columns: repeat(${width}, 1fr);`);
}
getGrid(4, 5);

// Calculation functions
const add = (...int) => {
    const toInt = int.map((value) => {
        return parseInt(value);
    });
    return toInt.reduce((x, y) => x + y);
}

const subtract = (...int) => {
    const toInt = int.map((value) => {
        return parseInt(value);
    });
    return toInt.reduce((x, y) => x - y);
}

const multiply = (...int) => {
    const toInt = int.map((value) => {
        return parseInt(value);
    });
    return toInt.reduce((x, y) => x * y);
}

const divide = (...int) => {
    const toInt = int.map((value) => {
        return parseInt(value);
    });
    return toInt.reduce((x, y) => x / y);
}

const operate = (operator, ...num) => {
    switch (operator) {
        case '+':
            return result(add(...num));
        case '-':
            return result(subtract(...num));
        case '*':
            return result(multiply(...num));
        case '/':
            return result(divide(...num));
    }
}

// Number 0
let zero_button = document.querySelector('.button_16');
zero_button.textContent = '0';
zero_button.addEventListener('click', () => result('0'));

// Number 1
let one_button = document.querySelector('.button_12');
one_button.textContent = '1';
one_button.addEventListener('click', () => result('1'));

// Number 2
let two_button = document.querySelector('.button_13');
two_button.textContent = '2';
two_button.addEventListener('click', () => result('2'));

// Number 3
let three_button = document.querySelector('.button_14');
three_button.textContent = '3';
three_button.addEventListener('click', () => result('3'));

// Number 4
let four_button = document.querySelector('.button_8');
four_button.textContent = '4';
four_button.addEventListener('click', () => result('4'));

// Number 5
let five_button = document.querySelector('.button_9');
five_button.textContent = '5';
five_button.addEventListener('click', () => result('5'));

// Number 6
let six_button = document.querySelector('.button_10');
six_button.textContent = '6';
six_button.addEventListener('click', () => result('6'));

// Number 7
let seven_button = document.querySelector('.button_4');
seven_button.textContent = '7';
seven_button.addEventListener('click', () => result('7'));

// Number 8
let eight_button = document.querySelector('.button_5');
eight_button.textContent = '8';
eight_button.addEventListener('click', () => result('8'));

// Number 9
let nine_button = document.querySelector('.button_6');
nine_button.textContent = '9';
nine_button.addEventListener('click', () => result('9'));

// Exponent
let exponent_button = document.querySelector('.button_0');
exponent_button.textContent = '𝒙^';
exponent_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
exponent_button.addEventListener('click', () => stage('^'));

// Square root
let sqrt_button = document.querySelector('.button_1');
sqrt_button.textContent = '√𝒙';
sqrt_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
sqrt_button.addEventListener('click', () => stage('√'));

// Clear All
let clearAll_button = document.querySelector('.button_2');
clearAll_button.textContent = 'C';
clearAll_button.setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');
clearAll_button.addEventListener('click', () => {
    while (result_p.childNodes.length > 1) {
        result_p.removeChild(result_p.lastChild);
    } 
    while (stage_p.childNodes.length > 0) {
        stage_p.removeChild(stage_p.lastChild);
    }
    result_p.removeChild(result_p.lastChild);
    result_p.appendChild(document.createTextNode('0'));
    stage_p.appendChild(document.createTextNode('Calculator by ojaoc'));
    operation = null;
    first = true;
    return values = [];
});

// Clear
let clear_button = document.querySelector('.button_3');
clear_button.textContent = 'CE';
clear_button.setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');
clear_button.addEventListener('click', () => {
    if (result_p.childNodes.length > 1) {
        result_p.removeChild(result_p.lastChild);
    } else {
        result_p.removeChild(result_p.lastChild);
        result_p.appendChild(document.createTextNode('0'));
    }
    let valueToStr = values[values.length-1].toString();
    if (valueToStr.length < 2) {
        return values.pop();  
    } else {
        return values[values.length-1] = valueToStr.slice(0, -1);
    }
});

// Divide
let divide_button = document.querySelector('.button_7');
divide_button.textContent = '/';
divide_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
divide_button.addEventListener('click', () => stage('/'));

// Multiply
let multiply_button = document.querySelector('.button_11');
multiply_button.textContent = '*';
multiply_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
multiply_button.addEventListener('click', () => stage('*'));

// Minus
let minus_button = document.querySelector('.button_15');
minus_button.textContent = '-';
minus_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
minus_button.addEventListener('click', () => stage('-'));

// Plus
let plus_button = document.querySelector('.button_19');
plus_button.textContent = '+';
plus_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB'); 
plus_button.addEventListener('click', () => stage('+'));

// Dot Button
let dot_button = document.querySelector('.button_17');
dot_button.textContent = '.';
dot_button.addEventListener('click', () => result('.'));

// Equals
let equals_button = document.querySelector('.button_18');
equals_button.textContent = '=';
equals_button.setAttribute('style', 'background-color: #4B88A2; color: #FFF9FB');
equals_button.addEventListener('click', () => {
    while (result_p.childNodes.length > 1) {
        result_p.removeChild(result_p.lastChild);
    } 
    while (stage_p.childNodes.length > 0) {
        stage_p.removeChild(stage_p.lastChild);
    }
    result_p.removeChild(result_p.lastChild);
    stage_p.appendChild(document.createTextNode('Calculator by ojaoc'));
    operate(operator, ...values);
    operator = null;
    operation = null;
    first = true;
    values = [];
});