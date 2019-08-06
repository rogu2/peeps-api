const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')
const User = require('../models/User')
const Contact = require('../models/Contacts')


// @route   GET api/contacts
// @desc    Get all contacts owned by user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/contacts
// @desc    Adds new contact to user
// @access  Private
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, type, birthday } = req.body

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            birthday,
            type,
            user: req.user.id
        })

        const contact = await newContact.save()
        res.json(contact)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PATCH api/contacts/:id
// @desc    Get all contacts owned by user
// @access  Private
router.patch('/:id', auth, async (req, res) => {
    const { name, email, phone, type, birthday } = req.body

    // Build contact obj
    const contactFields = {}
    if (name) contactFields.name = name
    if (phone) contactFields.phone = phone
    if (email) contactFields.email = email
    if (type) contactFields.type = type
    if (birthday) contactFields.birthday = birthday

    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) return res.status(404).json({ msg: 'Contact Not Found' })

        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' })
        }

        contact = await Contact.findByIdAndUpdate(req.params.id,
            { $set: contactFields },
            { new: true })

        res.json(contact)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   DELETE api/contacts/:id
// @desc    Deletes contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Update Contact')
})

module.exports = router