const db = require('../config/database')
const Sequelize = require('sequelize')
const Movie = db.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
    releaseDate: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
    }
})

module.exports = Movie