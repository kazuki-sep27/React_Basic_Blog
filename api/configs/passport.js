const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJWT = passportJWT.ExtractJwt
const JWTStrategy = passportJWT.Strategy
const LocalStrategy = require('passport-local').Strategy
const { checkLogin, findUser } = require('../services/user-service')

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email, password, cb) => {
			const user = await checkLogin(email, password)
			if (!user)
				return cb(null, false, { message: 'Incorrect email or password.' })

			return cb(null, user, { message: 'Logged In Successfully' })
		}
	)
)

passport.use(
	new JWTStrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET,
		},
		async (jwtPayload, cb) => {
			try {
				const user = await findUser(jwtPayload)
				if (user) {
					return cb(null, user)
				} else {
					return cb(null, false)
				}
			} catch (error) {
				return cb(error, false)
			}
		}
	)
)
