const Runner = require('../models/Runner');

module.exports = runnerController = {
    getAll: async(req, res) => {
        try {
            const runners = await Runner.find().select('-_id');
            res.status(200).json(runners);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getOne: async(req, res) => {
        try {
            const runner = await Runner.findById(req.params.runnerId).select('-_id');
            if (!runner) {
                res.status(404).json('Runner not found.');
            }
            res.status(200).json(runner);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    generateQR: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    exportExcel: async(req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    scanQR: async(req, res) => {
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
    }
}