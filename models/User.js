const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    ordinal_number: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    area: {
        type: String,
        enum: ['ARHN', 'ARSG'],
        required: true
    },
    isPresent: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);