const accessToDatabase = require('../utils/accessToDatabase')
const User = require('../models/user')
class loginService {
    async getUser(login, email) {
        if (login) {
            return await accessToDatabase.readOne(User, 'login', login)
        }
        if (email) {
            return await accessToDatabase.readOne(User, 'email', email)
        }
    }
}

module.exports = new loginService()