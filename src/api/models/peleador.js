const mongoose = require('mongoose')

const peleadorSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true, unique: true },
    Sport: { type: String, required: true },
    Age: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'peleadores'
  }
)

const Peleador = mongoose.model('peleadores', peleadorSchema, 'peleadores')
module.exports = Peleador
