const express = require('express')
require('dotenv').config()

const Sentry = require('@sentry/node')
const router = require('./routes/index.router')

const {
    User,
    Movie,
    WatchList,
    SimilarMovie
} = require('./models/associations')

const db = require('./config/database')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.listen(port, () => console.log(`Server started on port ${port}`))

db.authenticate()
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err.message))
User.sync().then(() => console.log('User Model synced'))
Movie.sync().then(() => console.log('Movie Model synced'))
WatchList.sync().then(() => console.log('WatchList Model synced')).catch((e)=>console.log(e.message))
SimilarMovie.sync().then(() => console.log('SimilarList Model synced')).catch((e)=>console.log(e.message))

Sentry.init({
    dsn: process.env.DSN,
});

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.errorHandler())

app.use('/api', router)