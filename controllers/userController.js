const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = userController = {
    getAll: async(req, res) => {
        try {
            const users = await User.find().select('-_id -password -__v');
            res.status(200).json(users);        
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getScan: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    getScanned: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    registerUser: async(req, res) => {
        try {
            const checkUser = await User.findOne({ username: req.body.username });
            if (checkUser) {
                return res.status(409).json('Username existed.'); 
            }
            const user = await new User({
                username: req.body.username,
                password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
            });
            await user.save();
            const { password, _id, __v, ...data } = user.toObject();
            res.status(201).json(data);
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
    updatePasswordManager: async(req, res) => {
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
    reset: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateScan: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}