const Sentry = require('@sentry/node')
const movieService = require('../services/movie.service')
const {
    validationResult
} = require('express-validator')
class MovieController {
    async add(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const movie = await movieService.add(req.body)
                res.send(movie)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async search(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const movie = await movieService.search(req.query.movieName)
                res.send(movie)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async addWatchList(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const movie = await movieService.addWatchList({
                    movieId: req.body.movieId,
                    statusId: req.body.statusId,
                    userId: req.idUser
                })
                res.send(movie)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async changeStatus(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const movie = await movieService.changeStatusById(req.params.movieId, req.body.statusId)
                console.log(movie)
                res.send(movie)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async addSimilar(req, res) {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const movie = await movieService.addSimilar(req.idUser, req.params.movieId, req.body.similarMovieId)
                if (!movie) return res.send({
                    message: 'not added'
                })
                res.send(movie)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async getRecommendation(req, res) {
        try {
            const result = validationResult(req)
            console.log(result)
            if (result.isEmpty()) {
                //need to delete dublicate
                const movies = await movieService.getSimilar(req.params.movieId)
                // const filteredMovies = movies.sort((a, b) => +a['movie.id'] - +b['movie.id']).filter((item, index, array) => {
                //    if(array[index - 1] && item['movie.id'] !== array[index - 1]['movie.id']) return item
                //    if(index === 0) return item
                // })
                res.send(movies)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
}
module.exports = new MovieController()