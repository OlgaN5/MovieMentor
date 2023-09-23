const Sequelize = require('sequelize')
const db = require('../config/database')
const WatchList = db.define('watchList', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: false
    },
    movieId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: false
    }
})
module.exports = WatchList