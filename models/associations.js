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

User.belongsToMany(Movie, {
    through: "similarMovie",
    foreignKey: 'userId',
    // otherKey: 'movieId'
})
Movie.belongsToMany(User, {
    through: "similarMovie",
    foreignKey: 'movieId',
    // otherKey: 'userId'
})


module.exports = {
    User,
    Movie,
    SimilarMovie,
    WatchList
}