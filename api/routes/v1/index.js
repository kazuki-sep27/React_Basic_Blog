const express = require('express')
const routes = express.Router()
const passport = require('passport')

// Routes
routes.use('/auth', require('./auth'))

module.exports = routes
