const form = document.querySelector('form');
const rowInput = document.querySelector('#row-input');
const colInput = document.querySelector('#col-input');
const seedInput = document.querySelector('#seed-input');
const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('resetButton');

const handleSubmit = (evt) => {
    evt.preventDefault();

    if (rowInput.value < 1 || 
        colInput.value < 1 || 
        seedInput.value < 1) {
            alert('Please fill in all the fields');
            return;
    }

    let body = {
        rows: rowInput.value,
        cols: colInput.value,
        seed: seedInput.value
    }

    axios.post('http://localhost:4004/grids', body)
        .then((res) => {
            console.log('it worked! The grid look like below');
            console.log(res.data);

            const grid = res.data;

            // Clear existing grid content
            gridContainer.innerHTML = '';

            // Set grid container styles dynamically based on grid dimensions
            const rows = grid.length;
            const cols = grid[0].length;

            gridContainer.style.display = 'grid';
            gridContainer.style.gridTemplateColumns = `repeat(${cols}, 28px)`;
            gridContainer.style.gridTemplateRows = `repeat(${rows}, 28px)`;
            gridContainer.style.gap = '1px';

            // generate the grid cells dynamically
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[0].length; j++) {
                    const cell = document.createElement('div');
                    
                    // Set row and column attributes for use in start/end selection
                    cell.dataset.row = i;
                    cell.dataset.col = j;

                    if (grid[i][j] === 1) {
                        cell.classList.add('obstacle');
                    } else {
                        cell.classList.add('cell');
                    }

                    gridContainer.appendChild(cell);
                }
            }
        });
};

// declare start and end cells
let startCell = null;
let endCell = null;

const handleSolve = (evt) => {
    // listen for click on a cell
    const clickedCell = evt.target;

    const row = clickedCell.dataset.row;
    const col = clickedCell.dataset.col;

    const cell = { x: parseInt(row), y: parseInt(col) };

    // Initialize start and end cells if not already selected
    if (!startCell) {
        startCell = cell;
        clickedCell.classList.add('start-cell'); 
    } else if (!endCell) {
        endCell = cell;
        clickedCell.classList.add('end-cell'); 

        let body = { start: startCell, end: endCell };

        // Prompt user before sending the request
        const solveConfirmed = confirm('Go ahead and solve?');
        if (solveConfirmed) {
            console.log(row, col, body);
            axios.post('http://localhost:4004/solve', body)
                .then((res) => {
                    console.log('Server response:', res.data);
                    
                    const {grid,path} = res.data;
                    
                    if (path) {
                        let currentIndex = 0;
                        const intervalId = setInterval(() => {
                            if (currentIndex < path.length) {
                                const { x, y } = path[currentIndex];
                                const cellIndex = y + x * grid[0].length;
                                const cell = gridContainer.children[cellIndex];
                                cell.classList.add('path');
                                currentIndex++;
                            } else {
                                clearInterval(intervalId);
                            }
                        }, 50); 
                    } else {
                        alert('no solution for chosen start and end points, choose start and end cells again');
                        // Reset startCell and endCell
                        startCell = null;
                        endCell = null;

                        // Remove 'start-cell' and 'end-cell' classes from previously selected cells
                        const startCellElement = gridContainer.querySelector('.start-cell');
                        const endCellElement = gridContainer.querySelector('.end-cell');
                        if (startCellElement) {
                            startCellElement.classList.remove('start-cell');
                        }
                        if (endCellElement) {
                            endCellElement.classList.remove('end-cell');
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        } else {
            // Reset startCell and endCell values
            startCell = null;
            endCell = null;

            // Remove 'start-cell' and 'end-cell' classes from previously selected cells
            const startCellElement = gridContainer.querySelector('.start-cell');
            const endCellElement = gridContainer.querySelector('.end-cell');
            if (startCellElement) {
                startCellElement.classList.remove('start-cell');
            }
            if (endCellElement) {
                endCellElement.classList.remove('end-cell');
            }
        }
    }
};

const handleReset = (evt) => {
    
    // Reset all form input fields
    rowInput.value = '';
    colInput.value = '';
    seedInput.value = '';

    // Clear the grid container
    gridContainer.innerHTML = '';

    // Remove any classes applied to cells
    const cells = document.querySelectorAll('.cell, .obstacle, .start-cell, .end-cell, .path');
    cells.forEach(cell => {
        cell.classList.remove('cell', 'obstacle', 'start-cell', 'end-cell', 'path');
    });

    // Reset startCell and endCell variables to null
    startCell = null;
    endCell = null;

    // Clear any intervals
    clearInterval(intervalId);
}

form.addEventListener('submit', handleSubmit);
gridContainer.addEventListener('click',handleSolve);
resetButton.addEventListener('click', handleReset);