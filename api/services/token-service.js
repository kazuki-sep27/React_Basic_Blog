const Token = require('../models/Token')

const jwt = require('jsonwebtoken')

async function findTokenByEmail(email) {
    const foundToken = await Token.findOne({ email: email })

    if (!foundToken) return false

    return foundToken
}

async function addNewToken(email) {
    if (!findTokenByEmail(email)) {
        const jwtToken = jwt.sign(email, process.env.JWT_SECRET)

        const token = new Token({
            email: email,
            token: jwtToken,
        })

        token.save()
    }
}

module.exports = {
    addNewToken
}