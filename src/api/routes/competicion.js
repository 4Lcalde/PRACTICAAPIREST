const {
  getCompeticion,
  postCompeticion,
  updateCompeticion,
  deleteCompeticion,
  getCompeticiones
} = require('../controllers/competicion')

const competicionRoutes = require('express').Router()

competicionRoutes.get('/:id', getCompeticiones)
competicionRoutes.get('/', getCompeticion)
competicionRoutes.post('/', postCompeticion)
competicionRoutes.put('/:id', updateCompeticion)
competicionRoutes.delete('/:id', deleteCompeticion)

module.exports = competicionRoutes
