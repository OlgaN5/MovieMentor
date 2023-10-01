const db = require('../config/database')
const Sequelize = require('sequelize')
const Status = db.define('status', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Status