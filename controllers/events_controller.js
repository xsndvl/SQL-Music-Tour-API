const events = require("express").Router()
const db = require("../models")
const { Band, Meet_Greet, Event, Set_Time } = db
const { Op } = require("sequelize")
const { del } = require("express/lib/application")

//USE NODEMON

events.get("/", async (req, res) => {
    try {
        let foundEvents = await Event.findAll({
            order: [['date', "ASC"]]
        })
        res.status(200).json(foundEvents)
    } catch(err) {
        res.json(err)
    }
})

events.get("/:id", async(req, res) => {
    try {
        let specificEvent = await Event.findOne({
            where: {event_id: req.params.id }
        })
        res.status(200).json(specificEvent)
    } catch(err) {
        res.json(err)
    }
})

events.post("/", async(req, res) => {
    try {
        const createdUser = await Event.create({
            event_id: null,
            name: null,
            date: null,
            start_time: null,
            end_time: null
        })

        res.status(200).json(createdUser())

    } catch (err) {
        res.json(err)
    }
})

events.put("/", (req, res) => {
    res.status(200).send("hello check status this is put")
})

events.delete("/:id", async(req, res) => {
    try{
        const deletedEvent = await Event.destroy({
            where: {
                id: req.params.id
            }
        })

        deletedEvent()
        console.log(`Event ${req.params.id} was deleted`)
    } catch(err) {
        res.json(err)
    }
})
module.exports = events