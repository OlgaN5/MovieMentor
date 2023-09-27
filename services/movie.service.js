const {
    Movie,
    WatchList,
    SimilarMovie
} = require('../models/associations')
// const WatchList = require('../models/watchList')
const accessToDatabase = require('../utils/accessToDatabase')
class MovieService {
    async add(movie) {
        return await accessToDatabase.create(Movie, movie)
    }
    async search(movieTitle) {
        const conditions = {
            title: movieTitle
        }
        return await accessToDatabase.readOne(Movie, conditions)
    }
    async addWatchList(movie) {
        return await accessToDatabase.create(WatchList, movie)
    }
    // async getId(movieTitle) {
    //     const conditions = {
    //         title: movieTitle
    //     }
    //     const movie = await accessToDatabase.readOne(Movie, conditions)
    //     return movie.id
    // }
    async changeStatusById(idMovie, status) {
        const dataToChange = {
            status: status
        }
        const movie = await accessToDatabase.updateById(WatchList, idMovie, dataToChange)
        return movie
    }
    async addSimilar(userId, movieId, similarMovieId) {
        const conditions = {
            movieId: movieId,
            userId: userId,
            status: 'watched'
        }
        const movie = await accessToDatabase.readOne(WatchList, conditions)
        const similarMovie = await accessToDatabase.readOne(WatchList, {
            ...conditions,
            movieId: similarMovieId
        })
        if (!movie || !similarMovie) return null
        return await accessToDatabase.create(SimilarMovie, {
            userId,
            movieId,
            similarMovieId
        })
    }

    async getSimilar(movieId) {
        console.log(movieId)
        const conditions = {
            id: movieId
        }
        // const movie = await accessToDatabase.readOne(Movie, conditions)
        const movies = await accessToDatabase.readAllSimilar(conditions)
        console.log('1',movies)

        return movies
        // console.log(Movie.prototype)
        // return movie.getSimilarMovies()
    }
}

module.exports = new MovieService()