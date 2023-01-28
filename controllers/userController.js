const asynHandeler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/usermoduk')


const registerUser = asynHandeler(async (req, res) => {
    const { name, email, password } = req.body
    if (!email || !name || !password) {
        res.status(400)
        throw new Error("pleace Fill Field")
    }

    const alredyUser = await User.findOne({ email })

    if (alredyUser) {
        res.status(400)
        throw new Error("Alredy user this email")
    }

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashpassword,
    })

    if (user) {
        res.status(200).json(
            { _id: user.id, name: user.name, email: user.email })
    } else {
        res.status(400)
        throw new Error("Invalid User Data")
    }

    // res.json({ massage: "user succesfull enterd" })
})



const loginUser = asynHandeler(async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })

    // const user = await bcrypt.compare(password, alredyUser.password)
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({
            _id: user.id, name: user.name, email: user.email
        })
    } else {
        res.status(400)
        throw new Error("Invalid conntions")
    }

    // res.json({ massage: "user login" })
})
const getme = asynHandeler(async (req, res) => {
    res.json({ massage: "user get" })
})
module.exports = {
    registerUser,
    getme,
    loginUser,
}