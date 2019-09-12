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