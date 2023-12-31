const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register.controller')
const {
    body
} = require('express-validator')
const validationBody = [
    body('email').notEmpty().escape().isEmail(),
    body('login').notEmpty().escape().isString().isLength({
        min: 3,
        max: 10
    }).withMessage('The login field must be between 3 and 10 characters long'),
    body('password').notEmpty().isString()
]
/**
 * @swagger
 * /api/register/:
 *   post:
 *     tags:
 *       - Register
 *     requestBody:
 *       description: user
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties: 
 *               login:
 *                 type: string
 *                 default: login
 *               email:
 *                 type: string
 *                 default: email@gmail.com
 *               password:
 *                 type: string
 *                 default: password              
 *     description: returns registered user
 *     summary: use to register user
 *     responses:
 *       '200': 
 *         description: User registered succesfully
 *       '400': 
 *         description: Email or login is exist       
 */

router.post('/', validationBody, registerController.register)

module.exports = router