const mongoose = require('mongoose')

const AuthSchema = mongoose.Schema({
    data
})

module.exports = mongoose.model('auth', AuthSchema)