const accessToDatabase = require('../utils/accessToDatabase')
const User = require('../models/user')
class registerService {
    async createUser(user) {        
        return await accessToDatabase.create(User,user)
    }
    async findUserByProperty(nameProperty, valueProperty) {
        return await accessToDatabase.readOne(User, nameProperty, valueProperty)
    }
}

module.exports = new registerService()