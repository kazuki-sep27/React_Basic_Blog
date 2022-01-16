const { successHandler, errorHandler } = require('../helpers/response-handler')
const { doSignUp, isDuplicateUser } = require('../services/user-service')
const { doLogin } = require('../services/auth-service')

const validator = require('../helpers/validator')

async function logout(req, res, next) {
    req.logout()
    res.redirect('/')
}

async function login(req, res, next) {
    if (!validator.isValidLoginRequest(req.body)) {
        const err = {
            name: 'InvalidRequestError',
            message: 'invalid username or password',
        }
        return errorHandler(err, res)
    }

    const loginResponse = await doLogin(req, res, next)

    return loginResponse
}

async function signup(req, res) {
    if (!validator.isValidSignupRequest(req.body)) {
        const err = {
            name: 'InvalidRequestError',
            message: 'invalid username or password',
        }
        return errorHandler(err, res)
    }

    const { email, password } = req.body


    if (await isDuplicateUser(email)) {
        const err = {
            name: 'DuplicateError',
            message: 'Email is duplicated',
        }
        return errorHandler(err, res)
    }

    await doSignUp(email, password)

    return successHandler('signup completed', res)
}

module.exports = { signup, login, logout }
