const { successHandler, errorHandler } = require('../helpers/response-handler')
const sContent = require('../services/content-service')

const validator = require('../helpers/validator')

async function createContent(req, res, next) {
    let data = req.body

    if (!validator.isValidAddContentRequest(data)) {
        const err = {
            name: 'InvalidRequestError',
            message: 'invalid Content Data',
        }
        return errorHandler(err, res)
    }

    sContent.createContent(data.name, data.status, data.detail, data.category, req.user._id);

    return successHandler('add content completed', res)
}

async function updateContent(req, res, next) {
    let data = req.body
    let params = req.params

    if (!validator.isValidUpdateContentRequest(data)) {
        const err = {
            name: 'InvalidRequestError',
            message: 'invalid Content Data',
        }
        return errorHandler(err, res)
    }

    const author = req.user._id
    await sContent.updateContent(params.id, data.name, data.status, data.detail, data.category, author)
        .then(success => {
            if (success) {
                return successHandler('update content completed', res)
            } else {
                const err = {
                    name: 'InvalidRequestError',
                    message: 'Can\'t update data',
                }
                return errorHandler(err, res)
            }
        })
}

async function removeContent(req, res, next) {
    let data = req.params

    if (!validator.isValidRemoveContentRequest(data)) {
        const err = {
            name: 'InvalidRequestError',
            message: 'invalid Content Data',
        }
        return errorHandler(err, res)
    }
    const author = req.user._id
    await sContent.deleteContent(data.id, author).then(success => {
        if (success) {
            return successHandler('remove content completed', res)
        } else {
            const err = {
                name: 'InvalidRequestError',
                message: 'Can\'t delete data',
            }
            return errorHandler(err, res)
        }
    })
}

module.exports = { createContent, updateContent, removeContent }