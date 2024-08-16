const container = document.querySelector("#container");
let size = 16;

// Function to create the grid
let setGrid = () => { 
    for (let i = 1; i <= (size * size); i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.cssText = `flex-basis: calc(960px / ${size});`;

        // Initialize darkness level
        let darkness = 0; 

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${r}, ${g}, ${b})`;

        // Dynamic grid color changing on mouseover
        grid.addEventListener('mouseover', () => {
            // Increase darkness by 0.1 on each mouseover
            darkness += 0.1;
            if (darkness > 1) darkness = 1; // Cap at fully black
            grid.style.backgroundColor = randomColor;
        });

        // Darken white grid after mouseover event
        grid.addEventListener('mouseout', () => {
            let darkenedColor = `rgb(${255 * (1 - darkness)}, ${255 * (1 - darkness)}, ${255 * (1 - darkness)})`;
            grid.style.backgroundColor = darkenedColor;
        });

        container.appendChild(grid);
    }
}

setGrid();

// Event listener for the button to create a new grid
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let gridSize = prompt('Enter length between 2-100');
    gridSize = parseInt(gridSize);
    if (gridSize > 1 && gridSize <= 100) {
        container.innerHTML = '';
        size = gridSize;
        setGrid();
    } else {
        alert('Invalid Response');
    }
});
