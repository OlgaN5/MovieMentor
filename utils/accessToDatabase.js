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
    // INSERT INTO user VALUES ($1,&2),[login,email,password]
    // INSERT INTO movie VALUES ($1,&2),[login,email,password]
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
        return Model.findOne({
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
    // async getId(Model, nameProperty, valueProperty) {
    //     return await Model.findOne({
    //         where: {
    //             [nameProperty]: valueProperty
    //         }
    //     }).id
    // }
}
module.exports = new AccessToDatabase()