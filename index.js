const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected.');
    } catch (err) {
        console.log(err);
    }
})();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is running.');
});