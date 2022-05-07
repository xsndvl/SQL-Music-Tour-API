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

const eventsController = require("./controllers/events_controller")
app.use('/events', eventsController)

const testController = require("./controllers/test")
app.use("/test", testController)

const stageController = require("./controllers/stage_controllers")
app.use("/stage", stageController)

// LISTEN
const port = process.env.PORT
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})