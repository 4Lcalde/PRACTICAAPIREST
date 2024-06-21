const {
  getPeleador,
  postPeleador,
  updatePeleador,
  deletePeleador,
  getPeleadores
} = require('../controllers/peleador')

const peleadorRoutes = require('express').Router()

peleadorRoutes.get('/:id', getPeleadores)
peleadorRoutes.get('/', getPeleador)
peleadorRoutes.post('/', postPeleador)
peleadorRoutes.put('/:id', updatePeleador)
peleadorRoutes.delete('/:id', deletePeleador)

module.exports = peleadorRoutes
