const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000.');
});