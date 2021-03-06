const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const inventarioSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    stock: {
      type: Number
    },
    Description: {
      type: String
    },
    proveedor: {
      type: String
    },
    price: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
inventarioSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('inventario', inventarioSchema)
