const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({ msg: 'Welcome to Peeps API' }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 2000

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))