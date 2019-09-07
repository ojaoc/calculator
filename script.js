// Buttons div
let buttons_div = document.querySelector('.buttons');

const getGrid = (width = 4, height = 5) => {
    let numCells = width * height;
    for (let i = 0; i < numCells; i++) {
        let grid_button = document.createElement('div');
        grid_button.setAttribute('class', `grid_button button_${i}`);
        buttons_div.appendChild(grid_button);
    }
    buttons_div.setAttribute('style', `grid-template-rows: repeat(${height}, 1fr); grid-template-columns: repeat(${width}, 1fr);`);
}
getGrid();

let exponent_button = document.querySelector('.button_0');
let sqrt_button = document.querySelector('.button_1');
let clearAll_button = document.querySelector('.button_2');
let clear_button = document.querySelector('.button_3');
let seven_button = document.querySelector('.button_4');
let eight_button = document.querySelector('.button_5');
let nine_button = document.querySelector('.button_6');
let divide_button = document.querySelector('.button_7');
let four_button = document.querySelector('.button_8');
let five_button = document.querySelector('.button_9');
let six_button = document.querySelector('.button_10');
let multiply_button = document.querySelector('.button_11');
let one_button = document.querySelector('.button_12');
let two_button = document.querySelector('.button_13');
let three_button = document.querySelector('.button_14');
let minus_button = document.querySelector('.button_15');
let zero_button = document.querySelector('.button_16');
let dot_button = document.querySelector('.button_17');
let equals_button = document.querySelector('.button_18');
let plus_button = document.querySelector('.button_19');

exponent_button.textContent = '𝒙';
exponent_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
sqrt_button.textContent = '√𝒙';
sqrt_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
clearAll_button.textContent = 'C';
clearAll_button.setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');
clear_button.textContent = 'CE';
clear_button.setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');
seven_button.textContent = '7';
eight_button.textContent = '8';
nine_button.textContent = '9';
divide_button.textContent = '/';
divide_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
four_button.textContent = '4';
five_button.textContent = '5';
six_button.textContent = '6';
multiply_button.textContent = '*';
multiply_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
one_button.textContent = '1';
two_button.textContent = '2';
three_button.textContent = '3';
minus_button.textContent = '-';
minus_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');
zero_button.textContent = '0';
dot_button.textContent = '.';
equals_button.textContent = '=';
equals_button.setAttribute('style', 'background-color: #4B88A2; color: #FFF9FB');
plus_button.textContent = '+';
plus_button.setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB'); 


