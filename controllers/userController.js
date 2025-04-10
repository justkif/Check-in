const User = require('../models/User');
const Scan = require('../models/Scan');
const Scanned = require('../models/Scanned');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
            const scan = await Scan.findOne().select('-_id');
            res.status(200).json(scan);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getScanned: async(req, res) => {
        try {
            const decoded = jwt.verify(req.headers.token, process.env.JWT_KEY);
            const scanned = await Scanned.findById(decoded.id).select('-_id -__v');
            if (!scanned) {
                return res.status(404).json('No scanned history.');
            }
            res.status(200).json(scanned);
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
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(401).json('Wrong password or username.');
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(401).json('Wrong password or username.');
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    username: user.username,
                    role: user.role
                },
                process.env.JWT_KEY,
                { expiresIn: '15m' }
            );
            res.status(200).json(token); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updatePasswordManager: async(req, res) => {
        try {
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { password: await bcrypt.hash(req.body.newPassword, await bcrypt.genSalt(10)) }
            );
            if (!user) {
                return res.status(404).json("User not found.");
            }
            const { password, _id, __v, ...data } = user.toObject();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updatePassword: async(req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("User not found.");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(401).json('Wrong password.');
            }
            user.password = await bcrypt.hash(req.body.newPassword, await bcrypt.genSalt(10))
            await user.save();
            res.status(200).json("Password changed.");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateRole: async(req, res) => {
        try {
            if (req.body.role == 'manager') {
                return res.status(403).json('No admin permission');
            }
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { role: req.body.role },
                { new: true }
            );
            if (!user) {
                return res.status(404).json('User not found.');
            }
            const { password, _id, __v, ...data } = user.toObject();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateScan: async(req, res) => {
        try {
            const currentScan = await Scan.findOne();
            const scan = await Scan.findOneAndUpdate(
                {},
                { isScan: !currentScan.isScan },
                { new: true }
            );
            res.status(200).json(scan.isScan);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}