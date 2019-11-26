const CELLS = 4 * 5;
const BUTTONS_DIV = document.querySelector('.buttons');
let buttonList = {};
for (let i = 0; i < CELLS; i++) {
  const GRID_BUTTON = document.createElement('div');
  GRID_BUTTON.setAttribute('class', `grid_button button_${i}`);
  BUTTONS_DIV.appendChild(GRID_BUTTON);

  buttonList[`button_${i}`] = document.querySelector(`.button_${i}`);
}

const result_p = document.getElementById('result');
const stage_p = document.getElementById('stage');

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





