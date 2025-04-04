const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Scanned = sequelize.define('Scanned', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
    scanned: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: []
    }
}, { 
    timestamps: false 
});

module.exports = Scanned;