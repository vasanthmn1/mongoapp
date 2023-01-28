const express = require('express');
const { errHandel } = require('./middleware/errorMiddlewar');
// const { onehandel } = require('./middleware/oneerror');
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000
const connetDB = require('./config/db')

const app = express();

connetDB();

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use('/api', require('./routes/GolalRouts'))
// app.use('/user', require('./routes/userRoutes'))

// app.use('/one', require('./routes/anoutherOne'))
app.use(errHandel)
// app.use(onehandel)
app.listen(port, () => {
    console.log(`connting ${port}`)
})