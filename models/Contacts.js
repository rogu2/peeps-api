const mongoose = require('mongoose')

const ContactsSchema = mongoose.Schema({
    data
})

module.exports = mongoose.model('contacts', ContactsSchema)