const container = document.querySelector("#container");
let size = 16

// creating 16*16 grid
let setGrid = () => { 
    for (i = 1; i <= (size * size); i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseover', () => {
        grid.style.cssText = 'background-color: red;';
    })
    grid.addEventListener('mouseout', () => {
        grid.style.cssText = 'background-color: white;';
    })
    container.appendChild(grid);
}
}

setGrid()

const btn = document.querySelector('#btn');

// Click button to ask a prompt to set a new grid.
btn.addEventListener('click', () => {
    let gridSize = prompt('Enter length between 2-100')
    gridSize = parseInt(gridSize);
    if (gridSize > 1 && gridSize <= 100) {
        container.innerHTML = '';
        size =  gridSize;
        setGrid()
    } else {alert('Invalid Response')}
})