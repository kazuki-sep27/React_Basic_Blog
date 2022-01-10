const jwt = require('jsonwebtoken')
const passport = require('passport')

async function doLogin(req, res, next) {
	passport.authenticate('local', { session: false }, (err, user, info) => {
		if (err) return next(err)
		if (user) {
			const token = jwt.sign(user, process.env.JWT_SECRET)

			return res.json({
				code: 200,
				message: 'success',
				success: 1,
				user,
				token,
			})
		} else {
			return res.json({
				code: 401,
				err: 'unauthorized',
				message: 'Invalid Email or Password',
			})
		}
	})(req, res, next)
}

module.exports = {
	doLogin,
}
