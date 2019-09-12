// The Array below will hold the values inserted
let values = []; 
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
            return add(...num);
        case '-':
            return subtract(...num);
        case '*':
            return multiply(...num);
        case '/':
            return divide(...num);
    }
}
// Display Value
const result = str => {
    if ((values.length === 0 && operator === null) || operation) result_p.removeChild(result_p.lastChild);
    result_p.appendChild(document.createTextNode(str));
    values.push(str);
    if (values.length >= 2 && operation !== true) {
        values[values.length-2] += values[values.length-1];
        values.pop();
    } 
    }
    operation = false;
    values;
}

// Stage Value
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
    if (operator === null) {
        operator = symb;
    } else if (operator != symb) {
        changedOperator = symb;
    }
    operation = true;
}

zero_button.addEventListener('click', () => result('0'));

// Number 1
one_button.addEventListener('click', () => result('1'));

// Number 2
two_button.addEventListener('click', () => result('2'));

// Number 3
three_button.addEventListener('click', () => result('3'));

// Number 4
four_button.addEventListener('click', () => result('4'));

// Number 5
five_button.addEventListener('click', () => result('5'));

// Number 6
six_button.addEventListener('click', () => result('6'));

// Number 7
seven_button.addEventListener('click', () => result('7'));

// Number 8
eight_button.addEventListener('click', () => result('8'));

// Number 9
nine_button.addEventListener('click', () => result('9'));

// Exponent
exponent_button.addEventListener('click', () => stage('^'));

// Square root
sqrt_button.addEventListener('click', () => stage('√'));

// Clear All
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
    changedOperator = null;
    return values = [];
});

// Clear
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
divide_button.addEventListener('click', () => stage('/'));

// Multiply
multiply_button.addEventListener('click', () => stage('*'));

// Minus
minus_button.addEventListener('click', () => stage('-'));

// Plus
plus_button.addEventListener('click', () => stage('+'));

// Dot Button
dot_button.addEventListener('click', () => result('.'));

// Equals
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