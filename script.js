// Buttons div
let buttons_div = document.querySelector('.buttons');

const getGrid = (width, height) => {
    let numCells = width * height;
    for (let i = 0; i < numCells; i++) {
        let grid_button = document.createElement('div');
        grid_button.setAttribute('class', 'grid_button');
        buttons_div.appendChild(grid_button);
    }
    buttons_div.setAttribute('style', `grid-template-rows: repeat(${height}, 1fr); grid-template-columns: repeat(${width}, 1fr);`);
}

getGrid(4, 5);