const Sequelize = require('sequelize')

module.exports = new Sequelize('verceldb', 'default', 'O1BxWcU0LHXv', {
    host: 'ep-cold-flower-38311113-pooler.us-east-1.postgres.vercel-storage.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
})

