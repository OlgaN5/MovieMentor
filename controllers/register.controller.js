const registerService = require('../services/register.service')
const bcrypt = require('bcrypt')

class registerController {
    async register(req, res) {
        try {
            let user = null
            const saltRounds = 4
            const {
                email,
                login,
                password
            } = req.body
            const isEmail = await registerService.findUserByProperty('email', email)
            const isLogin = await registerService.findUserByProperty('login', login)
            if (isEmail) {
                return res.send({
                    message: 'email is exist'
                })
            }
            if (isLogin) {
                return res.send({
                    message: 'login is exist'
                })
            }
            const hashedPassword = await bcrypt.hashSync(password, saltRounds)
            user = await registerService.createUser({
                email,
                login,
                password: hashedPassword
            })
            res.send(user)
        } catch (e) {
            console.log(e.message)
        }
    }
}

module.exports = new registerController()