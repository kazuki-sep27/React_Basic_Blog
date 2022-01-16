var bcrypt = require('bcrypt')

function cryptPassword(password, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		if (err) return callback(err)

		bcrypt.hash(password, salt, function (err, hash) {
			return callback(err, hash)
		})
	})
}

function comparePassword(plainPass, hashword) {
	return bcrypt.compare(plainPass, hashword)
}

module.exports = {
	cryptPassword,
	comparePassword,
}
