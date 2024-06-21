const mongoose = require('mongoose')

const competicionSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Stadium: { type: String, required: true },
    peleadores: [{ type: mongoose.Types.ObjectId, ref: 'peleadores' }]
  },
  {
    timestamps: true,
    collection: 'competiciones'
  }
)

const Competicion = mongoose.model(
  'competiciones',
  competicionSchema,
  'competiciones'
)
module.exports = Competicion
