const seedrandom = require('seedrandom');

// Set the random seed (use the same seed for reproducibility)
const seed = 5;
const rng = seedrandom(seed);

const rows = 5;
const cols = 5;
const grid = [];

// Populate the grid with random values (0 or 1)
for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
        // Use Math.random() to generate random 0s and 1s
        grid[i][j] = Math.random() < 0.2 ? 1 : 0; 
    }
}

console.log
console.log(grid)