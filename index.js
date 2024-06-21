require('dotenv').config()

const express = require('express')
const { connectDB } = require('./src/config/db')
const peleadorRoutes = require('./src/api/routes/routes')
const competicionRoutes = require('./src/api/routes/competicion')

const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log('servidor desplegado en http://localhost:3000')
})

connectDB()

app.use('/api/v1/peleadores', peleadorRoutes)
app.use('/api/v1/competiciones', competicionRoutes)

app.use('*', (req, res, next) => {
  return res.status(400).json('Servidor no encontrado')
})
