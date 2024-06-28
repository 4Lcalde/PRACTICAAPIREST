const Competicion = require('../models/competicion')

const getCompeticion = async (req, res, next) => {
  try {
    const { id } = req.params
    const allCompeticiones = await Competicion.find(id).populate('peleadores')
    return res.status(200).json(allCompeticiones)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const getCompeticiones = async (req, res, next) => {
  try {
    const { id } = req.params
    const competicion = await Competicion.findById(id).populate('peleadores')
    return res.status(200).json(competicion)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const postCompeticion = async (req, res, next) => {
  try {
    const { Name } = req.body

    const competicionExistente = await Competicion.findOne({ Name })
    if (competicionExistente) {
      return res.status(400).json('La competición ya existe en la BBDD.')
    }

    const newCompeticion = new Competicion(req.body)
    const competicionSaved = await newCompeticion.save()
    return res.status(201).json(competicionSaved)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const deleteCompeticion = async (req, res, next) => {
  try {
    const { id } = req.params
    const competicionDeleted = await Competicion.findByIdAndDelete(id)
    return res.status(200).json(competicionDeleted)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const updateCompeticion = async (req, res, next) => {
  try {
    const { id } = req.params
    const { Name } = req.body

    const competicionExistente = await Competicion.findOne({ Name })

    if (competicionExistente && competicionExistente._id.toString() !== id) {
      return res.status(400).json('El nombre del peleador ya está en uso.')
    }
    const oldcompeticion = await Competicion.findById(id)
    const newCompeticion = new Competicion(req.body)
    newCompeticion._id = id

    newCompeticion.competiciones = [...oldcompeticion, req.body.plataformas]
    const up = await Competicion.findByIdAndUpdate(id, newCompeticion, {
      new: true
    })
    return res.status(200).json(up)
  } catch (error) {}
}

module.exports = {
  getCompeticion,
  getCompeticiones,
  postCompeticion,
  updateCompeticion,
  deleteCompeticion
}
