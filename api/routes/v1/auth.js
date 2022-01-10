const express = require('express')
const routes = express.Router()
const passport = require('passport')

const AuthController = require('../../controllers/Auth')

routes.post('/signup', AuthController.signup)
routes.post('/login', AuthController.login)
routes.post('/logout', passport.authenticate('jwt', { session: false }), AuthController.logout)

module.exports = routes
