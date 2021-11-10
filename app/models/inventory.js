const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
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
    },
    storage: {
      type: Object
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
inventorySchema.plugin(mongoosePaginate)
inventorySchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('inventory', inventorySchema)
