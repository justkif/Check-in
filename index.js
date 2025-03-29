const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRouter = require('./routes/user');
const qrRouter = require('./routes/qr');

const app = express();
dotenv.config();

(async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log('MongoDB Connected.'));
})();

app.use(cors());
app.use(express.json());

app.use('/', userRouter);
app.use('/', qrRouter);

app.listen(8000, () => {
    console.log('Server is Running on http://localhost:8000.');
});