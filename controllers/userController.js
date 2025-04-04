const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = userController = {
    getAll: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    registerUser: async(req, res) => {
        try {
            const user = await new User({
                username: req.body.username,
                password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
            });
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    loginUser: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    updatePassword: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateRole: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteOne: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}