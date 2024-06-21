const Peleador = require('../models/peleador')

const getPeleador = async (req, res, next) => {
  try {
    const allPeleadores = await Peleador.find()
    return res.status(200).json(allPeleadores)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}
const getPeleadores = async (req, res, next) => {
  try {
    const { id } = req.params
    const peleadores = await Peleador.findById(id).populate('competiciones')
    return res.status(200).json(peleadores)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const postPeleador = async (req, res, next) => {
  try {
    const newPeleador = new Peleador(req.body)
    const peleadorSaved = await newPeleador.save()
    return res.status(201).json(peleadorSaved)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const deletePeleador = async (req, res, next) => {
  try {
    const { id } = req.params
    const peleadorDeleted = await Peleador.findByIdAndDelete(id)
    return res.status(200).json(peleadorDeleted)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const updatePeleador = async (req, res, next) => {
  try {
    const { id } = req.params
    const newPeleador = new Peleador(req.body)
    newPeleador._id = id
    const up = await Peleador.findByIdAndUpdate(id, newPeleador, { new: true })
    return res.status(200).json(up)
  } catch (error) {}
}

module.exports = {
  getPeleador,
  postPeleador,
  updatePeleador,
  deletePeleador,
  getPeleadores
}
