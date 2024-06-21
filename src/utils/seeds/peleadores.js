const mongoose = require('mongoose')
const Peleador = require('../../api/models/peleador')
const peleadores = require('../../data/peleadores')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://aitorjimeneztecno:jUz75rHHgH53s4ya@cluster0.ipffk2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('Conectado a BBDD')
    await Peleador.collection.drop()
    await Peleador.insertMany(peleadores)
    await mongoose.disconnect()
    console.log('Desonectado de BBDD')
  } catch (error) {
    console.log('Error')
  }
}

lanzarSemilla()
