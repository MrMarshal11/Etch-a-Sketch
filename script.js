const container = document.querySelector("#container");

// creating 16*16 grid
for (i = 1; i <= (16 * 16); i++) {
    const grid = document.createElement('div');
    container.appendChild(grid)
}