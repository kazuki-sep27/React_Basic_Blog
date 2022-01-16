const express = require('express')
const routes = express.Router()
const cors = require('cors')
const corsOptions = require('../configs/whitelist')

routes.use(cors(corsOptions))
routes.use('/v1', require('../routes/v1/index'))

routes.use(function (request, response, next) {
	return response.status(404).send({ code: '404', message: 'URL Not found.' })
})

routes.use(function (err, request, response, next) {
	return response.status(500).send({ error: err })
})

module.exports = routes
