const Joi = require('joi')

function isValidSchema(data, schema) {

	const valid = schema.validate(data)
	if (valid.error) {
		console.log(valid.error)
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

function isValidAddContentRequest(data) {
	const contentSchema = Joi.object().keys({
		name: Joi.string().required(),
		status: Joi.number(),
		detail: Joi.string(),
		category: Joi.string()
	})

	return isValidSchema(data, contentSchema)
}

function isValidUpdateContentRequest(data) {
	const contentSchema = Joi.object().keys({
		name: Joi.string().required(),
		status: Joi.number(),
		detail: Joi.string(),
		category: Joi.string()
	})

	return isValidSchema(data, contentSchema)
}

function isValidRemoveContentRequest(data) {
	const contentSchema = Joi.object().keys({
		id: Joi.string().required()
	})

	return isValidSchema(data, contentSchema)
}

module.exports = {
	isValidLoginRequest,
	isValidSignupRequest,
	isValidAddContentRequest,
	isValidUpdateContentRequest,
	isValidRemoveContentRequest
}
