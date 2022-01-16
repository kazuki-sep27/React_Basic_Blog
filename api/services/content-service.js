const Content = require('../models/Content')
var mongoose = require('mongoose');

async function createContent(name, status, detail, category, author) {
    const content = new Content({
        name: name,
        status: status,
        detail: detail,
        category: category,
        author: author,
    })

    content.save()
}

async function isExistsContent(id, author) {
    return Content.exists({ _id: id, author: author })
}

async function updateContent(id, name, status, detail, category, author) {
    if (!Content.isValidId(id)) return false

    if (await isExistsContent(id, author)) {
        return Content.findById(id).then(content => {
            content.name = name
            content.status = status
            content.detail = detail
            content.category = category

            content.save()
            return true
        })
    } else {
        console.log('fail')
        return false
    }
}

async function deleteContent(id, author) {
    if (!Content.isValidId(id)) return false

    if (await isExistsContent(id, author)) {
        return Content.findByIdAndRemove(id).then(doc => {
            return true
        }).catch(err => {
            return false
        })
    }
}

module.exports = {
    createContent,
    updateContent,
    deleteContent
}