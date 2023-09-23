const User = require('../models/user')
class AccessToDatabase {
    async create(Model, value) {
        // console.log(Model, value)
        return await Model.create(value)
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
    async updateById(Model, id, nameProperty, valueProperty) {
        return Model.update({
            [nameProperty]: valueProperty
        }, {
            where: {
                id: id
            }
        })
    }
    // async getId(Model, nameProperty, valueProperty) {
    //     return await Model.findOne({
    //         where: {
    //             [nameProperty]: valueProperty
    //         }
    //     }).id
    // }
}
module.exports = new AccessToDatabase()