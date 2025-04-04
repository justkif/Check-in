const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./db');
const runnerRouter = require('./routes/runner');
const scanRouter = require('./routes/scan');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', runnerRouter);
app.use('/', scanRouter);
app.use('/', userRouter);

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000.');
});