const User = require('../models/User');

module.exports = userController = {
    getAll: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllExcel: async(req, res) => {
        try {
            
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateAll: async(req, res) => {
        try {
            await User.updateMany({}, {$set: {isPresent : false}});
            res.status(200).json('isPresent reseted.');
        } catch (err) {
            res.status(500).json(err);
        }
    }
}