const Joi = require('joi')
function isValidSchema(data, schema) {
	const valid = schema.validate(data)
	if (valid.error) {
		return false
	}
	return valid.value
}
function isValidLoginRequest(data) {
	const LoginSchema = Joi.object().keys({
		email: Joi.string().email({
			minDomainSegments: 2,
		}),
		password: Joi.string().required(),
	})

	return isValidSchema(data, LoginSchema)
}

function isValidSignupRequest(data) {
	const signUpSchema = Joi.object().keys({
		email: Joi.string().email({
			minDomainSegments: 2,
		}),
		password: Joi.string().required(),
	})

	return isValidSchema(data, signUpSchema)
}

module.exports = {
	isValidLoginRequest,
	isValidSignupRequest,
}
