const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const inventorySchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    stock: {
      type: Number
    },
    description: {
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
inventorySchema.plugin(mongoosePaginate)
module.exports = mongoose.model('inventory', inventorySchema)
