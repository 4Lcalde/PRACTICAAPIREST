const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('conexión correcta')
  } catch (error) {
    console.log('Conexión errónea')
  }
}

module.exports = {
  connectDB
}
