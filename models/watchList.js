const Sequelize = require('sequelize')
const db = require('../config/database')
const WatchList = db.define('watchList', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    },
    movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    },
    statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    }
})
module.exports = WatchList