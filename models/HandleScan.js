const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const HandleScan = sequelize.define('HandleScan', {
    isScanning: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }    
}, { 
    timestamps: false 
});

module.exports = HandleScan;