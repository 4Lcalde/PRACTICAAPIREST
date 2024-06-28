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
    const { Name } = req.body
    //Añado una variable que busque si existe ya un nombre en la BBDD
    const peleadorExistente = await Peleador.findOne({ Name })
    //Si existe este peleador se devuelve un mensaje de error
    if (peleadorExistente) {
      return res.status(400).json('El peleador ya existe en la BBDD.')
    }

    //Si no se ejecta el código con normalidad
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
    const { Name } = req.body
    const peleadorDeleted = await Peleador.findByIdAndDelete(id)
    return res.status(200).json(peleadorDeleted)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

const updatePeleador = async (req, res, next) => {
  try {
    const { id } = req.params
    //Cojo los datos del peleador que voy a actualziar
    const { Name, Sport, Age } = req.body

    //Si el peleador existe y el ID no es igual al existente hago que se muestre un mensaje de error
    const peleadorExistente = await Peleador.findOne({ Name })
    if (peleadorExistente && peleadorExistente._id.toString() !== id) {
      return res.status(400).json('El nombre del peleador ya está en uso.')
    }
    //En caso de que no coincida se ejecuta el código de actualziación con normalidad
    const updatedPeleador = await Peleador.findByIdAndUpdate(
      id,
      { Name, Sport, Age },
      { new: true, runValidators: true }
    )

    return res.status(200).json(updatedPeleador)
  } catch (error) {
    return res.status(400).json('La petición ha fallado.')
  }
}

module.exports = {
  getPeleador,
  postPeleador,
  updatePeleador,
  deletePeleador,
  getPeleadores
}
