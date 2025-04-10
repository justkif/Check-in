const Runner = require('../models/Runner');
const qrCode = require('qrcode');
const excel =  require('exceljs');

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
            const runner = await Runner.findOne({ ordinalNumber: req.params.username });
            if (!runner) {
                return res.status(404).json('Runner not found.');
            }
            qrCode.toDataURL(runner._id.toString(), function(err, url) {
                if (err) {
                    return res.status(500).json(err);
                }
                res.status(200).send(`<img src="${url}">`);
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    exportExcel: async(req, res) => {
        try {
            const runners = await Runner.find();
            const workbook = new excel.Workbook();
            const worksheet = workbook.addWorksheet('Runner');
            worksheet.columns = [
                { header: 'ordinalNumber', key: 'ordinalNumber', width: 15 },
                { header: 'fullName', key: 'fullName', width: 25 },
                { header: 'gender', key: 'gender', width: 10 },
                { header: 'area', key: 'area', width: 10 },
                { header: 'isPresent', key: 'isPresent', width: 10},
                { header: 'timePresent', key: 'timePresent', width: 20},
                { header: 'whoScan', key: 'whoScan', width: 25},
                { header: 'imageLink', key: 'imageLink', width: 30}
            ];
            runners.forEach(runner => {
                worksheet.addRow(runner.toObject());
            });
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=Runner.xlsx');
            await workbook.xlsx.write(res);
            res.end();
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