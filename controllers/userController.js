const User = require('../models/User');

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