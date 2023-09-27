const User = require('../models/user')
const {
    Movie,
    SimilarMovie
} = require('../models/associations')
const {
    sign
} = require('jsonwebtoken')
class AccessToDatabase {
    async create(Model, value) {
        return await Model.create(value)
    }
    async readOne(Model, conditions) {
        const element = await Model.findOne({
            where: conditions,
            raw: true
        })
        return element
    }
    async readAllSimilar(conditions) {
         const movies = await SimilarMovie.findAll({
            where: conditions,
            include: {                
                foreignKey: 'similarMovieId',
                model: Movie,
                attributes: ['title'],
            },
            attributes: [],
            raw: true
        })
        return movies
    }
    async updateById(Model, id, dataToChange) {
        return await Model.update(dataToChange, {
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