const express = require('express')
const routes = express.Router()

const ContentController = require('../../controllers/Content')

routes.post('/', ContentController.createContent)
routes.put('/:id', ContentController.updateContent)
routes.delete('/:id', ContentController.removeContent)

module.exports = routes
