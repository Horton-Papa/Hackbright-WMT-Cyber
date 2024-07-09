require('dotenv').config();
const seedrandom = require('seedrandom');
const Sequelize = require('sequelize');
const bfs = require('./BFS.js');

const { CONNECTION_STRING } = process.env;
const sequelize = new Sequelize(CONNECTION_STRING);

// note: server side is written in async await for practice
module.exports = {
    createGrid: async (req, res) => {
        const { rows, cols, seed } = req.body;

        // seed for reproducibility
        const rng = seedrandom(+seed);
        const grid = [];

        // Populate the grid with random values (0 or 1)
        for (let i = 0; i < rows; i++) {
            grid[i] = [];
            for (let j = 0; j < cols; j++) {
                // generate random 0 and 1
                grid[i][j] = rng() < 0.2 ? 1 : 0;
            }
        }

        // export to databse
        const query = 
            `
            INSERT INTO grids (num_rows,num_cols,seed)
            VALUES ('${rows}', '${cols}', '${seed}')
            `

        try {
            const dbRes = await sequelize.query(query);
            console.log(`inserted grid with ${rows} x ${cols} dimension`);
            res.status(200).send(grid);
        } catch (err) {
            console.log('error grid insertion', err);
            
            // send an error response
            res.status(500).send('Error grid insertion');
        }
    },

    solve: async (req, res) => {
        const { start, end } = req.body;

        try {
            // Retrieve most recent grid specs
            const gridQuery = `
            SELECT num_rows, num_cols, seed
            FROM grids
            WHERE id = (SELECT MAX(id) FROM grids)
        `;
            const [gridSpec] = await sequelize.query(gridQuery);
            console.log(gridSpec)
            const { num_rows, num_cols, seed } = gridSpec[0];

            // Recreate the grid using the retrieved specifications
            const rng = seedrandom(+seed);
            const grid = [];

            for (let i = 0; i < num_rows; i++) {
                grid[i] = [];
                for (let j = 0; j < num_cols; j++) {
                    grid[i][j] = rng() < 0.2 ? 1 : 0;
                }
            }
            console.log(grid);
            // Solve the grid using BFS
            const path = bfs(grid, start, end);
            console.log(path);
            res.status(200).send( {grid, path} );
        } catch (err) {
            console.log('Error solving grid:', err);
            res.status(500).send('Error solving grid');
        }
    }

}
