const express = require('express')
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()
require('./configs/passport');

const app = express()

app.use(cors())

app.use(bodyParser.json({ limit: '25mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }))

app.use(require('./routes'))

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then((result) => {
        app.listen(PORT)
    })
    .catch((err) => {
        console.log(err)
    })