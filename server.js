const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
connectDB()

// Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to Peeps API' }))

// Serve static assets in PROD
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 2000

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))