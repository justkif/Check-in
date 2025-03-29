const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is Running on http://localhost:8000.');
});