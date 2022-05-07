const express = require("express")
const test = express.Router()

test.get("/", function (req, res) {
    res.send("hello")
})

module.exports = test