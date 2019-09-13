// The Array below will hold the values inserted
let expression = []; 
// Calculation functions


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

