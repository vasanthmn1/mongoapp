const asynHandeler = require('express-async-handler')
const goalModul = require('../models/goalModul')


const getGoles = asynHandeler(async (req, res) => {
    const goales = await goalModul.find()
    res.status(200).json(goales)
})

const getoneGoles = asynHandeler(async (req, res) => {
    const products = await goalModul.findById(req.params.id)
    if (!products) {
        res.status(400)
        throw new Error(' Product not get')

    }
    res.status(201).json({
        products
    })
})


const postGoles = asynHandeler(async (req, res) => {
    // console.log(req.body);
    if (!req.body.text) {
        // res.status(400).json({ error: "enter value" })
        throw new Error(`pleace enter value`)
    }
    const goles = await goalModul.create({
        text: req.body.text
    })
    res.status(200).json(goles)
})


const putGoles = asynHandeler(async (req, res) => {

    const goles = await goalModul.findById(req.params.id)

    if (!goles) {
        res.status(400)
        throw new Error(' erroer put')
    }
    const updateGole = await goalModul.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateGole)
})
const deleteGoles = asynHandeler(async (req, res) => {

    const goles = await goalModul.findById(req.params.id)

    if (!goles) {
        res.status(400)
        throw new Error(' erroer delte')
    }
    await goles.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoles,
    postGoles,
    putGoles,
    deleteGoles,
    getoneGoles
}