const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000.');
});