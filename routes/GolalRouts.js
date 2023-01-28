const express = require('express');
const routes = express.Router()
const { getGoles, postGoles, putGoles, deleteGoles, getoneGoles } = require('../controllers/GetGoles')

routes.get('/', getGoles)

routes.post('/', postGoles)
routes.get('/:id', getoneGoles)


routes.put('/:id', putGoles)
routes.delete('/:id', deleteGoles)



module.exports = routes;
