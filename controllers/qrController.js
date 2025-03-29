const User = require('../models/User');
const qrCode = require('qrcode');

module.exports = qrController = {
    generateQR: async(req, res) => {
        try {
            const user = await User.findById(req.params.userId);
            if (!user) {
                return res.status(404).json('User not found.');
            }
            qrCode.toDataURL(user.id.toString(), function(err, url) {
                if (err) {
                    return res.status(500).json(err);
                }
                return res.status(200).send(`<img src="${url}" alt="QR Code for ${user.full_name}">`);
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    scanQR: async(req, res) => {
        try {
            const user = await User.findById(req.body.userId);
            if (!user) {
                return res.status(404).json('User not found.');
            }
            await User.findByIdAndUpdate(user._id, {isPresent: true});
            return res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}