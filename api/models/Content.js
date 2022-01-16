const { number } = require('joi')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	status: {
		type: Number
	},
	detail: {
		type: String
	},
	category: {
		type: String
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
})

contentSchema.statics.isValidId = function (id) {
	return mongoose.Types.ObjectId.isValid(id)
}

module.exports = mongoose.model('Content', contentSchema)
