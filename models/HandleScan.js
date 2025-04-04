const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const HandleScan = sequelize.define('HandleScan', {
    isScanning: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }    
});

module.exports = HandleScan;