// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//CONTROLLERS
const bandsController = require("./controllers/bands_controllers")
app.use('/bands', bandsController)

// LISTEN
const port = process.env.PORT
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})