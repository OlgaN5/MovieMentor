const User = require('./user')
const Movie = require('./movie')
const WatchList = require('./watchList')
const SimilarMovie = require('./similarMovie')

User.hasMany(WatchList, {
    foreignKey: 'userId'
})
WatchList.belongsTo(User, {
    foreignKey: 'userId'
})

Movie.hasMany(WatchList, {
    foreignKey: 'movieId'
})
WatchList.belongsTo(Movie, {
    foreignKey: 'movieId'
})

// User.belongsToMany(Movie, {
//     through: "similarMovie",
//     foreignKey: 'userId',
//     // otherKey: 'movieId'
// })
// Movie.belongsToMany(User, {
//     through: "similarMovie",
//     foreignKey: 'movieId',
//     // otherKey: 'userId'
// })
User.hasMany(SimilarMovie, {
    foreignKey: 'userId'
})
SimilarMovie.belongsTo(User, {
    foreignKey: 'userId'
})
Movie.hasMany(SimilarMovie, {
    foreignKey: 'similarMovieId'
})
SimilarMovie.belongsTo(Movie, {
    foreignKey: 'similarMovieId'
})
Movie.hasMany(SimilarMovie, {
    foreignKey: 'movieId'
})
SimilarMovie.belongsTo(Movie, {
    foreignKey: 'movieId'
})


module.exports = {
    User,
    Movie,
    SimilarMovie,
    WatchList
}