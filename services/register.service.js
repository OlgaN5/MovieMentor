const accessToDatabase = require('../utils/accessToDatabase')
const {
    User
} = require('../models/associations')
class registerService {
    async createUser(user) {
        console.log(user)
        return await accessToDatabase.create(User, user)
    }
    async findUserByConditions(conditionsEmail) {

        return await accessToDatabase.readOne(User, conditionsEmail)
    }
}

module.exports = new registerService()