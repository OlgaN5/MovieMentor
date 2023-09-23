const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie.controller')
const authenticate = require('../utils/authenticate')

//in table Movie
router.post('/create', authenticate, movieController.add) 

//?query={movieName}
router.get('/search', authenticate, movieController.search)
router.post('/watchlist', authenticate, movieController.addWatchList)
router.patch('/watchList/:movieId', authenticate, movieController.changeStatus)
//addSimilar
router.post('/:movieId/similar', authenticate, movieController.addSimilar)
router.get('/:movieId/recommendations', authenticate, )

module.exports = router