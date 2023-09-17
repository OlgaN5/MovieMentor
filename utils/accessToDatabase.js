const User = require('../models/user')
class AccessToDatabase {
    async create(Model, user) {
        return await Model.create(user)
    }
    async readOne(Model, nameProperty, valueProperty) {
        const user = await Model.findOne({
            where: {
                [nameProperty]: valueProperty
            }
        })
        return user
    }
    async readAll(Model, nameProperty, valueProperty) {
        return await Model.findAll({
            where: {
                [nameProperty]: valueProperty
            }
        })
    }
}
module.exports = new AccessToDatabase()