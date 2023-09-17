const loginService = require('../services/login.service')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
class loginController {
    async login(req, res) {
        let token = null
        const {
            login,
            email,
            password
        } = req.body
        const user = await loginService.getUser(login, email)
        if (user) {
            const compare = await bcrypt.compare(password, user.password)
            const {
                id
            } = user
            if (compare) {
                token = jwt.sign({
                    id
                }, process.env.SECRET_KEY)
            }
        }
        res.send(token)
    }
}

module.exports = new loginController()