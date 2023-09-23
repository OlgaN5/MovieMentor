const Sentry = require('@sentry/node')
const movieService = require('../services/movie.service')

class MovieController {
    async add(req, res) {
        try {
            console.log(req.body)
            const movie = await movieService.add(req.body)
            res.send(movie)
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async search(req, res) {
        try {
            const movie = await movieService.search(req.query.movieName)
            res.send(movie)
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async addWatchList(req, res) {
        try {
            const movieId = await movieService.getId(req.body.movieName)
            // console.log(movieId)
            const movie = await movieService.addWatchList(req.idUser, {
                movieId,
                status: req.body.status,
                userId: req.idUser
            })
            res.send(movie)
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async changeStatus(req, res) {
        try {
            const movie = await movieService.changeStatus(req.parameters.movieId, req.body.status)
            res.send(movie)
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async addSimilar(req, res) {
        try {
            const movie = await movieService.addSimilar(req.parameters.movieId, req.body.status)
            res.send(movie)
        } catch (e) {
            Sentry.captureException(e)
        }
    }
}
module.exports = new MovieController()