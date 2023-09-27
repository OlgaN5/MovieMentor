const accessToDatabase = require('../utils/accessToDatabase')
const {User} = require('../models/associations')
class loginService {
    async getUser(login, email) {
        if (login) {
            const conditions = {
                login
            }
            return await accessToDatabase.readOne(User, conditions)
        }
        if (email) {
            const conditions = {
                email
            }
            return await accessToDatabase.readOne(User, conditions)
        }
    }
}

module.exports = new loginService()