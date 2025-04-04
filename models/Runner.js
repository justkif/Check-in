const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Runner = sequelize.define('Runner', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    ordinalNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false
    },
    area: {
        type: DataTypes.ENUM('ARHN', 'ARSG'),
        allowNull: false
    },
    isPresent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    timePresent: {
        type: DataTypes.DATE,
        allowNull: true
    },
    whoScan: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    imageLink: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Runner;