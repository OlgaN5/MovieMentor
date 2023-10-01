const Sequelize = require('sequelize')
const db = require('../config/database')
const SimilarMovie = db.define('similarMovie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    },
    watchListId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    },
    movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    }
})
module.exports = SimilarMovie