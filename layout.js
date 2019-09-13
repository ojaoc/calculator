// Layout Section
// Get grid and generate a different class for each button
const numCells = 4 * 5;
const buttons_div = document.querySelector('.buttons');
for (let i = 0; i < numCells; i++) {
    const grid_button = document.createElement('div');
    grid_button.setAttribute('class', `grid_button button_${i}`);
    buttons_div.appendChild(grid_button);
}
buttons_div.setAttribute('style', `grid-template-rows: repeat(5, 1fr); grid-template-columns: repeat(4, 1fr);`);

// DOM variables - SELECTORS
const result_p = document.getElementById('result');
const stage_p = document.getElementById('stage');
const zero_button = document.querySelector('.button_16');
const one_button = document.querySelector('.button_12');
const two_button = document.querySelector('.button_13');
const three_button = document.querySelector('.button_14');
const four_button = document.querySelector('.button_8');
const five_button = document.querySelector('.button_9');
const six_button = document.querySelector('.button_10');
const seven_button = document.querySelector('.button_4');
const eight_button = document.querySelector('.button_5');
const nine_button = document.querySelector('.button_6');
const exponent_button = document.querySelector('.button_0');
const sqrt_button = document.querySelector('.button_1');
const clearAll_button = document.querySelector('.button_2');
const clear_button = document.querySelector('.button_3');
const divide_button = document.querySelector('.button_7');
const multiply_button = document.querySelector('.button_11');
const minus_button = document.querySelector('.button_15');
const plus_button = document.querySelector('.button_19');
const dot_button = document.querySelector('.button_17');
const equals_button = document.querySelector('.button_18');

// DOM Text Content
zero_button.textContent = '0';
one_button.textContent = '1';
two_button.textContent = '2';
three_button.textContent = '3';
four_button.textContent = '4';
five_button.textContent = '5';
six_button.textContent = '6';
seven_button.textContent = '7';
eight_button.textContent = '8';
nine_button.textContent = '9';
exponent_button.textContent = '𝒙^';
sqrt_button.textContent = '√𝒙';
clearAll_button.textContent = 'C';
clear_button.textContent = 'CE';
divide_button.textContent = '/';
multiply_button.textContent = '*';
minus_button.textContent = '-';
plus_button.textContent = '+';
dot_button.textContent = '.';
equals_button.textContent = '=';

// DOM STYLING
exponent_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
sqrt_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
clearAll_button.setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');
clear_button.setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');
divide_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
multiply_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
minus_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
plus_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB'); 
equals_button.setAttribute('style', 'background-color: #4B88A2; color: #FFF9FB');

// DOM Event Listeners
zero_button.addEventListener('click', (e) => pressNumber(e));
one_button.addEventListener('click', (e) => pressNumber(e));
two_button.addEventListener('click', (e) => pressNumber(e));
three_button.addEventListener('click', (e) => pressNumber(e));
four_button.addEventListener('click', (e) => pressNumber(e));
five_button.addEventListener('click', (e) => pressNumber(e));
six_button.addEventListener('click', (e) => pressNumber(e));
seven_button.addEventListener('click', (e) => pressNumber(e));
eight_button.addEventListener('click', (e) => pressNumber(e));
nine_button.addEventListener('click', (e) => pressNumber(e));
exponent_button.addEventListener('click', (e) => console.log(e.target.innerHTML));
sqrt_button.addEventListener('click', () => stage('√'));
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
clear_button.addEventListener('click', () => clear());
divide_button.addEventListener('click', (e) => pressOperator(e));
multiply_button.addEventListener('click', (e) => pressOperator(e));
minus_button.addEventListener('click', (e) => pressOperator(e));
plus_button.addEventListener('click', (e) => pressOperator(e));
dot_button.addEventListener('click', (e) => pressNumber(e));
equals_button.addEventListener('click', () => returnResult());

// Logic Section
// Display Value
let result = 0; // These variables exist to delete the  
let stage = false; // initial 0 and text as you press 
let firstTime = true; // numbers or operators
let expression = []; 
function pressNumber(e) {
    if (e.target.textContent === '.' && /[.]/g.test(result_p.textContent)) return; // This makes it so you can only digit one dot per number
    if (result < 1 || stage) result_p.removeChild(result_p.lastChild);
    result_p.textContent += e.target.textContent;
    expression.push(e.target.textContent);
    result++;
    stage = false;
}

// Stage Value
function pressOperator(e) {
    if (firstTime) stage_p.removeChild(stage_p.lastChild);
    stage_p.textContent += result_p.textContent + e.target.textContent;
    result_p.textContent = '0';
    expression.push(e.target.textContent);
    stage = true;
    firstTime = false;
}

function returnResult() {
    const regex = /[.0-9]+|[+*/-]/g;
    // const regexNumbers = /[-.0-9]+/g;
    let calcResult = null;
    let splitExp = expression.join('').match(regex);
    console.log(splitExp);
    for (let i = 0; i < splitExp.length; i++) {
        if (splitExp.includes('*') || splitExp.includes('/')) {
            switch (splitExp[i]) {
                case '*':
                    calcResult = multiply(splitExp[i-1], splitExp[i+1]);
                    splitExp.splice(i-1, 3, calcResult);
                    i--;
                    console.log(splitExp);
                    break;
                case '/':
                    calcResult = divide(splitExp[i-1], splitExp[i+1]);
                    splitExp.splice(i-1, 3, calcResult);
                    i--;
                    console.log(splitExp);
                    break;
            }
        } else break;
    }
    for (let i = 0; i < splitExp.length; i++) {
        switch (splitExp[i]) {
            case '+':
                calcResult = add(splitExp[i-1], splitExp[i+1]);
                splitExp.splice(i-1, 3, calcResult);
                i--;
                console.log(splitExp);
                break;
            case '-':
                calcResult = subtract(splitExp[i-1], splitExp[i+1]);
                splitExp.splice(i-1, 3, calcResult);
                i--;
                console.log(splitExp);
                break;
        }
    }
    result_p.textContent = splitExp[splitExp.length-1];
    stage_p.textContent = 'Calculator by ojaoc';
    firstTime = true;
}

function clear() {
    if (result_p.textContent.length > 1) {
        result_p.textContent = result_p.textContent.slice(0, -1); 
    } else {
        result_p.textContent = '0'; 
    }
    if (expression.length > 1) {
        if (/[+*/-]/g.test(expression) && (expression.length-expression.lastIndexOf(/[+*/-]/g) === 2)) {
            expression.splice(expression.lastIndexOf(/[+*/-]/g)+1, 1, '0');
            return;
        }  
        expression.pop();
    } else {
        
    }
    console.log(expression);
}

function clearAll() {

}

function add(int1, int2) {
    return Number(int1) + Number(int2);
}

function subtract(int1, int2) {
    return Number(int1) - Number(int2);
}

function multiply(int1, int2) {
    return Number(int1) * Number(int2);
}

function divide(int1, int2) {
    return Number(int1) / Number(int2);
}