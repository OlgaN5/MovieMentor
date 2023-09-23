const {Movie,WatchList} = require('../models/associations')
// const WatchList = require('../models/watchList')
const accessToDatabase = require('../utils/accessToDatabase')
class MovieService {
    async add(movie) {
        return await accessToDatabase.create(Movie, movie)
    }
    async search(movieTitle) {
        return await accessToDatabase.readOne(Movie, 'title', movieTitle)
    }
    async addWatchList(idUser,movie) {
        console.log(movie)

        return await accessToDatabase.create(WatchList, movie)
    }
    async getId(movieName) {
        const movie = await accessToDatabase.readOne(Movie, 'title', movieName)
        return movie.id
    }
    async changeStatusById(idMovie,status){
        const movie = await accessToDatabase.update(Movie,idMovie,'status',status)
        return movie
    }
}

module.exports = new MovieService()