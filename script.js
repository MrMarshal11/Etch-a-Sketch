const container = document.querySelector("#container");

// creating 16*16 grid
for (i = 1; i <= (16 * 16); i++) {
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

