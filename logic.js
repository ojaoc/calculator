// The Array below will hold the values inserted
let expression = []; 
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

