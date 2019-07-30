const express = require('express')
const router = express.Router()

// @route   GET api/contacts
// @desc    Get all contacts owned by user
// @access  Private
router.get('/', (req, res) => {
    res.send('Gets all contacts')
})

// @route   POST api/contacts
// @desc    Adds new contact to user
// @access  Private
router.post('/', (req, res) => {
    res.send('Add contact')
})

// @route   PATCH api/contacts/:id
// @desc    Get all contacts owned by user
// @access  Private
router.patch('/:id', (req, res) => {
    res.send('Update Contact')
})

// @route   DELETE api/contacts/:id
// @desc    Deletes contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Update Contact')
})

module.exports = router