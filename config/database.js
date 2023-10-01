const Sequelize = require('sequelize')

module.exports = new Sequelize('psagflzi', 'psagflzi', 'IQeihzw6C63v_WrKH3qXJnwA4XxelqSg', {
    host: 'surus.db.elephantsql.com',
    dialect: 'postgres'
})

// const Sequelize = require('sequelize')

// module.exports = new Sequelize(process.env.DATABASE, process.env.USER_DB, process.env.USER_PASSWORD, {
//     host: process.env.HOST,
//     dialect: process.env.DIALECT
// })