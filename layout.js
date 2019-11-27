import Calculator from './calculator.js';
const CELLS = 4 * 5;
const BUTTONS_DIV = document.querySelector('.buttons');
let buttonList = {};
for (let i = 0; i < CELLS; i++) {
  const GRID_BUTTON = document.createElement('div');
  GRID_BUTTON.setAttribute('class', `grid_button button_${i}`);
  BUTTONS_DIV.appendChild(GRID_BUTTON);

  buttonList[`button_${i}`] = document.querySelector(`.button_${i}`);
}

const RESULT_P = document.getElementById('result');
const STAGE_P = document.getElementById('stage');

buttonList['button_16'].textContent = '0';
buttonList['button_12'].textContent = '1';
buttonList['button_13'].textContent = '2';
buttonList['button_14'].textContent = '3';
buttonList['button_8'].textContent = '4';
buttonList['button_9'].textContent = '5';
buttonList['button_10'].textContent = '6';
buttonList['button_4'].textContent = '7';
buttonList['button_5'].textContent = '8';
buttonList['button_6'].textContent = '9';

buttonList['button_11'].textContent = '*';
buttonList['button_11'].setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');

buttonList['button_7'].textContent = '/';
buttonList['button_7'].setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');

buttonList['button_19'].textContent = '+';
buttonList['button_19'].setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');

buttonList['button_15'].textContent = '-';
buttonList['button_15'].setAttribute('style', 'background-color: #62BBC1; color: #FFF9FB');

buttonList['button_17'].textContent = '.';

buttonList['button_18'].textContent = '=';
buttonList['button_18'].setAttribute('style', 'background-color: #4B88A2; color: #FFF9FB');

buttonList['button_2'].textContent = 'C';
buttonList['button_2'].setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');

buttonList['button_3'].textContent = 'CE';
buttonList['button_3'].setAttribute('style', 'background-color: #BB0A21; color: #FFF9FB');

buttonList['button_0'].setAttribute('style', 'visibility: hidden');
buttonList['button_1'].setAttribute('style', 'visibility: hidden');

let expression = [];

const PRESS_BUTTON = (selector) => {
  selector.addEventListener('click', (e) => {
    switch (e.target.textContent) {
      case 'C':
        while (RESULT_P.lastChild) {
          RESULT_P.removeChild(RESULT_P.lastChild);
        }
      break;  
      case 'CE':
        RESULT_P.removeChild(RESULT_P.lastChild);
      break;  
      case '=':
        while (expression.includes('-') && (expression[0] === '-' || /[^-0-9]/g.test(expression[expression.indexOf('-') - 1]))) {
          expression.splice(expression.indexOf('-'), 2, -Math.abs(expression[expression.indexOf('-') + 1])); 
        }
        console.log(expression);

        let joinNumbersExpression = expression
          .join('')
          .split(/[^-0-9]/g);
        console.log(joinNumbersExpression);
        let n = 0;
        let counter = 0;
        for (let i = 0; i < expression.length; i++) {
          if (/[^-0-9]/g.test(expression[i])) {
            console.log(expression[i]);
            n++;
            joinNumbersExpression.splice(n+counter, 0, expression[i]);
            counter++;
          }
        }
        console.log(expression);
        console.log(joinNumbersExpression);
        joinNumbersExpression.forEach(function (element, index, array) {
          if (/\d+/g.test(element)) {
            array[index] = Number(element);
          }
        });

        let calculate = new Calculator(...joinNumbersExpression);
        RESULT_P.textContent = calculate.result();
      break;
      default:
        let textNode = document.createTextNode(e.target.textContent);
        RESULT_P.appendChild(textNode);
        expression.push(e.target.textContent);
    }
    console.log(expression);
  })
}

for (let i = 0; i < BUTTONS_DIV.childElementCount; i++) {
  PRESS_BUTTON(buttonList[`button_${i}`]);
}