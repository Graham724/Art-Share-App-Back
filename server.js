require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const artworkRoutes = require('./routes/artwork')


// express app
const app = express()


// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/artworks', artworkRoutes)


// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('DB is connected listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })