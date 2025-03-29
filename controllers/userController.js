const User = require('../models/User');
const excel = require('exceljs');

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
            const users = await User.find();
            const workbook = new excel.Workbook();
            const worksheet = workbook.addWorksheet('AR');
            worksheet.columns = [
                { header: 'ordinal_number', key: 'ordinal_number', width: 15 },
                { header: 'full_name', key: 'full_name', width: 25 },
                { header: 'gender', key: 'gender', width: 10 },
                { header: 'area', key: 'area', width: 10 },
                { header: 'isPresent', key: 'isPresent', width: 10}
            ];
            users.forEach(user => {
                worksheet.addRow(user.toObject());
            });
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=AR.xlsx');
            await workbook.xlsx.write(res);
            res.end();
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