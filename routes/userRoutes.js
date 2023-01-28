const express = require('express')
const routes = express.Router()
const { registerUser, loginUser, getme } = require('../controllers/userController')



routes.post('/', registerUser)
// routes.post('/login', loginUser)
routes.get('/me', getme)


module.exports = routes