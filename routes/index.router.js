const express = require('express')
const router = express.Router()
const registerRouter = require('./register.router')
const loginRouter = require('./login.router')

router.use('/register', registerRouter)
router.use('/login', loginRouter)

module.exports = router