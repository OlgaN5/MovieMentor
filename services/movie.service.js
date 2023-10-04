const {
    Movie,
    WatchList,
    SimilarMovie,
    Status
} = require('../models/associations')
// const WatchList = require('../models/watchList')
const accessToDatabase = require('../utils/accessToDatabase')
class MovieService {
    async addStatus({
        title
    }) {
        const status = {
            title
        }
        return await accessToDatabase.create(Status, status)
    }
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
    async changeStatusById(idMovie, statusId) { //?
        // const conditions = {
        //     title: status
        // }
        // const statusId = await accessToDatabase.findId(Status, conditions)
        const dataToChange = {
            statusId
        }
        const movie = await accessToDatabase.updateById(WatchList, idMovie, dataToChange)
        console.log(movie)
        return movie
    }
    async addSimilar(userId, movieId, similarMovieId) {
        const id = accessToDatabase.findId(Status, {
            title: 'watched'
        })
        const conditions = {
            movieId: movieId,
            userId: userId,
            statusId: id
        }

        const movieFromWatchList = await accessToDatabase.readOne(WatchList, conditions)
        const similarMovieFromWatchList = await accessToDatabase.readOne(WatchList, {
            ...conditions,
            movieId: similarMovieId
        })

        if (!movieFromWatchList || !similarMovieFromWatchList) return null
        return await accessToDatabase.create(SimilarMovie, {
            userId,
            movieId: similarMovieId,
            watchListId: movieFromWatchList.id
        })
    }

    async getSimilar(movieId) {
        const conditions = {
            id: movieId
        }
        // const movie = await accessToDatabase.readOne(Movie, conditions)
        const movies = await accessToDatabase.readAllSimilar(conditions)

        return movies
        // console.log(Movie.prototype)
        // return movie.getSimilarMovies()
    }
}

module.exports = new MovieService()