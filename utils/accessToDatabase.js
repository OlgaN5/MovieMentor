const User = require('../models/user')
const {
    Movie,
    SimilarMovie,
    WatchList
} = require('../models/associations')
const Sequelize = require('sequelize')
const {
    sign
} = require('jsonwebtoken')
class AccessToDatabase {
    async create(Model, value) {
        const data = await Model.create(value)
        console.log('дошло сюда')

        return data
    }
    async readOne(Model, conditions) {
        const element = await Model.findOne({
            where: conditions,
            raw: true
        })
        return element
    }
    async readAll(Model, conditions) {
        const element = await Model.findAll({
            where: conditions,
            raw: true
        })
        return element
    }
    async readAllSimilar(conditions) {
        const movies = await SimilarMovie.findAll({
            include: {
                model: WatchList,
                where: conditions,
                attributes: []
            },
            attributes: [Sequelize.fn('DISTINCT', Sequelize.col('movieId'))],
            include: {
                model: Movie,
            },
            raw: true
        })
        return movies
    }
    async findId(Model, conditions) {
        return await Model.findOne({
            where: conditions,
            attributes: ['id'],
            raw: true
        })
    }
    async updateById(Model, id, dataToChange) {
        return await Model.update(dataToChange, {
            where: {
                id: id
            },
            raw: true
        })
    }
}
module.exports = new AccessToDatabase()