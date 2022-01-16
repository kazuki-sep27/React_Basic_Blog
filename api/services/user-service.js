const User = require('../models/User')
const { addNewToken } = require('./token-service');

const { cryptPassword, comparePassword } = require('../helpers/encryption')

async function isDuplicateUser(email) {
	const foundUser = await findUser(email)
	if (foundUser) {
		return true
	} else {
		console.log(foundUser)
		return false
	}
}
async function addUser(email, hash) {
	const user = new User({
		email: email,
		password: hash,
	})
	user.save()
}

async function doSignUp(email, password) {
	const hashPassword = await cryptPassword(password, (err, hash) => {
		addUser(email, hash)
		addNewToken(email)
	})
}

async function checkLogin(email, password) {
	const foundUser = await findUser(email)

	if (!foundUser) return false

	const samePass = await comparePassword(password, foundUser.password)

	if (!samePass) {
		return false
	}

	return foundUser.email
}

async function findUser(email) {
	const foundUser = await User.findOne({ email: email }).select("-password")

	if (!foundUser) return false

	return foundUser
}

module.exports = {
	doSignUp,
	isDuplicateUser,
	checkLogin,
	findUser,
}
