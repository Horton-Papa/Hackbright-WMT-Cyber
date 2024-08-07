require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env
const { createGrid, solve } = require('./controller.js');

app.use(express.json())
app.use(cors())

app.post('/grids',createGrid);
app.post('/solve', solve);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))