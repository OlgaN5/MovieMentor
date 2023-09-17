const Sequelize = require('sequelize')

module.exports = new Sequelize('postgres', 'postgres', '6vremja6', {
    host: 'localhost',
    dialect: 'postgres'
})