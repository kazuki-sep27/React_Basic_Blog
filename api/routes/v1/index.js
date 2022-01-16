const express = require('express')
const routes = express.Router()
const passport = require('passport')

// Routes
routes.use('/auth', require('./auth'))
routes.use('/content', passport.authenticate('jwt', { session: false }), require('./content'))

module.exports = routes
